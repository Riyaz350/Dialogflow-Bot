import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ChatBot from './components/chatbot/ChatBot.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatBot />
  },
]);
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='relative min-h-screen'>
        <div className='absolute w-full bottom-0'>
          <RouterProvider router={router} />
        </div>
      </div>
    </QueryClientProvider>
  </StrictMode>,
)
