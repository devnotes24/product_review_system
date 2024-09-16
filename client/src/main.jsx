import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApplicationThemeProvider } from './context/ApplicationThemeContext.jsx'
import { GlobalStateProvider } from './context/GlobalStateContext.jsx'
import ToastConfig from './config/ToastConfig.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApplicationThemeProvider>
      <GlobalStateProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <ToastConfig/>
      </QueryClientProvider>
      </GlobalStateProvider>
    </ApplicationThemeProvider>
  </StrictMode>,
)
