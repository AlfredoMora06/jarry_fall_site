import Box from "@mui/material/Box"
import { Container, Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"


type ProjectBodyProps = {
  projectTitle: string,
  imageSrc: string,
  projectLength: string,
  projectGoal: string,
  roles: string[],
  tools: string[],
}

export default function ProjectBody(
  {projectTitle, imageSrc, projectLength, projectGoal, roles, tools}: ProjectBodyProps
):JSX.Element {

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 8 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container justifyContent={"center"} paddingBottom={5}>
              <Typography variant="h1" style={{ fontWeight: 700 }} fontSize={80}>
                {projectTitle}
              </Typography>
            </Grid>
          </Fade>

          <Grid item container justifyContent={"center"} paddingBottom={2}>
            <Grid item xs={12} md={10}>
             <img
               loading="lazy" 
               src={imageSrc}
               alt={projectTitle}
               style={{ width: "100%"}}
             />
            </Grid>
          </Grid>

          <Grid item xs={12} container paddingBottom={2}>
            <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
              PROJECT OVERVIEW
            </Typography>
          </Grid>
          <Grid item xs={12} container paddingBottom={2}>
            <Typography variant="h5" display={"inline"}>
              {`Project Length: ${projectLength}`}
            </Typography>
          </Grid>
          <Grid item xs={12} container paddingBottom={3}>
            <Typography variant="h5" display={"inline"}>
              {`Goal: ${projectGoal}`}
            </Typography>
          </Grid>

          <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                ROLES
              </Typography>
            </Grid>
            <ul>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                TOOLS
              </Typography>
            </Grid>
            <ul>
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
