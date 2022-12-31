export enum AppRoute {
  HOME = "",
  ABOUT = "O mnie",
  OFFER = "Oferta",
  MENUS = "Jadłospisy",
  KALKULATOR = "Kalkulator",
  CONTACT = "Kontakt",
  PRICE_LIST = "Cennik",
}

export const AppRoutes = [
  { title: AppRoute.ABOUT, url: "/o-mnie" },
  { title: AppRoute.OFFER, url: "/oferta" },
  { title: AppRoute.PRICE_LIST, url: "/cennik" },
  { title: AppRoute.MENUS, url: "/diety" },
  { title: AppRoute.CONTACT, url: "/kontakt" },
];

export enum RoutePath {
  HOME = "/",
  ABOUT = "/o-mnie",
  OFFER = "/oferta",
  MENUS = "/diety",
  KALKULATOR = "/kalkulator",
  CONTACT = "/kontakt",
  PRICE_LIST = "/cennik",
}
