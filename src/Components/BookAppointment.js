import React from "react";
import Doctor from "../Assets/doctor-book-appointment.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";
import carServiceImg from "../Assets/ai-generated-8214510_1280.jpg";


function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={carServiceImg} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose AutoCare Plus</span>
        </h3>
        <p className="ba-description">
          Discover why AutoCare Plus is the right choice for your car servicing needs. Enjoy expert care, hassle-free booking, and personalized automotive solutions — all designed to keep your vehicle running smoothly. Drive worry-free with trusted service you can rely on.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon style={{ color: "#1E8FFD" }} /> ✅ Expert Mechanics You Can Trust

        </p>
        <p className="ba-checks">
          <FontAwesomeIcon style={{ color: "#1E8FFD" }} /> 🚨 Emergency Repairs Available
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon  style={{ color: "#1E8FFD" }} /> 💬 24/7 Customer Support & Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon style={{ color: "#1E8FFD" }} /> ⚡ Quick & Easy Booking Process
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Service
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
