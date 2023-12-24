import { Container, Grid, Typography } from '@mui/material'


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

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
								Lo-Fidelity Wireframes
              </Typography>
            </Grid>
          </Grid>

					<Grid container paddingTop={2} paddingBottom={15}>
            <Grid item xs={12}>
              <Typography variant="h6">
								I crafted a low-fidelity prototype utilizing my iPad and Apple Pencil, facilitating seamless iterations and adjustments. Our deliberate choice was to design distinctive features that remain user-friendly.         
              </Typography>
            </Grid>
          </Grid>

        </Container>

      </div>
      
    </div>
  )
}
