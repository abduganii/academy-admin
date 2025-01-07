import Page from "./index.tsx";


const BooksRoute = [
  {
    url: "/statistics-view",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  
];

export default BooksRoute;