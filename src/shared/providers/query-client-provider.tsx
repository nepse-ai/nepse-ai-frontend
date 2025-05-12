'use client'
import { QueryClientProvider as TanstackQueryProvider } from '@tanstack/react-query'
import { getQueryClient } from '../lib/query-client'

export default function QueryClientProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient()

  return <TanstackQueryProvider client={queryClient}>{children}</TanstackQueryProvider>
}
