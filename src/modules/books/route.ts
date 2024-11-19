import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/books",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/books/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin"]) }
  }
];

export default BooksRoute;