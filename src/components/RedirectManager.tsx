import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RedirectManager = () => {
  const { target } = useParams();
  const [redirecting, setRedirecting] = useState(false);

  const boxStyle = {
    display: "table-cell",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: 20,
  };

  const urls: { [id: string]: string } = {
    github: "https://github.com/losty17",
    linkedin: "https://www.linkedin.com/in/viniciuskappke",
    twitter: "https://www.twitter.com/yts0l",
    instagram: "https://www.instagram.com/vini.kkkappke",
    mail: "mailto:viniciuskappke@gmail.com",
    discord: "https://discord.com/users/207947146371006464",
    steam: "https://steamcommunity.com/id/losty1234",
    kody: "http://kody.mobi",
  };

  let targetName;
  useEffect(() => {
    if (target) {
      let redirectTo = urls[target];
      if (redirectTo) {
        setRedirecting(true);
        window.location.href = redirectTo;
      }
    }
  }, []);

  if (redirecting && target) {
    targetName = target.charAt(0).toUpperCase() + target.substring(1);

    return (
      <Box sx={boxStyle}>
        <Typography variant="h4">Redirecting to {targetName}...</Typography>
      </Box>
    );
  } else {
    return (
      <Box sx={boxStyle}>
        <Typography variant="h4">
          Could not redirect. Target is invalid.
        </Typography>
      </Box>
    );
  }
};

export default RedirectManager;
