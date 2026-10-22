import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import PageLayout from '../components/layout/PageLayout';
import HomePage from '../pages/HomePage';
const CurriculumPage = lazy(() => import('../pages/CurriculumPage'));
const DirectoryPage = lazy(() => import('../pages/DirectoryPage'));
const ChapterPage = lazy(() => import('../pages/ChapterPage'));
const LessonPage = lazy(() => import('../pages/LessonPage'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage'));
const ExamplesPage = lazy(() => import('../pages/ExamplesPage'));
const PlaygroundPage = lazy(() => import('../pages/PlaygroundPage'));
const ProgressPage = lazy(() => import('../pages/ProgressPage'));
const TagsPage = lazy(() => import('../pages/TagsPage'));
const GlossaryPage = lazy(() => import('../pages/GlossaryPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const ExercisesPage = lazy(() =>
  import('../pages/PracticePages').then((m) => ({ default: m.ExercisesPage })),
);
const QuizPage = lazy(() =>
  import('../pages/PracticePages').then((m) => ({ default: m.QuizPage })),
);
const InterviewPage = lazy(() =>
  import('../pages/PracticePages').then((m) => ({ default: m.InterviewPage })),
);
export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <p className="route-loading" role="status">
          Opening your learning space…
        </p>
      }
    >
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<ProgressPage dashboard />} />
          <Route path="curriculum" element={<CurriculumPage />} />
          <Route path="chapters/:slug" element={<ChapterPage />} />
          <Route path="lessons" element={<DirectoryPage />} />
          <Route path="lessons/:slug" element={<LessonPage />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="tags/:tag" element={<DirectoryPage />} />
          <Route path="examples" element={<ExamplesPage />} />
          <Route path="playground" element={<PlaygroundPage />} />
          <Route path="exercises" element={<ExercisesPage />} />
          <Route path="quizzes" element={<QuizPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="projects/:id" element={<ProjectsPage />} />
          <Route path="interview" element={<InterviewPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="progress" element={<ProgressPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contribute" element={<AboutPage contribute />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
