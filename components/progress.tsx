"use client";

// importação de dependências:
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ProgressProvider } from '@bprogress/next/app';

export function Progress() {
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <ProgressProvider
      height={resolvedTheme === 'dark' ? '2px' : '3px'}
      color='var(--sandbr)'
      options={{ showSpinner: false }}
      shallowRouting
    >
    </ProgressProvider>
  );
};