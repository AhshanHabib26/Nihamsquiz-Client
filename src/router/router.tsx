import { DashboardLayout } from "@/layout/DashboardLayout";
import MainLayout from "@/layout/MainLayout";
import ProtectedRoute from "@/layout/ProtectedRoute";
import { AllCategoryPage } from "@/pages/Dashboard/Category";
import { AnalyticsPage } from "@/pages/Dashboard/Analytics";
import { CommentPage } from "@/pages/Dashboard/Comment";
import HomePage from "@/pages/Dashboard/Home";
import LoginPage from "@/pages/Main/Login";
import RegisterPage from "@/pages/Main/Register";
import UserPage from "@/pages/Dashboard/User";
import { Home } from "@/pages/Main/Home";
import { createBrowserRouter } from "react-router-dom";
import { AboutUsPage } from "@/pages/Main/AboutUs";
import { ContactUsPage } from "@/pages/Main/ContactUs";
import { CreateCategoryPage } from "@/pages/Dashboard/CreateCategory";
import { CreateQuizPage } from "@/pages/Dashboard/CreateQuiz";
import { AllQuizPage } from "@/pages/Dashboard/Quiz";
import QuizDetails from "@/pages/Main/QuizDetails";
import QuizSubmissionPage from "@/pages/Main/QuizSubmission";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz-details/:id",
        element: <QuizDetails />,
      },
      {
        path: "/quiz-submission/:id",
        element: <QuizSubmissionPage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "all-quiz",
        element: <AllQuizPage />,
      },
      {
        path: "create-quiz",
        element: <CreateQuizPage />,
      },
      {
        path: "create-quiz/:id",
        element: <CreateQuizPage />,
      },
      {
        path: "create-category",
        element: <CreateCategoryPage />,
      },
      {
        path: "create-category/:id",
        element: <CreateCategoryPage />,
      },
      {
        path: "all-category",
        element: <AllCategoryPage />,
      },
      {
        path: "comments",
        element: <CommentPage />,
      },
      {
        path: "all-user",
        element: <UserPage />,
      },
      {
        path: "analytics",
        element: <AnalyticsPage />,
      },
    ],
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);
