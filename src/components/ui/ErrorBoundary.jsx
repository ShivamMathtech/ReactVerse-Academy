import { Component } from 'react';
export default class ErrorBoundary extends Component {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    return this.state.error ? (
      <section className="empty">
        <h1>This view could not load</h1>
        <p>Your browser-local progress is still saved if storage is available.</p>
        <button onClick={() => location.reload()}>Reload the application</button>
      </section>
    ) : (
      this.props.children
    );
  }
}
