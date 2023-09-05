import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { SWRConfig } from 'swr'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { UIProvider } from '../context'
import { lightTheme } from '../themes'
import { AuthProvider } from '@/context/auth'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
          }}
        >
          <AuthProvider>
              <UIProvider>
                <ThemeProvider theme={ lightTheme }>
                  <CssBaseline />
                  <Component {...pageProps} />
                </ThemeProvider>
              </UIProvider>
          </AuthProvider>
        </SWRConfig>
    </SessionProvider>
  )
}
