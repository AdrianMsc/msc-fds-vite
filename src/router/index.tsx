import { createBrowserRouter } from "react-router-dom";
import {
  MscAlphabeticPager,
  MscAlert,
  MscBreadcrumb,
  MscButton,
  MscCartActionBar,
  MscCheckbox,
  MscDialog,
  MscDivider,
  MscDropdown,
  MscTopFilter,
  MscInput,
  MscLink,
  MscModal,
  MscRadio,
  MscSpinner,
  MscTabs,
  MscToggle,
  MscTypography,
  MscPagination,
} from "../components";
import GettingStarted from "../pages/GettingStartedPage";
import Home from "../pages/HomePage";
import DocsLayout from "../layout/DocsLayout";
import ComponentStatus from "../pages/ComponentStatusPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MscColorsPage from "../pages/ColorsPage/MscColorsPage";
import MscShadowsPage from "../pages/ShadowsPage/MscShadowsPage";
import MscSpacingPage from "../pages/SpacingPage/MscSpacingPage";
import MscTypographyPage from "../pages/TypographyPage/MscTypographyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: "error",
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    errorElement: "error",
    children: [
      {
        path: "login-page",
        element: <LoginPage />,
      },
      {
        index: true,
        element: <GettingStarted />,
      },
      {
        path: "ComponentStatus",
        element: <ComponentStatus />,
      },
      {
        path: "AlphabeticPager",
        element: <MscAlphabeticPager />,
      },
      {
        path: "Alert",
        element: <MscAlert />,
      },
      {
        path: "Breadcrumb",
        element: <MscBreadcrumb />,
      },
      {
        path: "Buttons",
        element: <MscButton />,
      },
      {
        path: "CartActionBar",
        element: <MscCartActionBar />,
      },
      {
        path: "Checkbox",
        element: <MscCheckbox />,
      },
      {
        path: "Colors",
        element: <MscColorsPage />,
      },
      {
        path: "Dialog",
        element: <MscDialog />,
      },
      {
        path: "Divider",
        element: <MscDivider />,
      },
      {
        path: "Dropdown",
        element: <MscDropdown />,
      },

      {
        path: "Input",
        element: <MscInput />,
      },
      {
        path: "Link",
        element: <MscLink />,
      },
      {
        path: "Modal",
        element: <MscModal />,
      },
      {
        path: "Pagination",
        element: <MscPagination />,
      },
      {
        path: "Radio",
        element: <MscRadio />,
      },
      {
        path: "Shadows",
        element: <MscShadowsPage />,
      },
      {
        path: "Spacing",
        element: <MscSpacingPage />,
      },
      {
        path: "Spinner",
        element: <MscSpinner />,
      },
      {
        path: "Tabs",
        element: <MscTabs />,
      },
      {
        path: "Toggle",
        element: <MscToggle />,
      },
      {
        path: "Filter",
        element: <MscTopFilter />,
      },
      {
        path: "Typography",
        element: <MscTypographyPage />,
      },
    ],
  },
]);
export default router;
