import React, { ReactNode, ReactElement } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

/*
// Conventional props
function Heading({ title }: { title?: string }) {
  return <h1>{title}</h1>;
}

function HeadingWithContent({ children }: { children: ReactNode }) {
  return <h1>{children}</h1>;
}

// defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;
function Container({ heading, children }: ContainerProps): ReactElement {
  return <h1>{children}</h1>;
}
*/

// conditionally render the Navbar based on the current route
function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // conditionally render Navbar based on the current route
  const hideNavbarOnRoutes = ["/", "/signup", "/login"];
  const shouldHideNavbar = hideNavbarOnRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
