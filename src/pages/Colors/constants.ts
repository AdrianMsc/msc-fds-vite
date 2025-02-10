export const colors = {
  title: "Colors",
  category: "Foundations",
  description:
    "Welcome to our Color Palette Showcase, an integral part of our design system. Here, you’ll find a range of colors, each represented by a precise hexadecimal code. This guide ensures consistent application of our brand’s colors across all platforms and mediums, reflecting our identity and enhancing user experience. Use this as your reference for maintaining visual harmony in your designs",
};

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
