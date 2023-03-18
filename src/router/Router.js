import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Pages
import Users from "../pages/Users";
import UserDetail, { userDetailLoader } from "../pages/UserDetail";
import NotFound from "../pages/NotFound";
import LoaderError from "../components/LoaderError";

// Layouts
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Users />} />
      <Route
        path="user/:id"
        element={<UserDetail />}
        loader={userDetailLoader}
        errorElement={<LoaderError />}
      />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
