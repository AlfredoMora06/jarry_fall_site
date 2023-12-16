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

import { lightBlack, lightGray } from "../theme"
import { getProfile } from "../store/features/profileSlice"


type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n} = useTranslation("common")

  const pages = [
    { title: "About", link: "../0/" },
  ]
  
  const location = useLocation()  
  const navigate = useNavigate()
  const bottomBorder = dark ? lightGray : lightBlack


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
            variant="h6"
            noWrap
            component="a"
            href="/0/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: dark ? lightGray : "black",
              textDecoration: "none",
            }}
          >
            Jmf.
          </Typography>

          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              const samePathname = location.pathname === page.link.slice(2)
              return (
                <div 
                  key={index} 
                  style={{ 
                    borderBottom: samePathname ? `solid ${bottomBorder}` : ``, 
                    marginBottom: 2, 
                    marginTop: 2 
                  }}
                >
                  <Button
                    variant="text"
                    onClick={() => navigate(page.link)}
                    sx={{
                      color: dark ? lightGray : lightBlack,
                      display: "block",
                      fontSize: 16,
                    }}
                  >
                    {page.title}
                  </Button>
                </div>
              )
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
