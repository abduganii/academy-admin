import ActionPage from "./action.tsx";

const BooksRoute = [
  {
    url: "/profile",
    Element: ActionPage,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
];

export default BooksRoute;
