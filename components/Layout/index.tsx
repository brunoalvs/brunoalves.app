import React from "react"

import { Container } from "./styles"

type LayoutProps = {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return <div>{children}</div>
}
