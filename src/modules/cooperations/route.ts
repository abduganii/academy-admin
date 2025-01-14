import Page from "./index.tsx";

const CooperationsRoute = [
  {
    url: "/cooperations",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
];

export default CooperationsRoute;
