import { Suspense, lazy, useEffect } from "react";
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
import ViewServices from "./Components/ViewServices";
import { scheduleTokenRefresh, isTokenExpired } from "./Hooks/authUtils";
import { RefreshToken } from "./Hooks/refreshToken";

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
  useEffect(() => {
    const initializeAuth = async () => {
      console.log("Initializing authentication...");
  
      const accessToken = localStorage.getItem("Token");
      const refreshToken = localStorage.getItem("refreshToken");
  
      if (!refreshToken) {
        console.warn("No refresh token found. Please log in again.");
        return;
      }
  
      if (!accessToken || isTokenExpired(accessToken)) {
        console.log("Access token is missing or expired. Attempting to refresh...");
        try {
          await RefreshToken(refreshToken);
          console.log("Access token successfully refreshed.");
  
          scheduleTokenRefresh(refreshToken, async () => {
            console.log("Scheduled token refresh triggered.");
            await RefreshToken(refreshToken);
            console.log("Access token refreshed successfully after schedule.");
          });
        } catch (error) {
          console.error("Error refreshing access token:", error);
        }
      } else {
        console.log("Access token is still valid. Scheduling the next refresh...");
        scheduleTokenRefresh(refreshToken, async () => {
          console.log("Scheduled token refresh triggered.");
          await RefreshToken(refreshToken);
          console.log("Access token refreshed successfully after schedule.");
        });
      }
    };
  
    initializeAuth();
  }, []); // Empty dependency array ensures this runs once when the component mounts
  
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
                <Route
                  path="/unauthorizedPage"
                  element={<UnauthorizedPage />}
                />

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
                    <Route path="/viewServices" element={<ViewServices />} />
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
