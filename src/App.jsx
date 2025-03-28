import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";
import ForwardChain from "./views/ForwardChain";
import BackwardChain from "./views/BackwardChain";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/disney/",
    element: (
      <>
        <Layout /> 
        <Footer /> {/* Footer appears on all pages */}
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      { 
        path: "zero",
        element: <SimpleNLP />,
      },
      {
        path: "first",
        element: <ForwardChain />,
      },
      {
        path: "second",
        element: <BackwardChain />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
