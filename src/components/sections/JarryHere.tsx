import React from "react"
import Box from "@mui/material/Box"
import { Container, Fade, Grid, Typography, useTheme, useMediaQuery } from "@mui/material"

import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { getProfile } from "../../store/features/profileSlice"


export default function JarryHere():JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n} = useTranslation("common")
  const muiTheme = useTheme()
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"))

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])


  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: isMobile ? 0 : 17 }}>
        <Grid container justifyContent={"center"}>
          <Grid item container paddingBottom={4} xs={12} justifyContent={"center"}>
            <Fade in={true} timeout={2000}>
              <Typography variant="h1" style={{color: "white"}} fontWeight={700} align="center">
                jarry fall
              </Typography>
            </Fade>
          </Grid>
          <Grid item xs={8}>
            <Fade in={true} timeout={2500}>
              <Typography variant="h4" style={{color: "white"}} align={"center"} fontSize={isMobile ? 25 : 34}>
                is a ui/ux designer based in new york city who is passionate 
                about crafting compelling and immersive narratives using 
                human-centered design solutions.
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
