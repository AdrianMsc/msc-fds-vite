import Home from '../pages/HomePage';
import DocsLayout from '../layout/DocsLayout';
import MscLinkPage from '../pages/Link/MscLinkPage';
import MscTabsPage from '../pages/Tabs/MscTabsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import MscAlertPage from '../pages/Alert/MscAlertPage';
import MscRadioPage from '../pages/Radio/MscRadioPage';
import MscInputPage from '../pages/Input/MscInputPage';
import MscModalPage from '../pages/Modal/MscModalPage';
import MscPagedown from '../pages/Pagedown/MscPagedown';
import GettingStarted from '../pages/GettingStartedPage';
import MscFilterPage from '../pages/Filter/MscFilterPage';
import MscTogglePage from '../pages/Toggle/MscTogglePage';
import MscDialogPage from '../pages/Dialog/MscDialogPage';
import ComponentStatus from '../pages/ComponentStatusPage';
import MscErrorPage from '../pages/ErrorPage/MscErrorPage';
import MscSpinnerPage from '../pages/Spinner/MscSpinnerPage';
import MscButtonsPage from '../pages/Buttons/MscButtonsPage';
import WipComponent from '../pages/WipComponent/WipComponent';
import MscColorsPage from '../pages/ColorsPage/MscColorsPage';
import MscDividersPage from '../pages/Dividers/MscDividersPage';
import MscCheckboxPage from '../pages/Checkbox/MscCheckboxPage';
import MscDropdownPage from '../pages/Dropdown/MscDropdownPage';
import MscShadowsPage from '../pages/ShadowsPage/MscShadowsPage';
import MscSpacingPage from '../pages/SpacingPage/MscSpacingPage';
import MscBreadcumbPage from '../pages/Breadcumb/MscBreadcumbPage';
import MscModalListPage from '../pages/ModalList/MscModalListPage';
import MscPaginationPage from '../pages/Pagination/MscPaginationPage';
import MscTableModalPage from '../pages/TableModal/MscTableModalPage';
import NotificationsPage from '../pages/Notifications/NotificationsPage';
import MscTypographyPage from '../pages/TypographyPage/MscTypographyPage';
import MscCartActionBarPage from '../pages/CartActionBar/MscCartActionBarPage';
import ComponentTesterPage from '../pages/ComponentTesterPage/ComponentTesterPage';
import MscAlphabeticPagerPage from '../pages/AlphabeticPager/MscAlphabeticPagerPage';
import ChangeLog from '../pages/ChangeLog/ChangeLog';
import ArchitectureFlow from '../pages/ArchitectureFlow/ArchitectureFlow';
import EcosystemPage from '../pages/EcosystemPage/EcosystemPage';
import AtomPage from '../pages/Atom/AtomPage';
import MoleculePage from '../pages/Molecule/MoleculePage';
import OrganismPage from '../pages/Organism/OrganismPage';

import CategoryTagsPage from '../pages/Organism/CategoryTagsPage';
import SliderPage from '../pages/Organism/SliderPage';
import RecentlyViewedPage from '../pages/Organism/RecentlyViewedPage';
import BestSellersPage from '../pages/Organism/BestSellersPage';
import BrowseCategoriesPage from '../pages/Organism/BrowseCategoriesPage';
import ServicesDesignedPage from '../pages/Organism/ServicesDesignedPage';
import TestimonialSectionPage from '../pages/Organism/TestimonialSectionPage';
import SimilarItemsPage from '../pages/Organism/SimilarItemsPage';

import PagePage from '../pages/Page/PagePage';
import TemplatesPage from '../pages/Templates/TemplatesPage';
import BadgePage from '../pages/Atom/BadgePage';
import RatingPage from '../pages/Atom/RatingPage';
import SpecificationsTablePage from '../pages/Organism/SpecificationsTablePage';
import DocumentsSectionPage from '../pages/Organism/DocumentsSectionPage';
import ProductFeaturesPage from '../pages/Organism/ProductFeaturesPage';
import ProtectedRoute from '../components/ProtectedRoute';

export const routesIndex = [
  {
    path: '/',
    element: <Home />,
    errorElement: 'error',
  },
  {
    path: '/docs',
    element: <DocsLayout />,
    errorElement: 'error',
    children: [
      {
        path: 'login-page',
        element: <LoginPage />,
      },
      {
        path: 'WipComponent/:component',
        element: <WipComponent />,
      },
      {
        index: true,
        path: 'Notifications',
        element: <NotificationsPage />,
      },
      {
        index: true,
        path: 'GettingStarted',
        element: <GettingStarted />,
      },
      {
        path: 'ComponentStatus',
        element: <ComponentStatus />,
      },
      {
        path: 'AlphabeticPager',
        element: <MscAlphabeticPagerPage />,
      },
      {
        path: 'Alert',
        element: <MscAlertPage />,
      },
      {
        path: 'Badge',
        element: <BadgePage />,
      },
      {
        path: 'Breadcrumb',
        element: <MscBreadcumbPage />,
      },
      {
        path: 'Buttons',
        element: <MscButtonsPage />,
      },
      {
        path: 'CartActionBar',
        element: <MscCartActionBarPage />,
      },
      {
        path: 'Checkbox',
        element: <MscCheckboxPage />,
      },
      {
        path: 'Colors',
        element: <MscColorsPage />,
      },
      {
        path: 'Dialog',
        element: <MscDialogPage />,
      },
      {
        path: 'Dividers',
        element: <MscDividersPage />,
      },
      {
        path: 'Dropdown',
        element: <MscDropdownPage />,
      },

      {
        path: 'Input',
        element: <MscInputPage />,
      },
      {
        path: 'Link',
        element: <MscLinkPage />,
      },
      {
        path: 'Modal',
        element: <MscModalPage />,
      },
      {
        path: 'Pagination',
        element: <MscPaginationPage />,
      },
      {
        path: 'Radio',
        element: <MscRadioPage />,
      },
      {
        path: 'Rating',
        element: <RatingPage />,
      },
      {
        path: 'SpecificationsTable',
        element: <SpecificationsTablePage />,
      },
      {
        path: 'DocumentsSection',
        element: <DocumentsSectionPage />,
      },
      {
        path: 'ProductFeatures',
        element: <ProductFeaturesPage />,
      },
      {
        path: 'Shadows',
        element: <MscShadowsPage />,
      },
      {
        path: 'Spacing',
        element: <MscSpacingPage />,
      },
      {
        path: 'Spinner',
        element: <MscSpinnerPage />,
      },
      {
        path: 'Tabs',
        element: <MscTabsPage />,
      },
      {
        path: 'Toggle',
        element: <MscTogglePage />,
      },
      {
        path: 'Filter',
        element: <MscFilterPage />,
      },
      {
        path: 'Typography',
        element: <MscTypographyPage />,
      },
      {
        path: 'TableModal',
        element: <ProtectedRoute allowAccess={(user) => user?.role === 'admin'} />,
        children: [{ index: true, element: <MscTableModalPage /> }],
      },
      {
        path: 'Error404',
        element: <MscErrorPage />,
      },
      {
        path: 'PageDown',
        element: <MscPagedown />,
      },
      {
        path: 'MailListModals',
        element: <MscModalListPage />,
      },
      {
        path: 'SimilarItems',
        element: <SimilarItemsPage />,
      },
      {
        path: 'ComponentTester',
        element: <ProtectedRoute allowAccess={(user) => user?.role === 'admin'} />,
        children: [{ index: true, element: <ComponentTesterPage /> }],
      },
      {
        path: 'ChangeLog',
        element: <ChangeLog />,
      },
      {
        path: 'ArchitectureFlow',
        element: <ArchitectureFlow />,
      },
      {
        path: 'Ecosystem',
        element: <EcosystemPage />,
      },
      {
        path: 'Atom',
        element: <AtomPage />,
      },
      {
        path: 'Molecule',
        element: <MoleculePage />,
      },
      {
        path: 'Organism',
        element: <OrganismPage />,
      },
      {
        path: 'CategoryTags',
        element: <CategoryTagsPage />,
      },
      {
        path: 'Slider',
        element: <SliderPage />,
      },
      {
        path: 'RecentlyViewed',
        element: <RecentlyViewedPage />,
      },
      {
        path: 'BestSellers',
        element: <BestSellersPage />,
      },
      {
        path: 'BrowseCategories',
        element: <BrowseCategoriesPage />,
      },
      {
        path: 'ServicesDesigned',
        element: <ServicesDesignedPage />,
      },
      {
        path: 'TestimonialSection',
        element: <TestimonialSectionPage />,
      },

      {
        path: 'Page',
        element: <PagePage />,
      },
      {
        path: 'Templates',
        element: <TemplatesPage />,
      },
    ],
  },
];
