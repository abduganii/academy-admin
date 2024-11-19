import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const AuthRoute = [
  {
    url: "/auth",
    Element: Page,
    label: "auth",
    icon: "pi pi-th-large",
    children: [],
    meta: { isLoginIf: false, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/auth/:id",
    Element: Action,
    meta: { isLoginIf: false, role: new Set(["admin"]) }
  }
];


export default AuthRoute;