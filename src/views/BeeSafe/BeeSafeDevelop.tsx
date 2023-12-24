import { Container, Grid, Typography } from '@mui/material'


export default function BeeSafeDevelop():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#FFDF6C" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                MINIMUM VIABLE PRODUCT
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", fontSize: 50}}>
                MVP
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Our achievement in the development phase is our indispensable Minimum Viable Product—the Safe Route Planner. This feature empowers users with more than just navigation; it ensures they embark on the safest possible journey.
              </Typography>
              <br/>
              <Typography variant="h6">
                Unlike common misconceptions associating the fastest route with safety, our Safe Route Planner goes above and beyond. It meticulously considers various factors, including well-lit streets, crime statistics, public spaces, proximity to emergency services, and the presence of surveillance cameras. This thorough analysis ensures that users are guided not merely to their destination but along a path carefully curated for their safety. It's a testament to our commitment to providing a comprehensive and secure navigation experience, where sometimes, opting for the slightly longer route is the smarter choice.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
