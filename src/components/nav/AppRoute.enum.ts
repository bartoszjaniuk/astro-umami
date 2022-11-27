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
  { title: AppRoute.KALKULATOR, url: "/kalkulator" },
  { title: AppRoute.CONTACT, url: "/kontakt" },
  { title: AppRoute.HOME, url: "/" },
];

// export const AppRoutes = [
//   { [AppRoute.HOME]: { title: AppRoute.HOME, url: "/" } },
//   { [AppRoute.ABOUT]: { title: AppRoute.ABOUT, url: "/about" } },
//   { [AppRoute.HELP]: { title: AppRoute.HELP, url: "/pomoc" } },
//   { [AppRoute.KALKULATOR]: { title: AppRoute.KALKULATOR, url: "/kalkulator" } },
//   { [AppRoute.CONTACT]: { title: AppRoute.CONTACT, url: "/kontakt" } },
// ];
