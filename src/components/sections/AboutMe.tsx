import Box from "@mui/material/Box"
import { Container, Grid, Typography } from "@mui/material"
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"

import theme from "../../theme"
import Timeline from "./Timeline"
import Skills from "./Skills"


const imageStyle = {
  width: "80%",
  borderRadius: "500px",
  filter: `drop-shadow(-50px 50px rgba(255, 157, 204, 0.3))`
}

export default function AboutMe():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const myImage = cld.image('zgxvf9wuidrvrzed3aeh')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={6}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light} fontSize={80}>
              About Me
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img loading="lazy" style={imageStyle} src={myImage} alt="work"/>
          </Grid>
          <Grid item xs={12} md={6} paddingTop={7}>
            <Typography variant="h6">
              Hi! My name is Jarry. I am a dancer 💃🏾, a traveler✈️, a foodie 🌮, a problem-solver✅, and a compassionate individual deeply committed to infusing empathy and novelty into professional environments and making a lasting, meaningful impact on people's experiences through thoughtful design.
            </Typography>
            <br/> <br/>
            <Typography variant="h6">
              I'm a dynamic ui/ux designer on a mission to craft cutting-edge, data-powered solutions that work! By leveraging a curated blend of UX and design tools, I steer strategic business choices by aligning goals and framing problems. The end result? Captivating, value-packed designs that transform the digital experience into a delightful journey for every user.
            </Typography>

          </Grid>
        </Grid>

        <Timeline />

        <Skills />
      </Box>
    </Container>
  );
}
