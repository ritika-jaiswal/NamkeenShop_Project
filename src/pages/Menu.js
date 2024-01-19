import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "290px", display: "flex", m: 2 }}>
            <Link
              to={`/menu-detail's`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ maxHeight: "200px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom component={"div"}>
                    {menu.name}
                  </Typography>
                  <Typography variant="body2">{menu.description}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "goldenrod",
                    }}
                  >
                    <div className="flex justify-start font-bold">
                      <CurrencyRupeeIcon
                        sx={{
                          fontSize: 16,
                          color: "goldenrod",
                          marginRight: 1,
                          marginTop: "5px",
                        }}
                      />
                      {menu.price} kg
                    </div>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: "goldenrod",
                        "&:hover": {
                          backgroundColor: "#EDDB74", // Hover color
                        },
                        ml: "auto",
                        mt: 2,
                        mb: 1,
                        size: "small",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
