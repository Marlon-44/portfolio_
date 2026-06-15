import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  AppRoutes } from './app/AppRouter'
import { CursorFollower } from './shared/components/CursorFollower'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CursorFollower/>
      <AppRoutes/>
  </StrictMode>,
)
