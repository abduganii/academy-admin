import Action from "./pages/action.tsx";

const AuthRoute = [
 
  {
    url: "/auth/login",
    Element: Action,
    meta: { isLoginIf: false, role: new Set(["admin"]) }
  }
];


export default AuthRoute;