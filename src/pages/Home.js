import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Banner from "../images/namkeen.webp";
import Tooltip from '@mui/material/Tooltip';
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1 style={{ color: 'white' }}>Namdev Namkeen</h1>
          <p style={{ color: 'white', marginTop: "-10px" }}>Best Namkeen In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
          <div className="whatsapp-icon-container">
          <Tooltip title="WhatsApp">
            <WhatsAppIcon className="whatsapp-icon" />
            </Tooltip>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
