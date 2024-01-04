import Box from "@mui/material/Box"
import { Container, Grid, Typography, Theme, Fab} from "@mui/material"
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
          <Grid item paddingBottom={8}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light} fontSize={80}>
              My Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          {
            projects.map((project) => {
              const {params, title } = project
              let cardImage
              let projectImage1
              let projectImage2
              let projectImage3
              const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
              
              if(project.cardButton && !!project.mainImage){
                cardImage = cld.image(project.mainImage)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
              }
              if(!!project.images){
                projectImage1 = cld.image(project.images[0].link)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                projectImage2 = cld.image(project.images[1].link)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                projectImage3 = cld.image(project.images[2].link)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
              }

              return (
                <Grid 
                  item 
                  paddingX={3}
                  marginBottom={8}
                  xs={12} 
                  md={7} 
                  container 
                  sx={{ background: project.color, borderRadius: 10}}
                >
                  <Grid item xs={8} container>
                    { !! project.mainImage
                      ? <Grid item container alignItems={"center"} className={classes.button}>
                        <img loading="lazy" style={{width: "90%", transition: "transform .2s"}} src={cardImage} alt={project.mainImage}/>
                      </Grid>
                      : project.images != null ? <>
                        <Grid item xs={4} container alignItems={project.images[0].align}>
                          <img loading="lazy" style={{width: "100%", transition: "transform .2s"}} src={projectImage1} alt={"firstImage"}/>
                        </Grid>
                        <Grid item xs={4} container alignItems={project.images[1].align} marginLeft={-10}>
                          <img loading="lazy" style={{width: "150%", transition: "transform .2s"}} src={projectImage2} alt={"secondImage"}/>
                        </Grid>
                        <Grid item xs={4} container alignItems={project.images[2].align}>
                          <img loading="lazy" style={{width: "150%", transition: "transform .2s"}} src={projectImage3} alt={"thirdImage"}/>
                        </Grid>
                      </>
                      : <></>
                    }
                  </Grid>
                  <Grid item xs={4} marginY={3}>
                    <Box sx={{ background: "white"}} borderRadius={10} paddingY={3} paddingX={2}>
                      <Typography align="center" fontWeight={700} fontSize={25}>{title}</Typography>
                      <Typography align="center" sx={{color: "#585858", paddingY: 1}} fontSize={16}>{project.subtitle}</Typography>
                      <Typography align="center" fontSize={14}>{project.aim}</Typography>
                      <Grid item container justifyContent={"center"}>
                        <Fab
							            variant="extended"
							            sx={{
							            	paddingX: 1,
                            minWidth: 160,
                            color: project.white ? "white" : "black",
							            	backgroundColor: project.buttonColor,
                            boxShadow: "none",
							            	fontWeight: 500,
                            fontSize: 12,
                            mt:2,
        			            	"&.MuiFab-extended .MuiSvgIcon-root": {
        			            	  marginRight: 1,
        			            	},
         			            	"&:hover":  {
							            		backgroundColor: project.buttonColor,
         			            	  opacity: "0.5"
         			            	}
							            }}
							            onClick={() => {
                            navigate(`/0/work/${params}`, {state: project})
                            window.scrollTo(0, 0)
                          }}
                        >
						      	      Read Case Study
						            </Fab>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              )
            })
          }
        </Grid>
      </Box>
    </Container>
  )
}
