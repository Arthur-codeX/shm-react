import About from "./About";
import Navigation from "./Navigation";
import Home from "./Home";
import Contact from "./Contact";

function ManualRoute() {
  return (
    <div style={{ display: "flex" }}>
      <Navigation />
      <div style={{ flex: 1 }} className="m-2">
        <Home />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default ManualRoute;
