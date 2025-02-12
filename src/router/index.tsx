import { createBrowserRouter } from "react-router-dom";
import {
  MscAlphabeticPager,
  MscBreadcrumb,
  MscCheckbox,
  MscDialog,
  MscDivider,
  MscInput,
  MscModal,
  MscRadio,
  MscSpinner,
  MscToggle,
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
import MscButtonsPage from "../pages/Buttons/MscButtonsPage";
import MscCartActionBarPage from "../pages/CartActionBar/MscCartActionBarPage";
import MscDropdownPage from "../pages/Dropdown/MscDropdownPage";
import MscLinkPage from "../pages/Link/MscLinkPage";
import MscTabsPage from "../pages/Tabs/MscTabsPage";
import MscFilterPage from "../pages/Filter/MscFilterPage";
import MscAlertPage from "../pages/Alert/MscAlertPage";

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
        element: <MscAlertPage />,
      },
      {
        path: "Breadcrumb",
        element: <MscBreadcrumb />,
      },
      {
        path: "Buttons",
        element: <MscButtonsPage />,
      },
      {
        path: "CartActionBar",
        element: <MscCartActionBarPage />,
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
        element: <MscDropdownPage />,
      },

      {
        path: "Input",
        element: <MscInput />,
      },
      {
        path: "Link",
        element: <MscLinkPage />,
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
        element: <MscTabsPage />,
      },
      {
        path: "Toggle",
        element: <MscToggle />,
      },
      {
        path: "Filter",
        element: <MscFilterPage />,
      },
      {
        path: "Typography",
        element: <MscTypographyPage />,
      },
    ],
  },
]);
export default router;
