import { redirect } from 'react-router'

import PingPage from '@/pages/ping'

export function loader() {
  if (!localStorage.getItem('user')) {
    throw redirect('/login')
  }
}

export function Component() {
  return <PingPage />
}

export function ErrorBoundary() {
  return 'Ping page ErrorBoundary	'
}
