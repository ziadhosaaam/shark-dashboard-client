import {
  Authenticated,
  ErrorComponent,
  Refine,
} from "@refinedev/core";
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, MegaphoneIcon } from '@heroicons/react/20/solid';
import { CalendarIcon, ChartPieIcon, ClipboardDocumentCheckIcon, CreditCardIcon, DocumentDuplicateIcon, FolderIcon, HomeIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/24/outline';

import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { dataProvider } from "@refinedev/supabase";
import { supabaseClient } from "../src/utility/supabaseClient";
import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import  authProvider  from "./authProvider";
import { Layout } from "./components/layout";

import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  Home,
  Campaigns,
  Reviewers,
  Payments,
  Reports,
  Products,
  Profile,
  productDetails,
}
from "./pages"
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";

import { ForgotPassword } from "./pages/forgotPassword";
import  AuthPage from "./pages/login";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider(supabaseClient)}
            routerProvider={routerBindings}
            authProvider={authProvider}
            resources={[
               {
                name: "Dashboard",
                list: "/home",
                meta: {
                  icon: <HomeIcon />,
                  label: "Dashboard"
                }
              },
              {
                name: "Campaigns",
                list: "/campaigns",
                meta: {
                  icon: <MegaphoneIcon />
                }
              },
              {
                name: "Reviewers",
                list: "/reviewers",
                meta: {
                  icon: <DocumentDuplicateIcon />
                }
              },
              {
                name: "Payments",
                list: "/payments",
                meta: {
                  icon: <CreditCardIcon />
                }
              },
              {
                name: "Reports",
                list: "/reports", 
                meta: {
                  icon: <ChartPieIcon />
                }
              },
              {
                name: "Profile",
                list: "/profile", 
                meta: {
                  icon: <UserCircleIcon />,
                  label: "Profile"
                }              
              }
           ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
              projectId: "F9Sg75-lHqVc2-CqPQz9",
            }}
          >
            
            <Routes>
              <Route
                element={
                  <Authenticated
                    key="authenticated-inner"
                    fallback={<CatchAllNavigate to="/login" />}
                  >
                    <Layout>
                      <Outlet />
                    </Layout>
                  </Authenticated>
                }
              >
                <Route
                  index
                  element={<NavigateToResource resource="home" />}
                />
                <Route path="/home">
                  <Route index element={<Home />} />
                  <Route path="create" element={<BlogPostCreate />} />
                  <Route path="edit/:id" element={<BlogPostEdit />} />
                  <Route path="show/:id" element={<BlogPostShow />} />
                </Route>
                <Route path="/reviewers">
                  <Route index element={<Reviewers />} />
                  <Route path="create" element={<CategoryCreate />} />
                  <Route path="edit/:id" element={<CategoryEdit />} />
                  <Route path="show/:id" element={<CategoryShow />} />
                </Route>
                <Route path="/campaigns">
                  <Route index element={<Campaigns />} />
                  <Route path="create" element={<CategoryCreate />} />
                  <Route path="edit/:id" element={<CategoryEdit />} />
                  <Route path="show/:id" element={<CategoryShow />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated
                    key="authenticated-outer"
                    fallback={<Outlet />}
                  >
                    <NavigateToResource />
                  </Authenticated>
                }
              >
              <Route path="/login" element={<AuthPage type="login" />} />
              <Route path="/register" element={<AuthPage type="register" />} />
              <Route path="/forgot-password" element={<AuthPage type="updatePassword" />} />
            </Route>
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
          <DevtoolsPanel />
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
