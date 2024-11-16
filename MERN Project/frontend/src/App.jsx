import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivateRoute from "./Components/PrivateRoute";
import ProtectAdmin from "./Components/ProtectAdmin";
import UnauthorizedPage from "./Components/unauthorized";
import LoadingScreen from "./Components/Loader";
import AddServices from "./Components/AddServices";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const Contact = lazy(() => import("./Pages/Contact"));
const Services = lazy(() => import("./Pages/Services"));
const UserDetails = lazy(() => import("./Pages/UserDetails"));
const Comments = lazy(() => import("./Components/Comments"));
const UsersList = lazy(() => import("./Components/Users"));
const Admin = lazy(() => import("./Pages/Admin"));
const Profile = lazy(() => import("./Pages/UserProfile"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Retry failed queries twice
      refetchOnWindowFocus: false, // Prevent unnecessary refetching
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow m-10">
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* Public Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/unauthorizedPage" element={<UnauthorizedPage />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/userDetails/:id" element={<UserDetails />} />
                  <Route path="/comments" element={<Comments />} />
                  <Route path="/users" element={<UsersList />} />

                  {/* Admin Protected Routes */}
                  <Route element={<ProtectAdmin />}>
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/addServices" element={<AddServices />} />
                  </Route>
                </Route>
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
