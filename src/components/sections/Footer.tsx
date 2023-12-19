import Box from "@mui/material/Box"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from '@mui/icons-material/Email'

import theme from "../../theme"


export default function Footer(): JSX.Element {

  return (
    <>
      <div style={{backgroundColor: "#FDC8E1", paddingBottom: 50 }}>
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{ paddingTop: 7 }}>
              <Grid item container xs={12} justifyContent={"center"}>
                <Grid item xs={12}>
                  <Typography variant="h2" align="center" fontWeight={700}>
                    Get in Touch!
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8} paddingTop={1}>
                  <Typography variant="h6" align="center">
                    Feel free to connect with me about an opportunity or design talk by reaching out through the links below
                  </Typography>
                </Grid>
                <Grid item xs={12} container justifyContent={"center"} paddingTop={2}>
                  <EmailIcon
                    onClick={() =>
                      window.open('mailto:jmf805@nyu.edu?subject=Subject&body=Body%20goes%20here')
                    }
                    sx={{ fontSize: 50, color: theme.palette.primary.main, cursor: "pointer", "&:hover": {color: theme.palette.secondary.main} }}
                  />
                  <LinkedInIcon
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jarryfall",
                        "_blank"
                      )
                    }
                    sx={{ fontSize: 50, color: theme.palette.primary.main, cursor: "pointer", "&:hover": {color: theme.palette.secondary.main} }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div style={{ backgroundColor: theme.palette.secondary.main, paddingTop: 20, paddingBottom: 20 }}>
        <Container>
          <Typography align="center">© 2023 Jarry Fall</Typography>
        </Container>
      </div>
    </>
  )
}
