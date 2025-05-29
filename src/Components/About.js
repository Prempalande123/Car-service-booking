import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";
import carServiceImg from "../Assets/man-362150_1280.jpg";


function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={carServiceImg} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to AutoCare Plus, your trusted partner for reliable and personalized car servicing. Our experienced mechanics offer convenient booking options and specialized auto care, prioritizing the performance and safety of your vehicle. Join us on the road to better car health and hassle-free maintenance.
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="🚗 Choose a Service Type"
          description="Find the perfect service for your car – from general maintenance to detailed diagnostics. Our expert mechanics are ready to provide the care your vehicle deserves."
        />

        <SolutionStep
          title="📅 Schedule an Appointment"
          description="Pick a date and time that fits your schedule. We ensure quick, convenient, and efficient service at your preferred time."
        />

        <SolutionStep
          title="🔧 Get Your Service Done"
          description="Our skilled technicians provide high-quality service and personalized attention to your car’s needs – ensuring optimal performance and peace of mind."
        />
      </div>
    </div>
  );
}

export default About;
