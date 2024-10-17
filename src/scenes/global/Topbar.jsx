import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      {/* <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box> */}
      <Box
        display="flex"
        // backgroundColor={colors.primary[400]}
        borderRadius="3px"
        alignItems={"center"}
        gap="5px"
      >
        <Box>
          <p style={{ fontSize: "40px", margin: "0px", padding: "0px" }}>JC</p>
        </Box>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems={"center"}
          gap={0}
        >
          <p style={{ fontSize: "14px", margin: "0px", padding: "0px" }}>
            Grotkopp
          </p>
          <p style={{ fontSize: "14px", margin: "0px", padding: "0px" }}>
            Company
          </p>
        </Box>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <MessageOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>

        {/* <IconButton>
          <PersonOutlinedIcon />
        </IconButton> */}
        <Box display="flex" justifyContent="center" alignItems="center">
          <img
            alt="profile-user"
            width="50px"
            height="50px"
            src={`../../assets/user.png`}
            style={{ cursor: "pointer", borderRadius: "50%" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
