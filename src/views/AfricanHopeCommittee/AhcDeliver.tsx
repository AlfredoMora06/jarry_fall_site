import { Container, Grid, Typography } from '@mui/material'


export default function AhcDeliver():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#A62626" }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingY={10} >
            <Typography variant='h4' fontWeight={700} style={{color: "white"}}>
              DELIVER
            </Typography>
          </Grid>
        </Grid>
      </div>
      <div style={{paddingTop: 50}}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                WIREFRAMES TO PROTOTYPES
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Lo-Fidelity Concept Sketches
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                I developed a lo-fi prototype utilizing an iPad and Apple Pencil for swift and iterative design adjustments. This method instills a mindset among designers, preventing us from becoming overly attached to a a particular design.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Throughout the testing phase with AHC's director, the prototype proved generally clear, but pinpointed specific pages requiring improvement for enhanced clarity.              
              </Typography>
            </Grid>
          </Grid>

          {/* TODO -- IPAD DRAWINGS  */}


        </Container>
      </div>
    </div>
  )
}
