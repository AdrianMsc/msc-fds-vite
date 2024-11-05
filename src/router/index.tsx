import { createBrowserRouter } from "react-router-dom";
import {
  MscAlphabeticPager,
  MscAlert,
  MscBreadcrumb,
  MscButton,
  MscCartActionBar,
  MscCheckbox,
  MscColors,
  MscDialog,
  MscDivider,
  MscDropdown,
  MscTopFilter,
  MscInput,
  MscLink,
  MscModal,
  MscRadio,
  MscShadows,
  MscSpacing,
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
        element: <MscColors palette="primary" />,
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
        element: <MscShadows size="small" />,
      },
      {
        path: "Spacing",
        element: <MscSpacing size={4} />,
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
        element: <MscTypography text="test" />,
      },
    ],
  },
]);
export default router;
