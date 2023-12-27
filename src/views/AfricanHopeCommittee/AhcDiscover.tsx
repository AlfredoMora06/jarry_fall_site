import { Container, Grid, Typography } from '@mui/material'

const keyAreasOfEmphasis: {title: string, description: string}[] = [
  {
    title: "Clutter-Free Layout:",
    description: "Streamline the website to eliminate visual distractions and prevent overwhelming the users."
  },
  {
    title: "Modern Design and Style Guide:",
    description: "Implement a contemporary design that includes a cohesive style guide to ensure visual consistency."
  },
  {
    title: "Optimized Information Placement:",
    description: "Strategically position crucial information in accessible areas to improve user engagement."
  },
  {
    title: "Content Organization:",
    description: "Establish a clear organizational order to prevent confusion between outdated and relevant content."
  },
  {
    title: "User-Centric Prioritization:",
    description: "Prioritize a user-centric approach by placing up-to-date information at the forefront of the design.",
  },
  {
    title: "Enhanced User Usability:",
    description: "Identify and implement elements that enhance overall user usability throughout the website."
  },
  {
    title: "Feature Highlighting:",
    description: "Focus on highlighting specific features, especially those related to the recent logo rebrand."
  },
  {
    title: "Desired Presentation Style:",
    description: "Align the redesign with the preferred presentation style outlined during the client interview."
  },
  {
    title: "Strategies for Increased Traction:",
    description: "Explore and implement strategies to attract more traffic to the website and improve its visibility."
  },
  {
    title: "Alignment with AHC's Goals:",
    description: "Ensure that the redesign aligns seamlessly with the goals and aspirations of the African Hope Committee."
  },
  {
    title: "Effective Audience Resonance:",
    description: "Craft the redesign in a way that resonates effectively with the target audience of AHC."
  },
]



export default function AhcDiscover():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#A62626" }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingY={10} >
            <Typography variant='h4' fontWeight={700} style={{color: "white"}}>
              DISCOVER
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 50}}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                ORIGINAL CONCEPT / PAIN POINT
              </Typography>
            </Grid>
          </Grid>

          {/*TODO -- Laptop Images */}
          
          <Grid container paddingTop={5} paddingBottom={15}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The existing website holds valuable information, but its cluttered layout creates visual distractions and overwhelms users. The design appears outdated, lacking a cohesive style guide. Some crucial information is positioned where users typically wouldn't click, and outdated content is mixed with more relevant information, lacking a clear organizational order. To enhance user experience, it's essential to prioritize a clean, organized layout with up-to-date information at the forefront and a cohesive visual design.              
              </Typography>
              <br/>
              <Typography variant="h6">
                The existing website holds valuable information, but its cluttered layout creates visual distractions and overwhelms users. The design appears outdated, lacking a cohesive style guide. Some crucial information is positioned where users typically wouldn't click, and outdated content is mixed with more relevant information, lacking a clear organizational order. To enhance user experience, it's essential to prioritize a clean, organized layout with up-to-date information at the forefront and a cohesive visual design.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                CLIENT INTERVIEW
              </Typography>
            </Grid>
          </Grid>
          
          <Grid container paddingTop={5} paddingBottom={3}>
            <Grid item xs={12}>
              <Typography variant="h6">
                During the client interview, I engaged in a discussion with AHC's director to find out their preferences and aspirations for the redesign. Given their recent logo rebrand, I sought insights into the specific features they wished to highlight and the desired presentation style. I focused on understanding the elements that would  enhance user usability throughout the website and explored strategies to increase traction, ensuring the redesign aligns seamlessly with AHC's goals and resonates effectively with its audience.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- Key Areas of Emphasis: */}
          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Key Areas of Emphasis:
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container paddingBottom={5}>
            <ol style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              {
                keyAreasOfEmphasis.map((keyArea) => {
                  return (
                    <li style={{paddingBottom: 5}}>
                      <Typography variant="h6">{keyArea.title}</Typography>
                      <ul style={{listStyle: "none", paddingLeft: 0, fontSize: 20, fontWeight: 500}}>
                        <li>
                          <Typography variant="h6">{`- ${keyArea.description}`}</Typography>
                        </li>
                      </ul>
                    </li>
                  )
                })
              }
            </ol>
          </Grid>

        </Container>

      </div>
      
    </div>
  )
}
