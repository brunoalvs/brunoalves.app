export interface INavigationObject {
  name: string
  url: string
}

export interface INavigation {
  en: {
    list: INavigationObject[]
  }
  pt: {
    list: INavigationObject[]
  }
}
