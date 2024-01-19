// import React from "react";
// import PropTypes from "prop-types";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Logo from "../../images/bglogo.png";
// import { Typography } from "@mui/material";
// import EntryDialog from "./EntryDialog"; // Import the EntryDialog component

// const LoginDialog = ({ open, onClose }) => {
//   const [showEntryDialog, setShowEntryDialog] = React.useState(false); // State for EntryDialog

//   const handlePhoneNumberVerification = () => {
//     // Add logic for phone number verification here
//     // For demonstration purposes, let's just log the phone number for now
//     console.log("Verifying phone number:", phoneNumber);
//     setShowEntryDialog(true); // Open the EntryDialog
//     // onClose(); // Close the LoginDialog (optional)
//   };

//   const [phoneNumber, setPhoneNumber] = React.useState("");

//   const handleNextButtonClick = () => {
//     setShowEntryDialog(true); // Open the EntryDialog
//   };

//   return (
//     <>
//       <Dialog open={open} onClose={onClose}>
//         <Box
//           sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
//         >
//           <div className=" w-40 h-20 ">
//             <img className="Img-main" src={Logo} alt="Namdev Namkeen Logo" />
//           </div>
//           <DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
//           <div className="flex justify-center -mt-4">Phone Number Verification</div>
//           <div className="flex justify-center px-14">Enter your phone number to Login/Sign up</div>
//           <Box sx={{ p: 2 }}>
//             {/* Your login form or content goes here */}
//             <TextField
//               label="+91  Phone Number"
//               variant="outlined"
//               fullWidth
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               sx={{
//                 height: "40px", // Adjust the height as needed
//                 width: "320px", // Adjust the width as needed
//               }}
//             />

//             <div className="flex justify-center mt-4">
//               <Button
//                 variant="contained"
//                 onClick={handlePhoneNumberVerification}
//                 sx={{
//                   alignSelf: "flex-end",
//                   backgroundColor: "goldenrod",
//                   mt: 2,
//                   mb: 1,
//                   size: "small",
//                 }}
//               >
//                 Next
//               </Button>
//             </div>
//           </Box>
//         </Box>
//       </Dialog>

//       {/* Render the EntryDialog */}
//       <EntryDialog open={showEntryDialog} onClose={() => setShowEntryDialog(false)} />
//     </>
//   );
// };

// LoginDialog.propTypes = {
//   open: PropTypes.bool.isRequired,
//   onClose: PropTypes.func.isRequired,
// };

// export default LoginDialog;


import React from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Logo from "../../images/bglogo.png";
import { Typography } from "@mui/material";
import VerificationDialog from "./VerificationDialog"; // Import the EntryDialog component

const LoginDialog = ({ open, onClose }) => {
  const [showVerificationDialog, setShowVerificationDialog] = React.useState(false); // State for EntryDialog

  const handlePhoneNumberVerification = () => {
    // Add logic for phone number verification here
    // For demonstration purposes, let's just log the phone number for now
    console.log("Verifying phone number:", phoneNumber);
    setShowVerificationDialog(true); // Open the EntryDialog
    // onClose(); // Close the LoginDialog (optional)
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleNextButtonClick = () => {
    setShowVerificationDialog(true); // Open the EntryDialog
  };

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <Box
          sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <div className=" w-40 h-20 ">
            <img className="Img-main" src={Logo} alt="Namdev Namkeen Logo" />
          </div>
          <DialogTitle style={{ textAlign: "center" }}>Login</DialogTitle>
          <div className="flex justify-center -mt-4">Phone Number Verification</div>
          <div className="flex justify-center px-14">Enter your phone number to Login/Sign up</div>
          <Box sx={{ p: 2 }}>
            {/* Your login form or content goes here */}
            <TextField
              label="+91  Phone Number"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              sx={{
                height: "40px", // Adjust the height as needed
                width: "320px", // Adjust the width as needed
              }}
            />

            <div className="flex justify-center mt-4">
              <Button
                variant="contained"
                onClick={handlePhoneNumberVerification}
                sx={{
                  alignSelf: "flex-end",
                  backgroundColor: "goldenrod",
                  "&:hover": {
                    backgroundColor: "#EDDB74", // Hover color
                  },
                  mt: 2,
                  mb: 1,
                  size: "small",
                }}
              >
                Next
              </Button>
            </div>
          </Box>
        </Box>
      </Dialog>

      {/* Render the EntryDialog */}
      <VerificationDialog open={showVerificationDialog} onClose={() => setShowVerificationDialog(false)} />
    </>
  );
};

LoginDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginDialog;
