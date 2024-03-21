import "./Hero.scss";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { Button } from "../../../Components";
import { IoLogoTwitter } from "react-icons/io";
function Hero() {
  return (
    <section className="Hero">
      <div className="scroll ">
        <GoDotFill className=" icon current" size={15}></GoDotFill>
        <GoDotFill className="icon" size={15}></GoDotFill>
        <GoDotFill className="icon" size={15}></GoDotFill>
        <GoDotFill className="icon" size={15}></GoDotFill>
      </div>
      <div className=" hero-content ">
        <h1>Forge your firepower</h1>
        <h2>
          ALL-NEW G604 FOR BATTLE ROYALE MASTERY. FOCUS YOUR SKILL AND OWN EVERY
          MOMENT OF THE FIGHT.
        </h2>
        <p>
          Make your weapons play harder in the configuration you deem fittest.
          Use the 15 programmable controls, LIGHTSPEED or Bluetooth® wireless,
          HERO 16K sensor, and 240 hour battery life to be the fastest
          gunslinger on the battlefield.
        </p>
        <Button name="PLAY ADVANCED"></Button>
      </div>
      <div className="scroll-r  ">
        <FaFacebookF className="icon" size={15}></FaFacebookF>
        <IoLogoTwitter className="icon" size={15}></IoLogoTwitter>
        <SlSocialVkontakte className="icon" size={15}></SlSocialVkontakte>
      </div>
    </section>
  );
}

export default Hero;
