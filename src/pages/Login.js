import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
// import "../styles/Login.css"
import Logo from "../images/bglogo.png"
// import Cookies from "js-cookie";
// import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setError("");
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError("");
    setPasswordError("");
  };

  const loginUser = () => {
    if (!email || !password) {
      if (!email) setEmailError("Email is required.");
      if (!password) setPasswordError("Password is required.");
      return;
    }

//     axios
//       .post("http://localhost:8090/api/employees/login", {
//         username: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log(response.data, "response");
//         if (response.status === 200) {
//           const token = response.data;
//           console.log(token, "token");
//           Cookies.set("token", token, { expires: 1 });
//           setToken(token);

//           navigate("/home");
//         } else {
//           setError("Invalid username or password.");
//         }
//       })
//       .catch((error) => {
//         console.error("API request error:", error);
//         setError("Invalid username or password.");
//       });
  };

  return (
    // <div className="bg-black">
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="Img-logo pb-4 -mb-20 -mt-1">
                <img className="Img-main" src={Logo} alt="Namdev Namkeen Logo" />
        </div>

        <Typography component="h1" variant="h5">
          Welcome to Namdev Namkeen
        </Typography>
        <br /><div className="-my-4"><Typography component="h1" variant="h6">
          Sign In
        </Typography></div>
        
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email ID"
            name="email"
            autoComplete="email"
            defaultValue={"xyz@exazeit.com"}
            autoFocus
            size="small"
            // value={email}
            onChange={handleEmailChange}
            data-testid="email-input"
          />
          {emailError && (
            <Typography variant="body2" color="error">
              {emailError}
            </Typography>
          )}
          <TextField
            fullWidth
            margin="normal"
            required
            name="password"
            label="Password"
            defaultValue={"xyz@123"}
            size="small"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            // value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            data-testid="password-input"
          />
          {passwordError && (
            <Typography variant="body2" color="error">
              {passwordError}
            </Typography>
          )}

          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ alignSelf: "flex-end", backgroundColor: "goldenrod", mt: 2, mb: 1, size: "small" }}
            onClick={loginUser}
            data-testid="signin-button"
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" underline="hover" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" underline="hover" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
    // </div>
  );
};
export default Login;
