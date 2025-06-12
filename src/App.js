import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantsMenu from "./components/RestaurantsMenu";

// HeaderComponent will reference the default export
// Header will reference the named export.

// 💡 In this example, both HeaderComponent and Header point to the same thing,
//  since you're exporting the same function as both default and named. But they don’t have to be the same
//  — you could export something else as default or named if needed.

// chunking
//code splitting
//dynamic bundling
//lazy loading
// on demand loading

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h2>Loading About...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h2>Loading Contact...</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h2>Loading Grocery...</h2>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
