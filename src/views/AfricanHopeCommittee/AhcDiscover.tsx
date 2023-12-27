import { Container, Grid, Typography } from '@mui/material'



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
          
          <Grid container paddingTop={5} paddingBottom={15}>
            <Grid item xs={12}>
              <Typography variant="h6">
                During the client interview, I engaged in a discussion with AHC's director to find out their preferences and aspirations for the redesign. Given their recent logo rebrand, I sought insights into the specific features they wished to highlight and the desired presentation style. I focused on understanding the elements that would  enhance user usability throughout the website and explored strategies to increase traction, ensuring the redesign aligns seamlessly with AHC's goals and resonates effectively with its audience.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- Key Areas of Emphasis: */}

        </Container>

      </div>
      
    </div>
  )
}
