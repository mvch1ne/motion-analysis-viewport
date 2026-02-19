import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MotionAnalysisViewport from './MotionAnalysisViewport.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MotionAnalysisViewport />
  </StrictMode>,
);
