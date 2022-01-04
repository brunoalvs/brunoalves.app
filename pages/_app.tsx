import type { AppProps } from "next/app"
import Layout from "../components/Templates/Layout"
import { LayoutProvider } from "../contexts/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LayoutProvider>
  )
}

export default MyApp
