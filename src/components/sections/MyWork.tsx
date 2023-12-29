import Box from "@mui/material/Box"
import { Button, Container, Grid, Typography, Theme} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"

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
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light} fontSize={80}>
              My Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          {
            projects.map((project) => {
              const {params, image} = project
              const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
              const myImage = cld.image(image)
                .delivery(quality(qualityAuto()))
                .delivery(format(auto()))
                .toURL()

              return(
                <Grid item paddingBottom={10} xs={12} md={7}>
                  <Button
                    onClick={() => {
                      navigate(`/0/work/${params}`, {state: project})
                      window.scrollTo(0, 0)
                    }}
                    variant="text" 
                    className={classes.button}
                  >
                    <img loading="lazy" style={{width: "100%", transition: "transform .2s"}} src={myImage} alt="beeSafe" />
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
