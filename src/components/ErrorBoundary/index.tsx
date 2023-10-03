import { ErrorBoundaryProps, ErrorBoundaryState } from '@components/ErrorBoundary/types';
import React, { Suspense } from 'react';

import { Message, Spinner } from './styled';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error: error.message };
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <Suspense fallback={<Spinner />}>
          <Message>{error}</Message>
        </Suspense>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
