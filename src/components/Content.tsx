import { Box, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import { Header, Underline } from ".";

interface ISectionProps {
  title: string;
}

const Section = (props: React.PropsWithChildren<ISectionProps>) => {
  return (
    <Grid item>
      <Box
        sx={{
          marginLeft: "-8px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          color: "#FDF2F8",
        }}
      >
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 -2 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M6.182 4.182a.45.45 0 0 1 .636 0l3 3a.45.45 0 0 1 0 .636l-3 3a.45.45 0 1 1-.636-.636L8.864 7.5L6.182 4.818a.45.45 0 0 1 0-.636Z"
              clip-rule="evenodd"
            />
          </svg>
        </Icon>
        <Typography variant="h5" sx={{ align: "left" }}>
          {props.title}
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Underline width="30%" />
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <Underline width="100%" />
      </Box>

      <Box sx={{ marginTop: "15px" }}>{props.children}</Box>
    </Grid>
  );
};

const Content = () => {
  return (
    <Box
      sx={{
        width: "40vw",
        margin: "0 auto",
      }}
    >
      <Grid
        container
        direction="column"
        marginTop="42px"
        sx={{
          minHeight: "100vh",
          "& .MuiGrid-item": {
            padding: 0,
            marginTop: "32px",
          },
        }}
      >
        <Grid item>
          <Header />
        </Grid>
        <Section title="about me">Teste</Section>
        <Section title="my projects" />
      </Grid>
    </Box>
  );
};

export default Content;
