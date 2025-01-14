import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/users",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/users/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin"]) }
  },

];

export default BooksRoute;