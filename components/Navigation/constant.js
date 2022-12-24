export const routes = [
  {
    name: "INICIO",
    link: "/",
  },

  {
    name: "ACTIVIDADES",
    link: "/actividades",
  },
  {
    name: "SOBRE NOSOTROS",
    link: "#",

    subRoutes: [
      {
        name: "Mision y Visión",
        link: "/misionVision",
      },
      {
        name: "Pastores",
        link: "/pastores",
      },
      {
        name: "Nuestra Historia",
        link: "/historia",
      },
      {
        name: "El Evangelio",
        link: "/evangelio",
      },
    ],
  },
  {
    name: "MEDIA",
    link: "/media",
  },
  {
    name: "DONAR",
    link: "/donar",
  },
];
