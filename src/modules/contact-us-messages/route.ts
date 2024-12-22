import Page from "./index.tsx";

const BooksRoute = [
  {
    url: "/contact-us-messages",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
];

export default BooksRoute;
