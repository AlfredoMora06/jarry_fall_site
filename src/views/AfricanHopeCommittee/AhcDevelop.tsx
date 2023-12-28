import { Container, Grid, Typography } from '@mui/material'


export default function AhcDevelop():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#A62626" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                SOLUTION IDEATION
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                How might we solve our problem?
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                In the Develop stage, the initial step entails converting our problem statements into how-might-we questions, which serve as prompts for designers to generate potential solutions to the identified problem(s).              
              </Typography>
            </Grid>
          </Grid>
          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                In this case, I asked myself:              
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <ol style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              <li>
                <Typography variant="h6">
                  How might we help users navigate through the website easier making it more user friendly?
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  How might we create a more aesthetic looking website aligns with AHC’s vision?
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  How might we streamline the information presentation on the website to enhance user comprehension and engagement with AHC's mission and initiatives?
                </Typography>
              </li>
            </ol>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                MoSCoW METHOD
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The MoSCoW method assists us in pinpointing the critically essential features required to address our problem, prioritizing those necessary for solving the issue at hand before incorporating additional features that may support but are not indispensable for the solution.
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                My <Typography variant="h6" display="inline" style={{color: "#A62626"}}>MUST-HAVE</Typography> features tackled my three problems:            
              </Typography>
            </Grid>
          </Grid>

          <Grid item xs={12} container>
            <ol style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              <li>
                <Typography variant="h6">
                  An AI chatbot providing users with answers to inquiries related to AHC's services.               
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  A website-based contact form for prospective clients, offering an alternative to external means like email or phone.
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  A page that clearly displays AHC’s vision, local mission and global vision.
                </Typography>
              </li>
            </ol>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                So what is our final solution?
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After consolidating insights gathered through each phase, my <strong style={{color: "#A62626"}}>minimum viable product</strong> will take shape as a renovated website for the African Hope Committee (AHC).
              </Typography>
              <br/>
              <Typography variant="h6">
                In addition to three essential features identified in my MoSCoW chart, my MVP will include a a <strong style={{color: "#A62626"}}>clean and cohesive</strong> user interface with streamlined elements while simultaneously incorporating <strong style={{color: "#A62626"}}>interactive features</strong> that will be effective in engaging users. The website will feature dynamic content presentation, fostering a sense of community and encouraging users to actively participate in AHC's programs, thus enhancing their overall experience.
              </Typography>
            </Grid>
          </Grid>

        </Container>
      </div>
    </div>
  )
}
