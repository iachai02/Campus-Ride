import React, { ReactNode, ReactElement } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./css/Global.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateGroup from "./components/CreateGroup";
import JoinGroup from "./components/JoinGroup";
import EventsPage from "./pages/EventsPage";
import EventList from "./components/EventList";

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

interface Event {
  title: string;
  group: string;
  date: string;
  questions?: { type: string; question: string }[];
}

function App() {
  const user = { isGroupCreator: true };
  const events: Event[] = [
    { title: "Event 1", group: "Group 1", date: "2024-01-01" },
  ];
  const groups = ["Group 1", "Group 2"];

  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/role-signup" element={<SignUpPage />} />
            <Route path="/create-group" element={<CreateGroup />} />
            <Route path="/join-group" element={<JoinGroup />} />
            <Route
              path="/event-list"
              element={<EventList events={events} groups={groups} />}
            />
            <Route path="/events" element={<EventsPage user={user} />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
