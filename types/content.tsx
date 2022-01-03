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
