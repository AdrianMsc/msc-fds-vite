export interface MscShadowsProps {
  size:
    | "small"
    | "default"
    | "medium"
    | "large"
    | "xLarge"
    | "xxLarge"
    | "inner";
}

export const shadowSizes: { [key in MscShadowsProps["size"]]: string } = {
  small: "shadow-sm",
  default: "shadow",
  medium: "shadow-md",
  large: "shadow-lg",
  xLarge: "shadow-xl",
  xxLarge: "shadow-2xl",
  inner: "shadow-inner",
};
