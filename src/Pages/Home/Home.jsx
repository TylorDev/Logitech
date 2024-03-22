import "./Home.scss";
import { Hero, About } from "./Sections";
import NavBar from "./../NavBar";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default Home;
