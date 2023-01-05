import { useEffect } from "react"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"
import { Fira_Sans_Condensed } from "@next/font/google"

import * as gtag from "../lib/gtag"
import Analytics from "../components/Atoms/Analytics"
import Layout from "../components/Organisms/Layout"
import { LayoutProvider } from "../contexts/layout"

const firaSansCondensedLight = Fira_Sans_Condensed({
  weight: "300",
  subsets: ["latin"],
})

const firaSansCondensedRegular = Fira_Sans_Condensed({
  weight: "400",
  subsets: ["latin"],
})

const firaSansCondensedBold = Fira_Sans_Condensed({
  weight: "600",
  subsets: ["latin"],
})

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <LayoutProvider>
      <Layout
        className={`${firaSansCondensedLight.className} ${firaSansCondensedRegular.className} ${firaSansCondensedBold.className}`}
      >
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </LayoutProvider>
  )
}

export default MyApp
