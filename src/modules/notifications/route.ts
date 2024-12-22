import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/notifications",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/notifications/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin"]) }
  },

];

export default BooksRoute;