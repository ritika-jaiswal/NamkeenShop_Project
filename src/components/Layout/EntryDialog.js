
import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Logo from "../../images/bglogo.png";
import { Typography } from "@mui/material";

const EntryDialog = ({ open, onClose }) => {
//   const handlePhoneNumberVerification = () => {
//     console.log("Verifying phone number:", phoneNumber);
//     onClose(); 
//   };

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Dialog open={open} onClose={onClose}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div className=" w-40 h-20 ">
          <img className="Img-main" src={Logo} alt="Namdev Namkeen Logo" />
        </div>
        <DialogTitle style={{ textAlign: "center" }}>Enter Detail's</DialogTitle>

        <Box sx={{ p: 8 , textAlign: "center"}} >
          {/* Your login form or content goes here */}
          <div className="mb-12 -mt-16">
          <TextField
            label="Enter First Name"
            variant="outlined"
            
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            sx={{
              height: "20px", // Adjust the height as needed
              width: "320px", // Adjust the width as needed
              textAlign: "center",
              marginBottom: "8px",
            }}
          />
          </div>
          <div className="mb-12">
          <TextField
            label="Enter Last Name"
            variant="outlined"
            
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            sx={{
              height: "20px", // Adjust the height as needed
              width: "320px", // Adjust the width as needed
              textAlign: "center"
            }}
          />
          </div>
          <div className="mb-6">
          <TextField
            label="Enter Email"
            variant="outlined"
            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              height: "20px", // Adjust the height as needed
              width: "320px", // Adjust the width as needed
              textAlign: "center",
              marginBottom: "8px",
            }}
          />
          </div>   

          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
            //   onClick={handlePhoneNumberVerification}
              sx={{
                alignSelf: "flex-end",
                backgroundColor: "goldenrod",
                "&:hover": {
                  backgroundColor: "#EDDB74", // Hover color
                },
                mt: 2,
                mb: -6,
                size: "small",
              }}
            >
              Next
            </Button>
          </div>
          {/* <Button variant="contained" onClick={onClose} sx={{ mt: 1 }}>
          Close
        </Button> */}
        </Box>
      </Box>
    </Dialog>
  );
};

EntryDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default EntryDialog;
