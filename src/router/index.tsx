import { createBrowserRouter } from "react-router-dom";
import {
  MscAlphabeticPager,
  MscBreadcrumb,
  MscDivider,
  MscSpinner,
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
import MscCheckboxPage from "../pages/Checkbox/MscCheckboxPage";
import MscRadioPage from "../pages/Radio/MscRadioPage";
import MscInputPage from "../pages/Input/MscInputPage";
import MscTableModalPage from "../pages/TableModal/MscTableModalPage";
import MscTogglePage from "../pages/Toggle/MscTogglePage";
import MscModalPage from "../pages/Modal/MscModalPage";
import MscDialogPage from "../pages/Dialog/MscDialogPage";
import MscModalListPage from "../pages/ModalList/MscModalListPage";
import MscErrorPage from "../pages/ErrorPage/MscErrorPage";
import MscPagedown from "../pages/Pagedown/MscPagedown";

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
        element: <MscCheckboxPage />,
      },
      {
        path: "Colors",
        element: <MscColorsPage />,
      },
      {
        path: "Dialog",
        element: <MscDialogPage />,
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
        element: <MscInputPage />,
      },
      {
        path: "Link",
        element: <MscLinkPage />,
      },
      {
        path: "Modal",
        element: <MscModalPage />,
      },
      {
        path: "Pagination",
        element: <MscPagination />,
      },
      {
        path: "Radio",
        element: <MscRadioPage />,
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
        element: <MscTogglePage />,
      },
      {
        path: "Filter",
        element: <MscFilterPage />,
      },
      {
        path: "Typography",
        element: <MscTypographyPage />,
      },
      {
        path: "TableModal",
        element: <MscTableModalPage />,
      },
      {
        path: "Error404",
        element: <MscErrorPage />,
      },
      {
        path: "PageDown",
        element: <MscPagedown />,
      },
      {
        path: "MailListModals",
        element: <MscModalListPage />,
      },
    ],
  },
]);
export default router;
