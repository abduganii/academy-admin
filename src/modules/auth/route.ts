import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const AuthRoute = [
 
  {
    url: "/auth/login",
    Element: Action,
    meta: { isLoginIf: false, role: new Set(["admin"]) }
  }
];


export default AuthRoute;