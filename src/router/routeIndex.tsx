import Home from "../pages/HomePage";
import DocsLayout from "../layout/DocsLayout";
import MscLinkPage from "../pages/Link/MscLinkPage";
import MscTabsPage from "../pages/Tabs/MscTabsPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MscAlertPage from "../pages/Alert/MscAlertPage";
import MscRadioPage from "../pages/Radio/MscRadioPage";
import MscInputPage from "../pages/Input/MscInputPage";
import MscModalPage from "../pages/Modal/MscModalPage";
import MscPagedown from "../pages/Pagedown/MscPagedown";
import GettingStarted from "../pages/GettingStartedPage";
import MscFilterPage from "../pages/Filter/MscFilterPage";
import MscTogglePage from "../pages/Toggle/MscTogglePage";
import MscDialogPage from "../pages/Dialog/MscDialogPage";
import ComponentStatus from "../pages/ComponentStatusPage";
import MscErrorPage from "../pages/ErrorPage/MscErrorPage";
import MscSpinnerPage from "../pages/Spinner/MscSpinnerPage";
import MscButtonsPage from "../pages/Buttons/MscButtonsPage";
import WipComponent from "../pages/WipComponent/WipComponent";
import MscColorsPage from "../pages/ColorsPage/MscColorsPage";
import MscDividersPage from "../pages/Dividers/MscDividersPage";
import MscCheckboxPage from "../pages/Checkbox/MscCheckboxPage";
import MscDropdownPage from "../pages/Dropdown/MscDropdownPage";
import MscShadowsPage from "../pages/ShadowsPage/MscShadowsPage";
import MscSpacingPage from "../pages/SpacingPage/MscSpacingPage";
import MscBreadcumbPage from "../pages/Breadcumb/MscBreadcumbPage";
import MscModalListPage from "../pages/ModalList/MscModalListPage";
import MscPaginationPage from "../pages/Pagination/MscPaginationPage";
import MscTableModalPage from "../pages/TableModal/MscTableModalPage";
import MscSimilarItems from "../pages/SimilarItems/MscSimilarItemsPage";
import NotificationsPage from "../pages/Notifications/NotificationsPage";
import MscTypographyPage from "../pages/TypographyPage/MscTypographyPage";
import MscCartActionBarPage from "../pages/CartActionBar/MscCartActionBarPage";
import ComponentTesterPage from "../pages/ComponentTesterPage/ComponentTesterPage";
import MscAlphabeticPagerPage from "../pages/AlphabeticPager/MscAlphabeticPagerPage";

export const routesIndex = [
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
        path: "WipComponent/:component",
        element: <WipComponent />,
      },
      {
        index: true,
        path: "Notifications",
        element: <NotificationsPage />,
      },
      {
        index: true,
        path: "GettingStarted",
        element: <GettingStarted />,
      },
      {
        path: "ComponentStatus",
        element: <ComponentStatus />,
      },
      {
        path: "AlphabeticPager",
        element: <MscAlphabeticPagerPage />,
      },
      {
        path: "Alert",
        element: <MscAlertPage />,
      },
      {
        path: "Breadcrumb",
        element: <MscBreadcumbPage />,
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
        path: "Dividers",
        element: <MscDividersPage />,
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
        element: <MscPaginationPage />,
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
        element: <MscSpinnerPage />,
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
      {
        path: "SimilarItems",
        element: <MscSimilarItems />,
      },
      {
        path: "ComponentTester",
        element: <ComponentTesterPage />,
      },
    ],
  },
];
