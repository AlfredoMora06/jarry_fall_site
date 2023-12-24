import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function Define():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const beeCard = cld.image('jarry_fall/xyofhplneg3o1smlfdns')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  const userScenario = cld.image('jarry_fall/z0i4h9any9gl5by3ly86')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  return (
    <div style={{paddingBottom: 50}}>
      <div style={{ backgroundColor: "#FFDF6C" }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingY={10} >
            <Typography variant='h4' fontWeight={700} style={{color: "white"}}>
              DEFINE
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 50}}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                VALUE PROPOSITION CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A value proposition chart serves as a tool for designers to distinctly outline the quantifiable and observable benefits that users derive from utilizing a product or service.
              </Typography>
              <br/>
              <Typography variant="h6">
                Formulating this chart using our collected data allowed us to discern how we can enhance the value in users' experiences on CITIZEN, aligning with their objectives, motivations, and essential tasks.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Moreover, we are actively empathizing with users during their peaks and troughs, enabling us to delve into the psychology influencing their behavior.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- Get Image From Jarry */}

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                USER PERSONA
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                To gain a more concrete understanding of our user and explore ways to assist them better, we crafted a user persona using our collected data.
              </Typography>
              <br/>
              <Typography variant="h6">
                We pinpointed prevalent characteristics shared by our primary user to  develop Amelie.
              </Typography>
            </Grid>
          </Grid>
          
          <Grid container paddingBottom={5}>
            <Grid item xs={12}>
              <img src={beeCard} alt="beeCard"/>
            </Grid>
          </Grid>

          <Grid container paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The significance of the user persona lies in its ability to provide a distinct identity to our primary user group, facilitating a more relatable and empathetic understanding of the challenges they encounter in their daily lives.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Moreover, the user persona serves as a safeguard against unintentionally designing a solution that caters to our preferences rather than addressing the actual needs of the user.
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                USER SCENARIO
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingY={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A user scenario is a brief, fictionalized situation describing how a potential user interacts with the app, helping designers understand user needs, motivations, and the context in which the app will be used.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingBottom={5}>
            <Grid item xs={12}>
              <img src={userScenario} alt="beeCard"/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
