import { RouterProvider } from 'react-router-dom'
import GlobalStyle from './styles/globalStyles'
import router from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
