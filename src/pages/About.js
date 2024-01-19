import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Shop</Typography>
        <p>
          Meet Our Chef The legend behind the yummy taste, Mahesh Jachpure has been
          making home made snacks since 2008. The flavourful goodies cooked at
          home, for home members soon started receiving orders. We have now grown into
          a happy team of 25 people. All committed to just one goal – serving
          you home made snacks made with love. We’ve shipped hundreds of snacks
          pan India, and we’re just getting started.That’s the magic of Namdev Namkeen</p>
        <Typography variant="h4">
          {" "}
          Feel the taste of Namdev Namkeen's
        </Typography>
        <p>
          snacks and sweets are the ultimate way to satisfy your hunger pangs.
          Whether it is a chai accompaniment, or late night movie binge or
          pre-workout sugar cravings, we have something for everything. All our
          products are made freshly, and handmade to perfection without any
          preservatives or added flavours.
        </p>
        <br />

        <Typography variant="h4">We're Here For You</Typography>
        <Typography variant="h7">Everyday | 9am - 11.30pm </Typography>
      </Box>
    </Layout>
  );
};

export default About;
