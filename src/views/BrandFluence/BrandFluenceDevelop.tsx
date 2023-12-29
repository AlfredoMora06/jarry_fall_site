import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function BrandFluenceDevelop():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const interactionDiagram = cld.image('jarry_fall/BrandFluence/m0novb8oelxnmjjjz9vb')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  const highLevelCampaingImages = [
    'jarry_fall/BrandFluence/qohugj0xfzagqcfptmes',
    'jarry_fall/BrandFluence/yhdkegwjkaxkvfmctldy',
    'jarry_fall/BrandFluence/ndrss5x5dovgh6quas6l',
    'jarry_fall/BrandFluence/otv3fmf2zh9wd46jvjfy'
  ]

  return (
    <div>
      <div style={{ backgroundColor: "#FFABAB" }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingY={10} >
            <Typography variant='h4' fontWeight={700} style={{color: "white"}}>
              DEVELOP
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 50}}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                MINIMUM VIABLE PRODUCT
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Upon completing the development stage, we successfully arrived at our minimum viable product (MVP).              
              </Typography>
              <br/>
              <Typography variant="h6">
                An MVP is a solution that addresses user frustrations and enhances their experience with the minimal set of features necessary.              
              </Typography>
              <br/>
              <Typography variant="h6">
                The significance of an MVP lies in its focus on creating essential features that directly tackle the problem, prioritizing functionality over ornamental design or innovation.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", fontSize: 50}}>
                MVP
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h6">
                During the development phase, our achievement is the establishment of our Minimum Viable Product—converting social media engagement (such as liking posts, commenting, sharing, and following influencers) into tangible rewards. This functionality motivates users to actively engage with influencer content, fostering a mutually advantageous relationship for both users and influencers. As influencers gain traction, they receive monetization not only from the social media platform but also through brand partnerships. Similarly, when user engagement translates into visiting the brand's website or making purchases, the brand also enjoys significant benefits.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Interaction Diagram
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h6">
                An interaction diagram is a visual representation that illustrates the flow of interactions between different components or objects within a system. In the context of UI/UX design and development, an interaction diagram helps designers map out how users will navigate through an interface, interact with various elements, and progress through different states or screens.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingY={5} justifyContent={"center"}>
            <Grid item xs={12} md={11} container justifyContent={"center"}>
              <img src={interactionDiagram} alt={interactionDiagram} style={{width: "100%", objectFit: "contain"}}/>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
                HIGH LEVEL CAMPAIGN 
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A high-level campaign in a designer's process involves developing a strategic and overarching plan that outlines the key objectives, messaging, and visual elements to convey a cohesive brand story or promote specific features within an app. It serves as a comprehensive guide for designers to align various design elements, user interactions, and promotional efforts, ensuring a unified and impactful user experience. Below are some ideas that my team and I came up with.             
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3} paddingBottom={5}>
            {
              highLevelCampaingImages.map((img) => {
                const campaginImage = cld.image(img)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={12} md={3} paddingX={3} paddingBottom={4} container alignContent={"flex-end"}>
                    <img src={campaginImage} alt={campaginImage} style={{width: "100%", maxHeight: 550, objectFit: "contain"}}/>
                  </Grid>
                )
              })
            }
          </Grid>
        </Container>
      </div>
    </div>
  )
}
