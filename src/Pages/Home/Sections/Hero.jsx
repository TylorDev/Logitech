import "./Hero.scss";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { HeaderScroll } from "../../../Components";
import { IoLogoTwitter } from "react-icons/io";
import { Card } from "../../../Components/";
function Hero() {
  return (
    <section className="Hero">
      <HeaderScroll first={true}></HeaderScroll>
      <Card
        title={"Forge your firepower"}
        subtitle={
          "ALL-NEW G604 FOR BATTLE ROYALE MASTERY. FOCUS YOUR SKILL AND OWN EVERY MOMENT OF THE FIGHT."
        }
        content={
          "Make your weapons play harder in the configuration you deem fittest. Use the 15 programmable controls, LIGHTSPEED or Bluetooth® wireless, HERO 16K sensor, and 240 hour battery life to be the fastest gunslinger on the battlefield."
        }
        name={"PLAY ADVANDED"}
      />
      <div className="scroll-r  ">
        <FaFacebookF className="icon" size={15}></FaFacebookF>
        <IoLogoTwitter className="icon" size={15}></IoLogoTwitter>
        <SlSocialVkontakte className="icon" size={15}></SlSocialVkontakte>
      </div>
    </section>
  );
}

export default Hero;
