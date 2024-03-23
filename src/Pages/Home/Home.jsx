import "./Home.scss";
import { Hero, About, Product } from "./Sections";
import NavBar from "./../NavBar";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
}

export default Home;
