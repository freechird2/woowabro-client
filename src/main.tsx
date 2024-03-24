import '@styles/font.css'
import { GlobalCommon } from '@styles/globalCommon.ts'
import { GlobalRoot } from '@styles/globalRoot.ts'
import { GlobalStyle } from '@styles/globalStyle.ts'
import theme from '@styles/theme.ts'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from 'App'
import { AuthProvider } from 'AuthProvider'
import { CookiesProvider } from 'react-cookie'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <CookiesProvider>
            <RecoilRoot>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <GlobalRoot />
                        <GlobalStyle />
                        <GlobalCommon />
                        <App />
                    </ThemeProvider>
                </AuthProvider>
            </RecoilRoot>
        </CookiesProvider>
    </QueryClientProvider>
)
