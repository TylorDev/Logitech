import "./Product.scss";

import { GoDotFill } from "react-icons/go";
import { ProductCard, HeaderScroll } from "../../../Components";
function Product() {
  return (
    <div className="Products">
      <div className="PrTittle">PRODUCT</div>
      <div className="product-list">
        <ProductCard
          img={"product1.png"}
          title={"15 Programmable controls"}
          content={
            "Program, refine, and win. Master your arsenal in Battle Royale, MMO,and MOBA gameplay with tactically positioned controls in optimal quantity and configuration. Refine and align keybinds, perfect your commands, and win."
          }
        ></ProductCard>
        <ProductCard
          img={"product2.png"}
          title={"Dual connectivity with lightspeed"}
          content={
            "One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth®—even across two separate machines."
          }
        ></ProductCard>
        <ProductCard
          img={"product3.png"}
          title={"Hero 16K sensor"}
          content={
            "One click lets you toggle between ultra-fast 1ms LIGHTSPEED wireless and Bluetooth®—even across two separate machines."
          }
        ></ProductCard>
        <ProductCard
          img={"product4.png"}
          title={"Spin. Ratchet. Switch"}
          content={
            "A durable metal scroll wheel switches between hyper-fast and ratcheted scrolling. Fly through menus, ratchet through weapon and spell selections, or apply keybinds to up-and-down inputs"
          }
        ></ProductCard>
      </div>

      <div className="vertical-line">
        <div className="dots">
          <GoDotFill className={"dot"} size={30}></GoDotFill>
          <GoDotFill className={"dot"} size={30}></GoDotFill>
          <GoDotFill className={"dot"} size={30}></GoDotFill>
          <GoDotFill className={"dot"} size={30}></GoDotFill>
        </div>
      </div>
      <HeaderScroll third={true}></HeaderScroll>
    </div>
  );
}

export default Product;
