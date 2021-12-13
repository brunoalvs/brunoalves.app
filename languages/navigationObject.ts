export interface InavigationList {
  name: string;
  url: string;
}

export interface InavigationObject {
  en: {
    list: InavigationList[];
  };
  pt: {
    list: InavigationList[];
  };
}

let navigationObject: InavigationObject = {
  en: {
    list: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Portfolio",
        url: "/portfolio",
      },
      {
        name: "About Me",
        url: "/about",
      },
      {
        name: "Skills",
        url: "/skills",
      },
      {
        name: "Get in Touch",
        url: "/contact",
      },
    ],
  },
  pt: {
    list: [
      {
        name: "Inicio",
        url: "/",
      },
      {
        name: "Portfólio",
        url: "/portfolio",
      },
      {
        name: "Sobre Mim",
        url: "/about",
      },
      {
        name: "Habilidades",
        url: "/skills",
      },
      {
        name: "Contato",
        url: "/contact",
      },
    ],
  },
};

export default navigationObject;
