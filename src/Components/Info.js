import React from "react";
import InformationCard from "./InformationCard";
import { faCar, faShower, faWrench } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
         We bring car care to your convenience, offering a range of complimentary services designed to enhance your experience. Enjoy added benefits like free pickup and drop, a complimentary car wash, interior vacuuming, and vehicle health checks — all at no extra cost. Our goal is to keep both you and your car running smoothly.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Free Pickup & Drop"
          description="We offer complimentary pickup and drop services to save you time and hassle. Just schedule your service, and we’ll take care of the logistics—so you can relax while we take care of your vehicle."
          icon={faCar}
        />

        <InformationCard
          title="Complimentary Car Wash"
          description="Every service appointment includes a free exterior car wash. Drive away in a car that’s not only serviced but also sparkling clean."
          icon={faShower}
        />

        <InformationCard
          title=" Basic Vehicle Health Check"
          description="Our technicians perform a free multi-point vehicle health check during each visit. From fluid levels and tire pressure to brake conditions and battery status, we ensure your car is road-ready and safe."
          icon={faWrench}
        />
      </div>
    </div>
  );
}

export default Info;
