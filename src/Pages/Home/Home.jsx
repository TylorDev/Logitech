import "./Home.scss";
import { Hero } from "./Sections";
import NavBar from "./../NavBar";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default Home;
