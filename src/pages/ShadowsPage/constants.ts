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

export const shadowsCode = `
  <!-- Small shadow -->
  <div class="shadow-sm">Shadow Box</div>
  <!-- Default shadow -->
  <div class="shadow">Shadow Box</div>
  <!-- Medium shadow -->
  <div class="shadow-md">Shadow Box</div>
  <!-- Large shadow -->
  <div class="shadow-lg">Shadow Box</div>
  <!-- Extra large shadow -->
  <div class="shadow-xl">Shadow Box</div>
  <!-- Double extra large shadow -->
  <div class="shadow-2xl">Shadow Box</div>
  <!-- Inner shadow -->
  <div class="shadow-inner">Shadow Box</div>
        `;
