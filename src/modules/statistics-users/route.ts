import Page from "./index.tsx";
import OneBook from "./one-book.tsx";
import IndexOnePage from "./one-user.tsx";

const BooksRoute = [
  {
    url: "/statistics-users",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/statistics-users/:id",
    Element: IndexOnePage,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/statistics-users/:id/:userId",
    Element: OneBook,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
];

export default BooksRoute;