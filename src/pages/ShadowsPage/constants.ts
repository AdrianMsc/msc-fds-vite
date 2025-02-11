export const shadows = {
  title: "Shadows",
  category: "Foundations",
  description:
    "The Msc Shadows component demonstrates the various shadow effects available in our design system. By selecting different sizes, users can see how shadows enhance the visual depth and hierarchy of UI elements. This component is essential for understanding how to apply consistent shadow styles across your application, ensuring a cohesive and polished look.",
};

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
