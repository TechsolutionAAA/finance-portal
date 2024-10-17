import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import React, { useState } from "react";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import EuroIcon from "@mui/icons-material/Euro"; // Import the Euro icon
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"; // Import Dollar icon
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const currentDate = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      month: "short",
      day: "2-digit",
      year: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            gap: "20px",
          }}
        >
          <Box display="flex" alignItems="center" gap="5px">
            <CalendarTodayOutlinedIcon />
            <span style={{ marginRight: "10px" }}>
              {formatDate(selectedDate)}
            </span>
          </Box>
          <MapOutlinedIcon />
          <TrafficIcon />
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
            },
          }}
        >
          <StatBox
            title="Kostensenkung"
            color="#a86932"
            subtitle={
              <span style={{ display: "flex", alignItems: "center" }}>
                <EuroIcon
                  sx={{
                    fontSize: "20px",
                    marginRight: "4px",
                  }}
                />
                5000
              </span>
            }
            icon={<ContactsOutlinedIcon sx={{ fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
            },
          }}
        >
          <StatBox
            title="Verwaltete Immobilien"
            color="#a8324a"
            subtitle="17"
            icon={<ReceiptOutlinedIcon sx={{ fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
            },
          }}
        >
          <StatBox
            title="Voraus.Einnahmen"
            color="#327da8"
            subtitle={
              <span style={{ display: "flex", alignItems: "center" }}>
                <EuroIcon
                  sx={{
                    fontSize: "20px",
                    marginRight: "4px",
                  }}
                />
                20.000
              </span>
            }
            icon={<AttachMoneyIcon sx={{ fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.1)",
              cursor: "pointer",
            },
          }}
        >
          <StatBox
            title="Bisherige Einnohmen"
            color="#32a852"
            subtitle={
              <span style={{ display: "flex", alignItems: "center" }}>
                <EuroIcon
                  sx={{
                    fontSize: "20px",
                    marginRight: "4px",
                  }}
                />
                10.000
              </span>
            }
            icon={<AttachMoneyIcon sx={{ fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Bisherige Investitionen
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                Gesamt 340
              </Typography>
            </Box>
            {/* <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box> */}
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            {/* <LineChart isDashboard={true} />
             */}
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Mein Portfolio
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box
                border-radius="50%"
                width="50px"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img width="100%" src={transaction.icon} />
                <Typography color={colors.grey[100]}>
                  {transaction.iconname}
                </Typography>
              </Box>
              <Box>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              {transaction.cost >= 0 ? (
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  +{transaction.cost}$
                </Typography>
              ) : (
                <Typography
                  color={colors.redAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.cost}$
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}

        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Kosten vs Investments vs Gewinne
          </Typography>
          <Box height="500px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Profit
          </Typography>
          <Box height="500px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
