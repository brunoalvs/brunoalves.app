import type { AppProps } from "next/app"
import { Analytics } from "@vercel/analytics/react"
import Layout from "../components/Organisms/Layout"
import { LayoutProvider } from "../contexts/layout"
import { Fira_Sans_Condensed } from '@next/font/google'

const firaSansCondensedLight = Fira_Sans_Condensed({
  weight: "300",
  subsets: ["latin"]
})

const firaSansCondensedRegular = Fira_Sans_Condensed({
  weight: "400",
  subsets: ["latin"]
})

const firaSansCondensedBold = Fira_Sans_Condensed({
  weight: "600",
  subsets: ["latin"]
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Layout
        className={
          `${firaSansCondensedLight.className} ${firaSansCondensedRegular.className} ${firaSansCondensedBold.className}`
        }
      >
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </LayoutProvider>
  )
}

export default MyApp
