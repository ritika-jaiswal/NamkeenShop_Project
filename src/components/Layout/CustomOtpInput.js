import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

const CustomOtpInput = ({ numInputs, onChange }) => {
  const [otp, setOtp] = useState(Array(numInputs).fill(""));
  const inputRefs = Array(numInputs).fill(0).map((_, index) => (null));

  const handleChange = (e, index) => {
    let value = e.target.value;
    if (!/\d/.test(value)) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input on numeric input
    if (index < numInputs - 1 && value !== "") {
      inputRefs[index + 1].current.focus();
    }

    // Move to the previous input on backspace
    if (index > 0 && value === "") {
      inputRefs[index - 1].current.focus();
    }

    // Notify the parent component of the updated OTP
    onChange(newOtp.join(""));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleChange(e, index)}
          maxLength={1}
          style={{
            width: "30px", // Adjust the width as needed
            height: "40px", // Adjust the height as needed
            marginRight: "5px", // Adjust the spacing between inputs
            textAlign: "center",
            fontSize: "16px", // Adjust the font size
            border: "1px solid #ccc", // Adjust the border style
            borderRadius: "4px", // Adjust the border radius
          }}
          ref={inputRefs[index]}
        />
        
      ))}
    </div>
  );
};

CustomOtpInput.propTypes = {
  numInputs: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomOtpInput;
