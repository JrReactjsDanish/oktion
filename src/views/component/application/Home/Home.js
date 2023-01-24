import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import bannerImg from "../../../../assets/images/banner/Banner2.png";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { Button, Chip, Divider, Tabs } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import beyondBlue from "../../../../assets/images/BeyondBlueLogo.png";
import cupcakes from "../../../../assets/images/cupcakes.png";
import garden from "../../../../assets/images/garden.png";
import vegies from "../../../../assets/images/vagies.png";
import { Stack } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import iconAI from "../../../../assets/images/icons/artificial-intelligence.png";
import IconGlobal from "../../../../assets/images/icons/globalization.png";
import iconRocket from "../../../../assets/images/icons/rocket.png";
import iconTM from "../../../../assets/images/icons/time-machine.png";
import InputAdornment from "@mui/material/InputAdornment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./home.scss";

const Home = () => {
  const [tab, setTab] = useState(0);
  const [tab1, setTab1] = useState(0);
  const [slideIndex, setSlideIndex] = useState("");

  const tabs = [
    { id: 1, name: "All Events" },
    { id: 2, name: "Auctions" },
    { id: 3, name: "Donations" },
    { id: 4, name: "Free Events" },
    { id: 5, name: "My Cause" },
    { id: 6, name: "Paid Events" },
    { id: 7, name: "Raffles" },
  ];

  const cardContent = [
    {
      id: 1,
      image: cupcakes,
      pill: "Online + Vanue Event",
      date: "[Event Start Date] • [Event Start Time]",
      title: "[Event Name Event Name Event Name Event Name Event Name Eve...]",
      time: "[Time Remaining]",
      money: "AUD [Amount Raised]",
    },
    {
      id: 2,
      image: beyondBlue,
      pill: "Vanue",
      date: "[Event Start Date] • [Event Start Time]",
      title: "[Event Name Event Name Event Name Event Name Event Name Eve...]",
      time: "[Time Remaining]",
      money: "AUD [Amount Raised]",
    },
    {
      id: 3,
      image: garden,
      pill: "Online + Vanue Event",
      date: "[Event Start Date] • [Event Start Time]",
      title: "[Event Name Event Name Event Name Event Name Event Name Eve...]",
      time: "[Time Remaining]",
      money: "AUD [Amount Raised]",
    },
    {
      id: 4,
      image: vegies,
      pill: "Vanue",
      date: "[Event Start Date] • [Event Start Time]",
      title: "[Event Name Event Name Event Name Event Name Event Name Eve...]",
      time: "[Time Remaining]",
      money: "AUD [Amount Raised]",
    },
  ];

  const footerNav = ["About", "Policies", "Contact Us", "Blog", "FAQ"];

  // const tabChangeHandler = (event, newValue) => {
  //   setTab(newValue);
  //   var pageName = tabs?.find((item) => item?.id === Number(newValue));
  //   setPageHeading(pageName?.name);
  // };

  const useStyles = makeStyles((theme) => ({
    tabs: {
      "& .MuiTabs-indicator": {
        display: "none",
        backgroundColor: "#ffc629",
        textColor: "#ffc629",
      },

      "& .MuiTab-textColorPrimary.Mui-selected": {
        color: "#000",
        backgroundColor: "#ffc629",
      },
    },

    tabs2: {
      "& .MuiTabs-indicator": {
        // display: "none",
        backgroundColor: "#ffc629",
        textColor: "#ffc629",
      },

      "& .MuiTab-textColorPrimary.Mui-selected": {
        color: "#ffc629",
        // backgroundColor: "#ffc629",
      },
    },
  }));

  const classes = useStyles();

  // const customTheme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       light: "#42c2f5",
  //       main: "rgba(0,0,0,0.5)",
  //       dark: "#778899",
  //       contrastText: "#fff",
  //     },
  //   },
  // });

  // var styles = {
  //   default_tab: {
  //     color: "grey",
  //     backgroundColor: "#fff",
  //     fontWeight: 450,
  //   },
  //   active_tab: {
  //     color: "#ffc629",
  //   },
  // };

  // styles.tab = [];
  // styles.tab[0] = styles.default_tab;
  // styles.tab[1] = styles.default_tab;
  // styles.tab[2] = styles.default_tab;
  // styles.tab[3] = styles.default_tab;
  // styles.tab[4] = styles.default_tab;
  // styles.tab[5] = styles.default_tab;
  // styles.tab[6] = styles.default_tab;
  // styles.tab[slideIndex] = Object.assign(
  //   {},
  //   styles.tab[slideIndex],
  //   styles.active_tab
  // );

  const handleTabChange = (event, newTabIndex) => {
    setTab(newTabIndex);
  };

  const handleChange = (event, newValue) => {
    setTab1(newValue);
  };

  return (
    <Box className="banner-block">
      <Grid container className="main-grid-container">
        <Grid>
          {/* BANNER SECTION */}
          <Box component="main">
            <div>
              <img src={bannerImg} alt="Banner" className="banner-img" />
              <div className="banner-text">
                We support your favourite initiatives{" "}
              </div>
            </div>
          </Box>

          {/* SEACHBOX SECTION */}
          <Container className="search-container">
            <Grid>
              <Box className="table-container">
                <TabContext value={tab}>
                  <TabList
                    variant="scrollable"
                    // scrollButtons="off"
                    onChange={handleTabChange}
                    className={classes.tabs}
                    textColor="primary"
                    indicatorColor="primary"
                    // centered
                  >
                    {tabs?.map((obj, index) => {
                      return (
                        <Tab
                          key={index}
                          label={
                            <span style={{ textTransform: "capitalize" }}>
                              {obj?.name}
                            </span>
                          }
                        />
                      );
                    })}
                  </TabList>

                  {/* <TabIndex value="1" className="p-0"></TabIndex>
                <TabIndex value="2" className="p-0"></TabIndex>
                <TabIndex value="3" className="p-0"></TabIndex>
                <TabIndex value="4" className="p-0"></TabIndex>
                <TabIndex value="5" className="p-0"></TabIndex>
                <TabIndex value="6" className="p-0"></TabIndex>
                <TabIndex value="7" className="p-0"></TabIndex> */}
                </TabContext>
              </Box>

              {/* Search Field */}
              <Box className="search-box-area">
                <Grid container>
                  <Grid item xs={8} lg={8}>
                    <TextField
                      className="search-field"
                      id="outlined-search"
                      label="Find an initiative"
                      type="search"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2} lg={2}>
                    <TextField
                      className="city-field"
                      id="outlined-search"
                      label="Location"
                      type="search"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationOnIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={2} lg={2} className="src-btn">
                    <Button
                      className="search-btn"
                      variant="contained"
                      disableElevation
                      size="large"
                    >
                      Search
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Container>

          {/* CARD SECTION */}
          <Container className="card-container">
            <Box className="table-container">
              <h1 style={{ color: "black" }}>Popular Events</h1>

              <TabContext value={tab1}>
                <Box className="actions-tabs">
                  <TabList
                    // variant="scrollable"
                    // scrollButtons="off"
                    className={classes.tabs2}
                    inkBarStyle={{ background: "#ffc629" }}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    // centered
                  >
                    {tabs?.map((obj, index) => {
                      return (
                        <Tab
                          key={index}
                          label={
                            <span style={{ textTransform: "capitalize" }}>
                              {obj?.name}
                            </span>
                          }
                        />
                      );
                    })}
                  </TabList>
                </Box>
                {/* <TabPanel value="1" className="p-0"></TabPanel>
                <TabPanel value="2" className="p-0"></TabPanel>
                <TabPanel value="3" className="p-0"></TabPanel>
                <TabPanel value="4" className="p-0"></TabPanel>
                <TabPanel value="5" className="p-0"></TabPanel>
                <TabPanel value="6" className="p-0"></TabPanel>
                <TabPanel value="7" className="p-0"></TabPanel> */}
              </TabContext>
            </Box>
            <Grid
              container
              // spacing={{ xs: 2, md: 3 }}
              // columns={{ xs: 12, sm: 6, md: 4 }}
              className="cards"
            >
              <Box>
                <Grid
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 12, sm: 6, md: 4 }}
                >
                  <Stack direction="row" spacing={2}>
                    {cardContent.map((item) => {
                      return (
                        <Card sx={{ maxWidth: 320 }}>
                          <CardMedia
                            component="img"
                            alt="images"
                            height="140"
                            image={item.image}
                          />

                          <CardContent>
                            <div className="card-content-margin">
                              <Chip
                                label={
                                  <span style={{ fontWeight: "700" }}>
                                    {item.pill}
                                  </span>
                                }
                                style={{ backgroundColor: "#FFC629" }}
                              />
                            </div>

                            <div className="card-content-margin">
                              <Typography
                                variant="body2"
                                className="card-content-margin"
                              >
                                <span style={{ color: "#FFC629" }}>
                                  {item.date}
                                </span>
                              </Typography>
                            </div>

                            <div className="card-content-margin">
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                              >
                                <span
                                  style={{ fontWeight: "700" }}
                                  className="card-title"
                                >
                                  {item.title}
                                </span>
                              </Typography>
                            </div>

                            <div className="card-content-margin">
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                <span style={{ fontWeight: "500" }}>
                                  {" "}
                                  {item.time}
                                </span>{" "}
                                left
                              </Typography>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                <span style={{ fontWeight: "500" }}>
                                  {item.money}{" "}
                                </span>{" "}
                                raised
                              </Typography>
                            </div>

                            <Typography>
                              <img src={iconAI} className="icons" />
                              <img src={iconRocket} className="icons" />
                              <img src={iconTM} className="icons" />
                              <img src={IconGlobal} className="icons" />
                            </Typography>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </Stack>
                </Grid>
              </Box>
            </Grid>
          </Container>

          {/* FOOTER SECTION */}
          <Box className="footer-container">
            <Grid>
              <Container>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  // className={classes.rootBox}
                >
                  <Box
                    component="nav"
                    // className={classes.footerNav}
                  >
                    {footerNav.map((item) => {
                      return (
                        <Button key={item} sx={{ color: "#fff" }}>
                          <NavLink
                            to={item}
                            style={{ textDecoration: "none", color: "white" }}
                          >
                            <span style={{ textTransform: "capitalize" }}>
                              {item}
                            </span>
                          </NavLink>
                        </Button>
                      );
                    })}
                  </Box>
                </Box>
              </Container>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;