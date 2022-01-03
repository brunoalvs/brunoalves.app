export interface IContentHome {
  title: string
  subtitle: string
  content:
    | string
    | {
        __html: string
      }
  avatar: {
    active: boolean
    src?: string
    alt?: string
  }
}

export interface IContentAbout {
  title: string
  subtitle: string
  content: {
    __html: string
  }
}
