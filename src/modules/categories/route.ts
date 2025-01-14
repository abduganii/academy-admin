import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/categories",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
 
];

export default BooksRoute;