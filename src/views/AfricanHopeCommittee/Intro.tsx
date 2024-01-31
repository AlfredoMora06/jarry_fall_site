import Box from "@mui/material/Box"
import { Container, Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
//@ts-ignore
import AHC from "../../assets/AHC.svg"


type ProjectBodyProps = {
  projectTitle: string,
  projectClient: string,
  projectLength: string,
  projectGoal: string,
  roles: string[],
  tools: string[],
  color: string,
  isMobile: boolean,
}

export default function Intro(
  {projectTitle, projectClient, projectLength, projectGoal, roles, tools, color, isMobile}: ProjectBodyProps
):JSX.Element {

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: isMobile ? 0 : 8 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container justifyContent={"center"}>
              <Typography variant="h1" style={{ fontWeight: 700 }} fontSize={65} align={'center'}>
                {projectTitle}
              </Typography>
            </Grid>
          </Fade>

          <Grid item container justifyContent={"center"} paddingBottom={2}>
            <Grid item xs={10} md={1.5} container justifyContent={"center"}>
             <img
               loading="lazy" 
               src={AHC}
               alt={projectTitle}
               style={{ width: "100%"}}
             />
            </Grid>
          </Grid>

          <Grid item xs={12} container paddingBottom={2}>
            <Typography variant="h5" style={{ fontWeight: 700, color, letterSpacing: ".2rem", }}>
              PROJECT OVERVIEW
            </Typography>
          </Grid>

          <Grid item xs={12} container paddingBottom={3}>
            <Typography variant="h5" display={"inline"}>
              {`Client: ${projectClient}`}
            </Typography>
          </Grid>

          <Grid item xs={12} container paddingBottom={3}>
            <Typography variant="h5" display={"inline"}>
              {`Goal: ${projectGoal}`}
            </Typography>
          </Grid>

          <Grid item xs={12} container paddingBottom={2}>
            <Typography variant="h5" display={"inline"}>
              {`Project Length: ${projectLength}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color, letterSpacing: ".2rem", }}>
                ROLES
              </Typography>
            </Grid>
            <ul style={{paddingLeft: isMobile ? 15 : 0}}>
              {
                roles.map((role) => {
                  return (
                    <li>
                      <Typography variant="h5">{role}</Typography>
                    </li>
                  )
                })
              }
            </ul>
          </Grid>

          <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color, letterSpacing: ".2rem", }}>
                TOOLS
              </Typography>
            </Grid>
            <ul style={{paddingLeft: isMobile ? 15 : 0}}>
              {
                tools.map((tool) => {
                  return (
                    <li>
                      <Typography variant="h5">{tool}</Typography>
                    </li>
                  )
                })
              }
            </ul>
          </Grid>


        </Grid>
      </Box>
    </Container>
  )
}
