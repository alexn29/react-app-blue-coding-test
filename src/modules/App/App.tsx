import type { ReactElement } from 'react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '@/modules/Home'

const queryClient = new QueryClient()

function App(): ReactElement {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </MantineProvider>
  )
}

export default App
