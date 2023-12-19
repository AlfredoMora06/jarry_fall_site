import Box from "@mui/material/Box"
import { Button, Container, Grid, Typography, Theme} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

import theme from "../../theme"
import { projects } from "../../utils/ProjectsInfo"


const useStyles = makeStyles<Theme>(() => ({
  button: {
    overflow: "hidden",
    "&:hover": {
      "& img": {
        opacity: 0.8,
        transform: "scale(1.10)"
      },
    },
  }
}))


export default function MyWork():JSX.Element {
  const classes = useStyles()
  const navigate = useNavigate()

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
        <Grid container justifyContent={"center"}>
          {
            projects.map((project) => {
              const {params, image} = project
              return(
                <Grid item paddingBottom={10} xs={12} md={10}>
                  <Button
                    onClick={() => {
                      navigate(`/0/projects/${params}`, {state: project})
                      window.scrollTo(0, 0)
                    }}
                    variant="text" 
                    className={classes.button}
                  >
                    <img loading="lazy" style={{width: "100%", transition: "transform .2s"}} src={image} alt="beeSafe" />
                  </Button>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Container>
  )
}
