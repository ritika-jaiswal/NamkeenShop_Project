import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Logo from "../../images/bglogo.png";
import { Typography } from "@mui/material";
import EntryDialog from "./EntryDialog"; 
import LoginDialog from "./LoginDialog";
import CustomOtpInput from "./CustomOtpInput";

const VerificationDialog = ({ open, onClose }) => {
  const [showEntryDialog, setShowEntryDialog] = React.useState(false); 
  const [showLoginDialog, setShowLoginDialog] = React.useState(false);

  const handlePhoneNumberVerification = () => {
    console.log("Verifying phone number:", phoneNumber);
    setShowEntryDialog(true); 
  };
  
  const handleLoginDialog = () => {
    console.log("Verifying phone number:", phoneNumber);
    setShowLoginDialog(true);
  };

  const handleClose = () => {
    setShowLoginDialog(false);
    setShowEntryDialog(false);
    onClose();
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleNextButtonClick = () => {
    setShowEntryDialog(true);
  };
  const handleOtpChange = (otp) => {
    console.log("Entered OTP:", otp);
  };
  const handleBackButtonClick = () => {
    setShowLoginDialog(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="flex justify-start -ml-80 mt-2">
            <button onClick={handleBackButtonClick}>{"<"}Back</button>
          </div>
          <div className=" w-40 h-20 -mt-6">
            <img className="Img-main" src={Logo} alt="Namdev Namkeen Logo" />
          </div>

          <DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
          <div className="flex justify-center -mt-4">
            Phone Number Verification
          </div>
          <div className="flex justify-center px-14">
            Enter 4 digit code sent to your phone +91-
          </div>
          {/* <MuiOtpInput
            onChange={(otp) => console.log("OTP entered:", otp)}
            numInputs={4} // Specify the number of OTP inputs (4 digits)
            style={{ width: "40px" }} 
          /> */}
          <div className="mt-4 -mb-6">
            <CustomOtpInput numInputs={4} onChange={handleOtpChange} />
          </div>
          <Box sx={{ p: 2 }}>
            {/* Your login form or content goes here */}
            {/* <TextField
              label="+91  Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                height: "40px", // Adjust the height as needed
                width: "320px", // Adjust the width as needed
              }}
            /> */}

            <div className="flex justify-center mt-4">
              <Button
                variant="contained"
                onClick={handlePhoneNumberVerification}
                sx={{
                  alignSelf: "flex-end",
                  backgroundColor: "goldenrod",
                  "&:hover": {
                    backgroundColor: "#EDDB74", 
                  },
                  mt: 2,
                  mb: 1,
                  size: "small",
                  width: "350px",
                }}
              >
                Confirm
              </Button>
            </div>
            <div className="flex justify-center">
              {" "}
              <button>Resend</button>
            </div>
          </Box>
        </Box>
      </Dialog>

      {/* Render the EntryDialog */}
      <EntryDialog
        open={showEntryDialog}
        onClose={() => setShowEntryDialog(false)}
      />
      {/* <LoginDialog open={showLoginDialog} onClose={() => setShowLoginDialog(false)} /> */}
    </>
  );
};

VerificationDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default VerificationDialog;
