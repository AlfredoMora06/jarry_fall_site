import React from "react"
import Box from "@mui/material/Box"
import { Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { getProfile } from "../../store/features/profileSlice"
import theme from "../../theme"


export default function AboutMe():JSX.Element {
  const profile = useSelector(getProfile)

  const {i18n} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])


  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={10}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light}>
              About Me
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>

          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">
              Hi! My name is Jarry. I am a dancer 💃🏾, a traveler✈️, a foodie 🌮, a problem-solver✅, and a compassionate individual deeply committed to infusing empathy and novelty into professional environments and making a lasting, meaningful impact on people's experiences through thoughtful design.

              I'm a dynamic ux/ui designer on a mission to craft cutting-edge, data-powered solutions that work! By leveraging a curated blend of UX and design tools, I steer strategic business choices by aligning goals and framing problems. The end result? Captivating, value-packed designs that transform the digital experience into a delightful journey for every user.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
