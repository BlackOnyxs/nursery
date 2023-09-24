import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import { SWRConfig } from 'swr'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'

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
                  <GlobalStyles  
                    styles={{
                      '*': {
                        boxSizing: 'border-box',
                      },
                      html: {
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        height: '100%',
                        WebkitOverflowScrolling: 'touch',
                      },
                      body: {
                        margin: 0,
                        padding: 0,
                        width: '100%',
                        height: '100%',
                      },
                      '#root': {
                        width: '100%',
                        height: '100%',
                      },
                    }}
                  />
                  <Component {...pageProps} />
                </ThemeProvider>
              </UIProvider>
          </AuthProvider>
        </SWRConfig>
    </SessionProvider>
  )
}
