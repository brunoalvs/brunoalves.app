import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Layout from "../components/Organisms/Layout"
import { LayoutProvider } from "../contexts/layout"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </LayoutProvider>
  )
}

export default MyApp
