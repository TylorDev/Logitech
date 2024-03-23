import "./Product.scss";
import { Card } from "./../../../Components";
function Product() {
  return (
    <div className="Product">
      <div className="Product-img">
        <img src="product1.png" id="p1" alt="" />
        <img src="product2.png" id="p2" alt="" />
        <img src="product3.png" id="p3" alt="" />
        <img src="product4.png" id="p4" alt="" />
      </div>
      <div className="cards ">
        <Card
          subtitle={"15 Programmable controls: "}
          content={
            "Program, refine, and win. Master your arsenal in Battle Royale, MMO, and MOBA gameplay with tactically positioned controls in optimal quantity and configuration. Refine and align keybinds, perfect your commands, and win."
          }
        ></Card>
        <Card
          subtitle={"15 Programmable controls "}
          content={
            "One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth®—even across two separate machines."
          }
        ></Card>
        <Card
          subtitle={"Dual connectivity with lightspeed"}
          content={
            "One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth®—even across two separate machines."
          }
        ></Card>
        <Card
          subtitle={"Spin. Ratchet. Switch"}
          content={
            "A durable metal scroll wheel switches between hyper-fast and ratcheted scrolling. Fly through menus, ratchet through weapon and spell selections, or apply keybinds to up-and-down inputs"
          }
        ></Card>
      </div>
    </div>
  );
}

export default Product;
