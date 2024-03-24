import { HeaderScroll } from "../../../Components";
import "./Specs.scss";

function Specs() {
  return (
    <div className="Specs">
      <HeaderScroll fourth={true}></HeaderScroll>
      <div className="pageTittle">SPECIFICATIONS</div>
      <div className="specifications">
        <div className="column">
          <div className="specs-tittle"> Physical specifications </div>
          <ul>
            <li>
              <span>Height</span>130 Mm
            </li>
            <li>
              <span>Width</span>80 Mm
            </li>
            <li>
              <span>Depth</span>45 Mm
            </li>
            <li>
              <span>Height</span>135 G,With AA Battery
            </li>
          </ul>

          <div className="specs-tittle"> Tracking</div>
          <ul>
            <li>
              <span>Sensor: </span>HERO™ 16K
            </li>
            <li>
              <span>Resolution: </span>100-16,000 DPI Zero
              Smoothing/Acceleration/Filtering
            </li>
            <li>
              <span>Max. Acceleration: </span> {"> 40 C"}
            </li>
            <li>
              <span>Max. Speed: </span> {"> 400 IPS Responsiveness"}
            </li>
            <li>
              <span>USB Data Format :</span>16 Bits/Axis
            </li>
          </ul>
        </div>
        <div className="column">
          <div className="specs-tittle"> Physical specifications </div>
          <ul>
            <ul>
              <li>
                <span>LIGHTSPEED Wireless report rate:</span> 1000 Hz (Ims)
              </li>
              <li>
                <span>Bluetooth® report rate:</span> 88-133 Hz (7.5-11.25 ms)
              </li>
              <li>
                <span>Microprocessor:</span> 32-bit ARM Durability
              </li>
              <li>
                <span>PTFE Feet:</span> 250-km range Battery life
              </li>
              <li>
                <span>LIGHTSPEED mode:</span> up to 240 hours (non-stop gaming)
              </li>
              <li>
                <span>Bluetooth® mode:</span> up to 5.5 months (standard usage)
              </li>
            </ul>
          </ul>
        </div>
        <div className="column">
          <div className="specs-tittle"> Other Features </div>
          <ul>
            <li>Dual Mode Hyper-Fast Scroll Wheel</li>
            <li>Onboard Memory</li>
            <li>Mechanical Button Tensioning System</li>
            <li>Height 135 G,With AA Battery</li>
          </ul>
          <div className="specs-tittle"> Requirements </div>
          <ul>
            <ul>
              <li>
                <span>LIGHTSPEED Mode:</span> USB Port And Windows® 7 Or Later,
                MacOS 10.12 Or Later, Chrome OS™, Or Android™ 3.2 Or Later
              </li>
              <li>
                <span>Bluetooth® Mode:</span> Bluetooth®-Enabled Device With
                Windows® 8 Or Later, MacOS 10.12 Or Later, Chrome OS™, Or
                Android™ 5.0 Or Later
              </li>
              <li>Internet Access For Logitech G HUB Software Download</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Specs;
