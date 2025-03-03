import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

function Bottom(UniversalTheme) {
  const navigate = useNavigate();
  const BottomTheme = createTheme({
    components: {
      MuiBottomNavigationAction: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              color: "#E1306C",
            },
          },
        },
      },
    },
  });

  const [Tab, setTab] = React.useState(0);
  const handleChange = (e, newValue) => {
    setTab(newValue);
  };

  return (
    <ThemeProvider theme={BottomTheme}>
      <BottomNavigation
        value={Tab}
        onChange={handleChange}
        sx={{
          bottom: 0,
          position: "fixed",
          width: "100%",
          bgcolor: "white",
          borderTop: "1px solid #dbdbdb",
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label="Add"
          icon={<AddIcon />}
          onClick={() => navigate("/Add")}
        />
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircleIcon />}
          onClick={() => navigate("/Profile")}
        />
      </BottomNavigation>
    </ThemeProvider>
  );
}

export default Bottom;
