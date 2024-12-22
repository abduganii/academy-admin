import Page from "./index.tsx";

const BooksRoute = [
  {
    url: "/user-messages",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
];

export default BooksRoute;
