import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [carname, setcarname] = useState("");
  const [vehicledetails, setvehicledetails] = useState("");
  const [servicedetails, setservicedetails] = useState("");
  const [SpecificIssues, setSpecificIssues] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [preferredMode, setPreferredMode] = useState("default");
  const [customeraddress, setcustomeraddress] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!customerName.trim()) {
      errors.customerName = "Customer's name is required";
    } else if (customerName.trim().length < 8) {
      errors.customerName = "Customer's name must be at least 8 characters";
    }

    if (!carname.trim()) {
      errors.carname = "Car name is required";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Customer's phone number is required";
    } else if (phoneNumber.trim().length !== 10) {
      errors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    if (!vehicledetails.trim()) {
      errors.vehicledetails = "Vehicle details are required";
    } else if (vehicledetails.trim().length < 8) {
      errors.vehicledetails = "Vehicle details must be at least 8 characters";
    }

    if (!servicedetails.trim()) {
      errors.servicedetails = "Service details are required";
    } else if (servicedetails.trim().length < 8) {
      errors.servicedetails = "Service details must be at least 8 characters";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Appointment time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please select a future appointment time";
      }
    }

    if (preferredMode === "default") {
      errors.preferredMode = "Please select a preferred mode";
    }

    if (preferredMode === "doorstep" && customeraddress.trim() === "") {
      errors.customeraddress = "Customer address is required for doorstep delivery";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload = {
      customer_name: customerName,
      customer_phone: phoneNumber,
      car_name: carname,
      vehicle_details: vehicledetails,
      service_type: servicedetails,
      specific_issues: SpecificIssues,
      appointment_time: appointmentTime,
      preferred_mode: preferredMode,
      customer_address: customeraddress,
    };

    try {
      await axios.post("http://localhost:8000/api/bookings/create/", payload);
      toast.success("Service Scheduled & saved!", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsSubmitted(true),
        onClose: () => setIsSubmitted(false),
      });

      // Reset form
      setCustomerName("");
      setPhoneNumber("");
      setcarname("");
      setvehicledetails("");
      setservicedetails("");
      setSpecificIssues("");
      setAppointmentTime("");
      setPreferredMode("default");
      setcustomeraddress("");
      setFormErrors({});
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong while saving!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">AutoCare <span className="legal-siteSign">+</span></Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title"><span>Book Service Online</span></h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Owner Full Name:
            <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
            {formErrors.customerName && <p className="error-message">{formErrors.customerName}</p>}
          </label>

          <label>
            Phone Number:
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            {formErrors.phoneNumber && <p className="error-message">{formErrors.phoneNumber}</p>}
          </label>

          <label>
            Car Brand and Model:
            <input type="text" value={carname} onChange={(e) => setcarname(e.target.value)} />
            {formErrors.carname && <p className="error-message">{formErrors.carname}</p>}
          </label>

          <label>
            Vehicle Details:
            <input
              type="text"
              placeholder="e.g. Odometer: 45678 km, Fuel: Petrol, Transmission: Automatic"
              value={vehicledetails}
              onChange={(e) => setvehicledetails(e.target.value)}
            />
            {formErrors.vehicledetails && <p className="error-message">{formErrors.vehicledetails}</p>}
          </label>

          <label>
            Type of Service:
            <select value={servicedetails} onChange={(e) => setservicedetails(e.target.value)}>
              <option value="">Select a Service</option>
              <option value="Basic Service">Basic Service</option>
              <option value="Full Service">Full Service</option>
              <option value="Oil Change">Oil Change</option>
              <option value="AC Check">AC Check</option>
              <option value="Brake Inspection">Brake Inspection</option>
            </select>
            {formErrors.servicedetails && <p className="error-message">{formErrors.servicedetails}</p>}
          </label>

          <label>
            Specific Issues / Complaints:
            <input type="text" value={SpecificIssues} onChange={(e) => setSpecificIssues(e.target.value)} />
          </label>

          <label>
            Preferred Service Time:
            <input type="datetime-local" value={appointmentTime} onChange={(e) => setAppointmentTime(e.target.value)} />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <label>
            Preferred Mode:
            <select value={preferredMode} onChange={(e) => setPreferredMode(e.target.value)}>
              <option value="default">Select</option>
              <option value="doorstep">Doorstep</option>
              <option value="dropoff">Drop-off</option>
            </select>
            {formErrors.preferredMode && <p className="error-message">{formErrors.preferredMode}</p>}
          </label>

          <label>
            Customer's Address:
            <input type="text" value={customeraddress} onChange={(e) => setcustomeraddress(e.target.value)} />
            {preferredMode === "voice" && formErrors.customeraddress && (
              <p className="error-message">{formErrors.customeraddress}</p>
            )}
          </label>

          <button type="submit" className="text-appointment-btn">Confirm Service</button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Service details have been sent to the customer's phone number via SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2010-2025 Autocare+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
