export type PaletteKey =
  | "monochromes"
  | "white"
  | "off_white"
  | "primary"
  | "brand_blue"
  | "success"
  | "warning"
  | "error";

export const palettes: { name: string; key: PaletteKey }[] = [
  { name: "Monochromes", key: "monochromes" },
  { name: "White", key: "white" },
  { name: "Off White", key: "off_white" },
  { name: "Primary", key: "primary" },
  { name: "Brand blue", key: "brand_blue" },
  { name: "Success", key: "success" },
  { name: "Warning", key: "warning" },
  { name: "Error", key: "error" },
];
