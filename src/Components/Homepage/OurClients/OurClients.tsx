import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Clients } from "./ClientsDummyData";

function OurClients() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="our-clients">
      <Icon icon="ri:double-quotes-l" color="gray" width="100" height="100" />
      <div className="our-clients__text-container">
        <div className="our-clients__text">{Clients[selectedIndex].text}</div>
      </div>
      <div className="our-clients__name">
        {Clients[selectedIndex].name + ","}
        {" " + Clients[selectedIndex].ocupation}
      </div>
      <div className="our-clients__clients-container">
        {Clients.map((item, index) => {
          const selectedItem =
            selectedIndex === index
              ? "our-clients__image-overlay our-clients__image-overlay--selected"
              : "our-clients__image-overlay";

          return (
            <div className="our-clients__image-container">
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={selectedItem}
              ></div>
              <img
                className="our-clients__image"
                src={item.image}
                alt="Client"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClients;
