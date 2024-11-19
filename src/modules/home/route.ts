import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const HomeRoute = [
  {
    url: "/home",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/home/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin"]) }
  }
];

export default  HomeRoute;