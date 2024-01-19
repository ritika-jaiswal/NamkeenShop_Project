import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Sev from "../images/sev.jpg";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
import SelectSmall from "./SelectSmall";
import SelectCounter from "./SelectCounter";

export default function MenuDetails() {
  const [value, setValue] = React.useState(2);

  return (
    <List
      sx={{ width: "100%", maxWidth: "screen", bgcolor: "background.paper" }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar sx={{ width: "500px", height: "500px" }}>
          <img
            alt="Remy Sharp"
            src={Sev}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              variant="h5" // Adjust the variant and fontSize as needed
              fontWeight="semibold"
            >
              Tikhi Sev
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                variant="body2"
                color="text.primary"
                sx={{ fontWeight: "semibold" }}
              >
                Indulge in the fiery zest of Thika Sev, a symphony of gram flour
                strands infused with a tantalizing blend of spices. Each bite is
                a burst of flavor, igniting your taste buds with a delightful
                blend of heat and aroma. Experience the irresistible crunch that
                will leave you craving more. Thika Sev, a culinary delight that
                will tantalize your senses and leave you wanting more.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row", // Set the flexDirection to row
                  alignItems: "center",
                  color: "goldenrod",
                  mt: 2,
                }}
              >
                <div className="flex justify-start font-bold">
                  <CurrencyRupeeIcon
                    sx={{
                      fontSize: 16,
                      color: "goldenrod",
                      marginRight: 1,
                      marginTop: "1px",
                    }}
                  />
                  200 kg
                </div>
                <Rating
                  sx={{ marginLeft: "12px", fontSize: 20 }}
                  name="read-only"
                  value={value}
                  readOnly
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // .}}
                />
              </Box>
              <div className="flex ">
                {" "}
                <div>
                  <SelectSmall />{" "}
                </div>
                <div className="mt-2">
                  <SelectCounter />
                </div>
              </div>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: "goldenrod",
                  "&:hover": {
                    backgroundColor: "#EDDB74", // Hover color
                  },
                  // ml: "auto",
                  size: "small",
                  mt: "8px",
                  width: "300px",
                  display: "flex",
                }}
              >
                Add to Cart
              </Button>
            </React.Fragment>
          }
          sx={{ marginLeft: 4, paddingRight: 2, paddingTop: 4 }}
        />
      </ListItem>
    </List>
  );
}
