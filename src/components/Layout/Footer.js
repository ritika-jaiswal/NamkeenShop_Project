import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon onClick={() => window.open('https://www.instagram.com/', '_blank')}/>
          <LanguageIcon onClick={() => window.open('https://ritika-jaiswal.github.io/ritika-jaiswal/', '_blank')} />
          {/* <GitHubIcon onClick={() => window.open('https://github.com/ritika-jaiswal', '_blank')}/> */}
          {/* <YouTubeIcon /> */}
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Contact no - 7000220574
          <br/>
          Name - Stayam Jain
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
