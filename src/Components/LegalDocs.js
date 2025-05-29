import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
  <p className="legal-title">General Info</p>
  <p className="legal-description">
    Welcome to AutoCare Plus, your trusted online car service platform. Our
    mission is to provide accessible and personalized vehicle maintenance
    services to individuals seeking expert auto care and repair. By using
    our platform, you agree to the terms outlined in our Privacy Policy
    and Terms of Service.
  </p>

  <p className="legal-title">Privacy Policy</p>
  <p className="legal-description">
    Your privacy is important to us. Our Privacy Policy outlines how we
    collect, use, and protect your personal and vehicle-related information.
    We ensure secure data handling and treat all your information with the
    utmost confidentiality.
  </p>

  <p className="legal-title">Terms of Service</p>
  <p className="legal-description">
    When using AutoCare Plus, you agree to our Terms of Service. This
    includes guidelines for using our platform, booking services,
    communicating with mechanics, and the responsibilities of both
    customers and service providers. Understanding these terms ensures a
    smooth and efficient experience.
  </p>

  <p className="legal-title">Car Services</p>
  <p className="legal-description">
    Our platform connects you with certified mechanics who offer a wide
    range of car services, from routine maintenance to complex repairs.
    These services are provided at your convenience—either at our partner
    garages or via doorstep service. Providing accurate vehicle information
    helps us deliver the best service possible.
  </p>

  <p className="legal-title">How it Works</p>
  <p className="legal-description">
    AutoCare Plus simplifies vehicle maintenance. You can select the
    service you need, choose a mechanic or service center, and schedule an
    appointment. Our professionals offer tailored service plans based on
    your vehicle’s condition. Please note that emergency breakdowns
    should be addressed by immediate roadside assistance.
  </p>
</div>


      <div className="legal-footer">
        <p>© 2010-2025 AutoCare +. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
