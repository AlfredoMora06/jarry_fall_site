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
import MenuIcon from "@mui/icons-material/Menu"
import { Grid, IconButton, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material"


import { getProfile } from "../store/features/profileSlice"
//@ts-ignore
import ResumePdf from "../assets/Jarry_Fall_Resume.pdf"
import DropdownMenuItem, { TMenuItem } from "./DropdownMenuItem"
import theme from "../theme"


type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n} = useTranslation("common")
  const [drawer, setDrawer] = React.useState(false)

  const toggleDrawer = (open: boolean) =>  (event: React.KeyboardEvent | React.MouseEvent) => { 
    setDrawer(open)
  }

  const handleCloseNavMenuRedirect = (link: string) => {
    navigate(link)
    toggleDrawer(false)
  }

  const pages = [
    { title: "Home", link: "../" },
    { title: "Work", link: "../0/work" },
    { title: "About", link: "../0/about" },
    { title: "Fun", link: "../0/fun" },
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton onClick={() => {handleCloseNavMenuRedirect(page.link)}}>
              <ListItemText primary={page.title} sx={{color: "white"}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const workPages: TMenuItem = { 
    title: "Work", 
    pathname: "../0/work",
    subMenus: [
      {
        title: "BeeSafe App",
        pathname: "../0/work/beesafe"
      },
      {
        title: "African Hope Commitee Inc.",
        pathname: "../0/work/ahc"
      },
      {
        title: "BrandFluence",
        pathname: "../0/work/brandfluence"
      }
    ]
  }
  
  
  const location = useLocation()  
  const navigate = useNavigate()


  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  const [menuShowingDropdown, setMenuShowingDropdown] = React.useState("");

  const handleMenuShowingDropdownChange = React.useCallback((menuTitle: string) => {
    setMenuShowingDropdown(menuTitle);
  }, [])

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none", padding: 4 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              style={{color: dark ? 'white': theme.palette.primary.light, fontWeight: 700}}
            >
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer
              PaperProps={{
                sx: { width: "80%" , backgroundColor: "#FF9DCC"},
              }}
              open={drawer}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {list()}
            </SwipeableDrawer>
          </Box>

          <Typography
            color="primary"
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              fontFamily: "Inria Serif"
            }}
          >
            jmf.
          </Typography>
          
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            <Grid container justifyContent={"flex-end"}>
              {pages.map((page, index) => {
                const samePathname = location.pathname === page.link.slice(2)

                if(page.title === "Work"){
                  return (
                    <Grid item key={index} style={{ marginBottom: 2, marginTop: 2 }}>
                      <DropdownMenuItem
                        menuItem={workPages}
                        menuShowingDropdown={menuShowingDropdown}
                        setMenuShowingDropdown={handleMenuShowingDropdownChange}
                        samePathname={samePathname}
                      />
                    </Grid>
                  )
                }
                
                return (
                  <Grid item key={index} style={{ marginBottom: 2, marginTop: 2 }}>
                    <Button
                      variant="text"
                      onClick={() => navigate(page.link)}
                      sx={{
                        color: samePathname ? "#FE55A6" : "#000000",
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
