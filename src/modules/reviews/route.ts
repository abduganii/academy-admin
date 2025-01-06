import Page from "./index.tsx";
import OneItemPage from "./one-item.tsx";
// import IndexOnePage from "./one-user.tsx";

const BooksRoute = [
  {
    url: "/reviews",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },
  {
    url: "/reviews/:id",
    Element: OneItemPage,
    meta: { isLoginIf: true, role: new Set(["admin"]) },
    hideIfchildern: true
  },

];

export default BooksRoute;