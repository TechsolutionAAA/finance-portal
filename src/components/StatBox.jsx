import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ title, subtitle, icon, color }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      width="100%"
      m="0 10px"
      
    >
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection="row"
        gap="10px"
        widhth="100%"
        height="100%"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          backgroundColor={color}
          borderRadius="50%"
          width="50px"
          height="50px"
        >
          {icon}
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          mt="2px"
          flexDirection="column"
        >
          <Typography
            variant="h5"
            sx={{ color: { color }, fontSize: "30px", marginBottom: "15px" }}
          >
            {subtitle}
          </Typography>
          <Typography sx={{ color: colors.grey[100] }}>{title}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
