export type CardRoute = {
  path: string;
  label: string;
  shortLabel: string;
};

export const CARD_ROUTES: CardRoute[] = [
  { path: "/", label: "Home", shortLabel: "Inicio" },
  { path: "/nosotros", label: "Nosotros", shortLabel: "Nosotros" },
  { path: "/equipo", label: "Equipo", shortLabel: "Equipo" },
  { path: "/areas", label: "Areas", shortLabel: "Areas" },
  { path: "/contacto", label: "Contacto", shortLabel: "Contacto" },
];

export const BROCHURE_URL = "/docs/brochure.pdf";
