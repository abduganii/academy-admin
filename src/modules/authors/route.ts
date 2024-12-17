import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/authors",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/articles-authors",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
];

export default BooksRoute;