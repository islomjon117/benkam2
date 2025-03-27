import "../equipment/equipment.css";

import img1 from "../../assets/ddshop/img9.png";

const Equipment = () => {
  return (
    <>
      <div className="equipment" id="equipment">
        <div className="equipment_title">
          <h1>Equipment</h1>
          <p>Technological equipment for the production of aluminum profiles</p>
        </div>

        <div className="container">
          <div className="equipment_main">
            <div className="equipment_box_left">
              <img src={img1} alt="" />
            </div>

            <div className="equipment_table">
              <div className="equipment_table_left">
                <ul>
                  <li>A vertical storage of aluminum cylindrical ingots</li>
                  <li>Preheating furnace (450-480gr. C.)</li>
                  <li>
                    Hot guillotine, for cutting of aluminium cylindrical ingot
                    to specified length (ticket)
                  </li>
                  <li>Cylindrical container to maintain the temperature.</li>
                  <li>
                    Pressing die for pushing the workpiece through the die.
                  </li>
                  <li>
                    Stanina for installing the required die set (forming tool).
                  </li>
                </ul>
              </div>

              <div className="equipment_table_right">
                <ul>
                  <li>
                    Hardening system installation Cooling system (air + water
                    spraying). Total length 8000 mm.
                  </li>
                  <li>
                    Lateral double puller (gripping drafting device) with hot
                    cutting saw Tensile strength up to 300 kg.
                  </li>
                  <li>
                    Cooling table, maximum stretching length of aluminum
                    profiles 56m.
                  </li>
                  <li>Cold saw, Diameter saw 750 mm.</li>
                  <li>
                    Stacker cut into measured lengths of aluminum profiles, in
                    baskets.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Equipment;
