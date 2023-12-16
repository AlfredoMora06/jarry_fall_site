import React from "react"
import Box from "@mui/material/Box"
import { Container, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { lightBlack } from "../../theme"
import { getProfile } from "../../store/features/profileSlice"


const imageStyle = {
  width: "100%",
  border: `0.5px solid ${lightBlack}`,
  borderRadius: "4px",
  opacity: 0.9
}


export default function AlfredoHere():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const profile = useSelector(getProfile)

  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])


  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 8 }}>
        <Grid container justifyContent={"center"}>
          <Grid item>
            <Typography variant="h1" style={{color: "white"}}>
              Jarry Fall
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
