import { createBrowserRouter } from 'react-router'

import { authMiddleware } from '@/app/middlewares/auth-middleware'

export const router = createBrowserRouter([
	{
		children: [
			{
				path: 'ping',
				middleware: [authMiddleware],
				lazy: {
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
