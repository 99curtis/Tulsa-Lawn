import { useNavigate } from 'react-router-dom';
import { startTransition, useCallback } from 'react';

export default function useDeferredNavigate() {
  const navigate = useNavigate();

  const deferredNavigate = useCallback((to, options) => {
    startTransition(() => {
      navigate(to, options);
    });
  }, [navigate]);

  return deferredNavigate;
}