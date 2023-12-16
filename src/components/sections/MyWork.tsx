import React from "react"
import Box from "@mui/material/Box"
import { Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { getProfile } from "../../store/features/profileSlice"
import theme from "../../theme"


export default function MyWork():JSX.Element {
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
              My Work
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
