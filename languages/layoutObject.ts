import navigationObject, { InavigationList } from "./navigationObject";

interface IlayoutObject {
  meta: {
    description: {
      name: "description";
      content: string;
    };
    keywords: {
      name: "keywords";
      content: string[];
    };
    title: {
      name: "title";
      content: string;
    };
  };
  topheader: {
    changeTheme: {
      turnDark: string;
      turnLight: string;
    };
  };
  header: {
    menuButton: {
      name: string;
    };
    navigation: InavigationList[];
  };
}

let layoutObject = {
  en: <IlayoutObject>{
    meta: {
      description: {
        name: "description",
        content:
          "Front End Developer, UI/UX Designer, and Full Stack Developer",
      },
      keywords: {
        name: "keywords",
        content: [
          "Front End Developer",
          "UI/UX Designer",
          "UI Developer",
          "Full Stack Developer",
          "JavaScript Developer",
        ],
      },
      title: {
        name: "title",
        content: "Bruno Alves",
      },
    },
    topheader: {
      changeTheme: {
        turnDark: "Turn on Night Mode",
        turnLight: "Turn on Day Mode",
      },
    },
    header: {
      menuButton: {
        name: "Click to open menu",
      },
      navigation: navigationObject.en.list,
    },
  },
  pt: <IlayoutObject>{
    meta: {
      description: {
        name: "description",
        content: "Desenvolvedor Front End, UI/UX Designer e Full Stack",
      },
      keywords: {
        name: "keywords",
        content: [
          "Desenvolvedor Front End",
          "UI/UX Designer",
          "Desenvolvedor de Interface",
          "Desenvolvedor Full Stack",
          "Desenvolvedor JavaScript",
        ],
      },
      title: {
        name: "title",
        content: "Bruno Alves",
      },
    },
    topheader: {
      changeTheme: {
        turnDark: "Ligar Modo Noturno",
        turnLight: "Ligar Modo Diurno",
      },
    },
    header: {
      menuButton: {
        name: "Clique para abrir o menu",
      },
      navigation: navigationObject.pt.list,
    },
  },
};

export default layoutObject;
