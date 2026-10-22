import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
const client = new QueryClient({ defaultOptions: { queries: { retry: false } } });
function Catalog() {
  const query = useQuery({
    queryKey: ['local-courses'],
    staleTime: 60000,
    queryFn: async ({ signal }) => {
      const response = await fetch(`${import.meta.env.BASE_URL}data/courses.json`, { signal });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return response.json();
    },
  });
  return (
    <section className="panel">
      <h2>Cached local course catalog</h2>
      {query.isPending ? (
        <p role="status">Loading…</p>
      ) : query.isError ? (
        <p role="alert">{query.error.message}</p>
      ) : (
        <ul>
          {query.data.map((c) => (
            <li key={c.id}>
              {c.title} · {c.minutes} minutes
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? 'Refreshing…' : 'Refetch courses'}
      </button>
      <p>Query key: local-courses. Freshness: 60 seconds. No remote API is used.</p>
    </section>
  );
}
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <Catalog />
    </QueryClientProvider>
  );
}
