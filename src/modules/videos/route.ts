import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const BooksRoute = [
  {
    url: "/videos",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/videos/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
];

export default BooksRoute;
