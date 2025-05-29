import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/oil-change.png";
import profile2 from "../Assets/brake-repair.webp";
import profile3 from "../Assets/tire.jpg";
import profile4 from "../Assets/dignostics.jpg";
import "../Styles/Doctors.css";

function ourservices() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Our Services</span>
        </h3>

        <p className="dt-description">
          Explore our wide range of professional car services tailored to keep your vehicle running smoothly. From routine maintenance to advanced diagnostics, we ensure quality and reliability every time.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Oil Change"
          title="Engine Lubrication Service"
          stars="4.9"
          reviews="1500"
        />
        <DoctorCard
          img={profile2}
          name="Brake Repair"
          title="Disc & Pad Replacement"
          stars="4.8"
          reviews="1100"
        />
        <DoctorCard
          img={profile3}
          name="Tire Services"
          title="Wheel Alignment & Rotation"
          stars="4.7"
          reviews="950"
        />
        <DoctorCard
          img={profile4}
          name="Engine Diagnostics"
          title="Advanced Issue Detection"
          stars="4.9"
          reviews="1300"
        />
      </div>
    </div>
  );
}

export default ourservices;
