import "./Home.scss";
import { Hero, About, Product, Specs } from "./Sections";
import NavBar from "./../NavBar";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Product></Product>
      <Specs></Specs>
      <Footer></Footer>
    </div>
  );
}

export default Home;
