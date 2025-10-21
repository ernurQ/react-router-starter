import { isRouteErrorResponse, useRouteError } from 'react-router'

export function ErrorBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <pre>{JSON.stringify(error.data, null, 2)}</pre>
      </div>
    )
  }

  if (error instanceof Error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
      </div>
    )
  }

  return <h1>Unknown error</h1>
}

export function HydrateFallback() {
  return <p>Loading...</p>
}
