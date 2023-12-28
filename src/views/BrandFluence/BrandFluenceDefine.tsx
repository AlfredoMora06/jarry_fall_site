import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function BrandFluenceDefine():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const valuePropositionChart = cld.image('jarry_fall/BrandFluence/okefzjlrjagv7zuss5hg')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  const designImage = cld.image('jarry_fall/BrandFluence/uysszojb7s2soajajjye')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  const threePeopleCardImages = [
    'jarry_fall/BrandFluence/wwrhacvpjwt7b4oeaa2s',
    'jarry_fall/BrandFluence/ogatfcblhlsmba9kaoga',
    'jarry_fall/BrandFluence/ltwzv7rdaslnnjscssfq'
  ]


  return (
    <div style={{paddingBottom: 50}}>
      <div style={{ backgroundColor: "#FFABAB" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                VALUE PROPOSITION CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A value proposition chart serves as a tool for designers to distinctly outline the quantifiable and observable benefits that users derive from utilizing a product or service.
              </Typography>
              <br/>
              <Typography variant="h6">
                Constructing this chart with our gathered data enabled us to identify ways to enrich users' experiences on social media, aligning with their engagement, goals, and authenticity.
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                USER PERSONAS
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                To deepen our comprehension of the users and uncover opportunities for better assistance, we created user personas based on the insights gathered from our data.
              </Typography>
              <br/>
              <Typography variant="h6">
                We identified common characteristics shared among our three user profiles.
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            {
              threePeopleCardImages.map((img) => {
                const cardImg = cld.image(img)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={12} md={4} paddingX={3} paddingBottom={4}>
                    <img src={cardImg} alt={cardImg} style={{width: "100%", maxHeight: 550, objectFit: "contain"}}/>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The user persona holds importance in offering a unique identity to our main user group, fostering a deeper and more empathetic understanding of the obstacles they face in their everyday experiences.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Additionally, the user persona acts as a preventive measure, ensuring that our solution is not inadvertently tailored to our preferences but is rather designed to meet the authentic needs of the user.
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                USER SCENARIO
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingY={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A user scenario is a brief, fictionalized situation describing how a potential user interacts with the app, helping designers understand user needs, motivations, and the context in which the app will be used. I crafted a scenario for a user named Ielani, an avid social media user seeking a method to save money when buying products promoted by influencers.
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingY={2} justifyContent={"center"}>
            <Grid item xs={12} md={6} container justifyContent={"center"}>
              <img src={designImage} alt={designImage} style={{width: "100%", objectFit: "contain"}}/>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
