export enum AppRoute {
  HOME = "",
  ABOUT = "O mnie",
  OFFER = "Oferta",
  MENUS = "Jadłospisy",
  KALKULATOR = "Kalkulator",
  CONTACT = "Kontakt",
}

export const AppRoutes = [
  { title: AppRoute.ABOUT, url: "/omnie" },
  { title: AppRoute.OFFER, url: "/oferta" },
  { title: AppRoute.MENUS, url: "/menus" },
  { title: AppRoute.CONTACT, url: "/kontakt" },
];
