import { HeaderScroll, Card } from "../../../Components";
import "./About.scss";

function About() {
  return (
    <section className="about">
      <div className="about-top">
        <HeaderScroll second={true}></HeaderScroll>{" "}
        <div className="mouse ">
          <img className="img" src="About.png" alt="" />
        </div>
        <Card
          title={"MAKE YOUR PLAY"}
          subtitle={
            "Your power, your control. Conquer MOBA, MMO, and Battle Royale gameplay with the strategically designed G604 LIGHTSPEED Wireless Gaming Mouse."
          }
          content={
            "15 programmable controls join forces with ultra-fast LIGHTSPEED dual connectivity and the class-leading HERO 16K sensor. It’s a multifaceted battle weapon that lets you play longer, play better, and make your play."
          }
          name={"BUY"}
        ></Card>
      </div>
      <div className="about-img">
        <img src="Hero.jpg" alt="" />
      </div>
    </section>
  );
}

export default About;
