import React, { ReactNode, ReactElement } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

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
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
