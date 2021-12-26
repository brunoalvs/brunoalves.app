import type { AppProps } from "next/app"
import { LayoutProvider } from "../contexts/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  )
}

export default MyApp
