import { type MiddlewareFunction, redirect } from 'react-router'

export const authMiddleware: MiddlewareFunction = () => {
	if (!localStorage.getItem('user')) {
		throw redirect('/login')
	}
}
