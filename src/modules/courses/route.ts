import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";

const CoursesRoute = [
  {
    url: "/courses",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/courses/:id",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
];

export default CoursesRoute;
