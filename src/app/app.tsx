import { RouterProvider } from 'react-router'

import { Providers } from '@/app/providers/providers'
import { router } from '@/app/router'

function App() {
	return (
		<Providers>
			<RouterProvider router={router} />
		</Providers>
	)
}

export default App
