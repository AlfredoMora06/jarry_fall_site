import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"
import { Grid } from "@mui/material"


import { getProfile } from "../store/features/profileSlice"
//@ts-ignore
import ResumePdf from "../assets/Jarry_Fall_Resume.pdf"


type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n} = useTranslation("common")

  const pages = [
    { title: "Home", link: "../0/home" },
    { title: "Work", link: "../0/work" },
    { title: "About", link: "../0/about" },
    { title: "Fun", link: "../0/fun" },

  ]
  
  const location = useLocation()  
  const navigate = useNavigate()


  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            color="primary"
            variant="h2"
            noWrap
            component="a"
            href="/0/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
            }}
          >
            jmf.
          </Typography>
          
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Grid container justifyContent={"flex-end"}>
              {pages.map((page, index) => {
                const samePathname = location.pathname === page.link.slice(2)
                return (
                  <Grid item key={index} style={{ marginBottom: 2, marginTop: 2 }}>
                    <Button
                      variant="text"
                      onClick={() => navigate(page.link)}
                      sx={{
                        color: samePathname ? "FE55A6" : "#000000",
                        display: "block",
                        fontSize: 24,
                        fontWeight: 700,
                        textTransform: "capitalize"
                      }}
                    >
                      {page.title}
                    </Button>
                  </Grid>
                )
              })}
              <Grid item style={{ marginBottom: 2, marginTop: 2 }}>
                <Button
                  onClick={() => {
                    window.open(ResumePdf, "_blank")
                  }}
                  variant="text"
                  sx={{
                    color: "#000000",
                    display: "block",
                    fontSize: 24,
                    fontWeight: 700,
                    textTransform: "capitalize"
                  }}
                >
                  {"Resume"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
