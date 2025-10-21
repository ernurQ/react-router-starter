import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
  {
    children: [
      {
        path: 'ping',
        lazy: {
          loader: async () => (await import('@/app/routes/ping')).loader,
          Component: async () => (await import('@/app/routes/ping')).Component,
          ErrorBoundary: async () =>
            (await import('@/app/routes/ping')).ErrorBoundary,
        },
      },
      {
        path: '*',
        lazy: {
          Component: async () =>
            (await import('@/app/routes/system/not-found')).Component,
        },
      },
    ],
    lazy: {
      ErrorBoundary: async () =>
        (await import('@/app/routes/system/index')).ErrorBoundary,
    },
    HydrateFallback: (await import('@/app/routes/system/index'))
      .HydrateFallback,
  },
])
