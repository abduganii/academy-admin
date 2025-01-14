import Action from "./pages/action.tsx";
import Page from "./pages/index.tsx";
import IndexInfoPage from "./pages/info-list.tsx";
import IndexCountryPage from "./pages/one-country.tsx";

const BooksRoute = [
  {
    url: "/maps",
    Element: Page,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id",
    Element: IndexCountryPage,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/info_country",
    Element: IndexInfoPage,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/modul",
    Element: Action,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
];

export default BooksRoute;
