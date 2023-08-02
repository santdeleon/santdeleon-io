import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// =============================================================================
// Constants
// =============================================================================

const CACHE_TIME_MS = 1000 * 60 * 5;

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: 3,
      cacheTime: CACHE_TIME_MS,
      staleTime: CACHE_TIME_MS,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      networkMode: 'offlineFirst',
    },
  },
});

// =============================================================================
// Main Component
// =============================================================================

export const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
  </QueryClientProvider>
);
