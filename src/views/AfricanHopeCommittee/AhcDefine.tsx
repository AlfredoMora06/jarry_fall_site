import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function AhcDefine():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})

  const valuePropositionChart = cld.image('jarry_fall/zfhlwocrrsfspjzjpdfs')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  return (
    <div style={{paddingBottom: 50}}>
      <div style={{ backgroundColor: "#A62626" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                VALUE PROPOSITION CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A value proposition chart acts as a guiding framework for designers to clearly articulate the measurable and tangible advantages that users gain from engaging with a redesigned product or service.
              </Typography>
              <br/>
              <Typography variant="h6">
                Constructing this chart, informed by our collected data, provided insights into ways we can elevate the value in users' interactions with the revamped African Hope Committee (AHC) website, ensuring alignment with their goals, motivations, and core tasks.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingBottom={5} justifyContent={"center"}>
            <Grid item xs={12} md={5}>
              <img src={valuePropositionChart} alt="valuePropositionChart" style={{width: "100%", objectFit: "contain"}}/>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                USER PERSONA + JOURNEY MAP
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={0}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The user persona serves as a valuable tool enabling designers and stakeholders to personify the typical user. I created Enheduanna as the primary user.
              </Typography>
              <br/>
              <Typography variant="h6">
                Following the creation of Enheduanna's user persona, the subsequent phase involves constructing a user journey tailored to address the pain points and goals of the African Hope Committee (AHC). This tool becomes instrumental in pinpointing instances where users encounter their most significant challenges and frustrations.
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <ol style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              <li>
                <Typography variant="h6">
                  Enheduanna feels <strong style={{color: "#A62626"}}>overwhelmed</strong> by all of the information provided on AHC’s website and she is confused on where to navigate.
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Enheduanna has a <strong style={{color: "#A62626"}}>hard time</strong> figuring out what the mission is that AHC seeks to display. 
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Enheduanna cannot tell if the website has been updated recently due to its <strong style={{color: "#A62626"}}>outdated</strong> style.
                </Typography>
              </li>
            </ol>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                How can we define our problem?
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After recognizing the lowest points in the user journey map, I transitioned into outlining the main challenges faced by users seeking to enhance their overall experience.              
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <ul style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              <li>
                <Typography variant="h6">
                  Problem 1: Users are <strong style={{color: "#A62626"}}>confused</strong> due to the website’s cluttered layout, outdated design, and a lack of clear organizational order, hindering seamless navigation and information retrieval.
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Problem 2: Users are <strong style={{color: "#A62626"}}>disorientated</strong> when navigating through the website’s inconsistent content presentation. 
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Problem 3: Users encounter <strong style={{color: "#A62626"}}>difficulty</strong> in locating specific information due to unclear navigation paths and inadequate signposting on the AHC website.
                </Typography>
              </li>
            </ul>
          </Grid>
        
        </Container>
      </div>
    </div>
  )
}
