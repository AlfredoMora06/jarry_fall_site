import { Container, Grid, Typography } from '@mui/material'

const pointArray = [
  "Designed for optimal user interaction, the panic button is boldly emphasized on the home page, ensuring both visibility and easy accessibility for users in any critical situation.",
  "Users have the capability to share their journeys with trusted friends and family members whenever they deem it necessary, a feature commonly found in safety apps. However, our design stands out uniquely because it not only ensures seamless sharing but also introduces an exclusive auto-detour detection, swiftly assisting users in the event of trip disruptions or unexpected deviations, setting our app apart from others in its class.",
  "The route planning page, crafted with a focus on user-centric design, integrates intuitive controls, clear visual cues, and preset destination options ensuring a navigation experience that prioritizes both efficiency and user safety.",
  "Our community page is a dynamic hub thoughtfully designed to foster a sense of security and shared awareness. It not only features articles dedicated to safety and community well-being, but also provides valuable insights and data, showcasing percentage changes in offenses each day. This holistic approach ensures that our users are not only informed but actively engaged in contributing to the safety and vitality of their community.",
]


export default function DiscoverSecond():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#FFDF6C" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
								WIREFRAMES TO PROTOTYPES
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Lo-Fidelity Concept Sketches
              </Typography>
            </Grid>
          </Grid>

					<Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                I crafted a low-fidelity prototype utilizing my iPad and Apple Pencil, facilitating seamless iterations and adjustments. Our deliberate choice was to design distinctive features that remain user-friendly.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                How we decided to design our features:              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <ul style={{paddingLeft: 10}}>
                {
                  pointArray.map((point) => {
                    return (
                      <li>
                        <Typography variant="h6" paddingTop={2}>{point}</Typography>
                      </li>
                    )
                  })
                }
              </ul>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Usability Testing
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The majority of users found the placement of buttons, pop-up windows, and navigation elements to be intuitive and user-friendly.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Mid-Fidelity Wireframes
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A mid-fidelity prototype is a design representation that strikes a balance between low-fidelity sketches and high-fidelity, detailed mockups, offering a moderately detailed view of the user interface and interactions. I created my wireframes using Figma.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Usability Testing
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Our usability metrics demonstrated consistent improvement, achieving a 100% success rate and a 95 usability score. Following minor adjustments informed by user data, we proceeded to create our high-fidelity prototype.
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- WIREFRAMES */}

          <Grid container paddingTop={4}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Hi-Fidelity Wireframes
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={15}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After thorough analysis of user feedback on our mid-fidelity prototype, we implemented minor adjustments, primarily focusing on the placement of headings, buttons, button labels, and navigation elements.            
              </Typography>
              <br/>
              <Typography variant="h6">
                We enhanced our mid-fidelity prototypes by incorporating vibrant colors, compelling text, and engaging photos to bring our final design to life. Click the button below to explore and interact with the complete prototype.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- WIREFRAMES */}

        </Container>

      </div>
      
    </div>
  )
}
