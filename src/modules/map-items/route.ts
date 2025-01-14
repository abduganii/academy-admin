import ActionLegislations from "./legislations/pages/action.tsx";
import PageLegislations from "./legislations/pages/index.tsx";

import PageAntiCorruptions from "./anti_corruptions/index.tsx";
import ActionAntiCorruptions from "./anti_corruptions/action.tsx";

import PageInternationalCooperation from "./international_cooperations/index.tsx";
import ActionInternationalCooperation from "./international_cooperations/action.tsx";

import PageIndexes from "./indexes/index.tsx";
import ActionIndexes from "./indexes/action.tsx";

import PageNationalCooperations from "./national_cooperations/index.tsx";
import ActionNationalCooperations from "./national_cooperations/action.tsx";
const BooksRoute = [
  {
    url: "/maps/:id/info_country/legislations",
    Element: PageLegislations,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id/info_country/legislations/:ItemId",
    Element: ActionLegislations,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/info_country/anti_corruptions",
    Element: PageAntiCorruptions,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id/info_country/anti_corruptions/:ItemId",
    Element: ActionAntiCorruptions,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/info_country/international_cooperations",
    Element: PageInternationalCooperation,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id/info_country/international_cooperations/:ItemId",
    Element: ActionInternationalCooperation,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/info_country/indexes",
    Element: PageIndexes,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id/info_country/indexes/:ItemId",
    Element: ActionIndexes,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  {
    url: "/maps/:id/info_country/national_cooperations",
    Element: PageNationalCooperations,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
    hideIfchildern: true,
  },
  {
    url: "/maps/:id/info_country/national_cooperations/:ItemId",
    Element: ActionNationalCooperations,
    meta: { isLoginIf: true, role: new Set(["admin", "manager"]) },
  },
  
];

export default BooksRoute;
