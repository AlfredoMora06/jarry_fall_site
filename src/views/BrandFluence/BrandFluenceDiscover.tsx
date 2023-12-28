import { Container, Grid, Typography } from '@mui/material'


export default function BrandFluenceDiscover():JSX.Element {

  return (
    <div>
      <div style={{ backgroundColor: "#FFABAB" }}>
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
                PAIN POINT
              </Typography>
            </Grid>
          </Grid>

        </Container>

      </div>
      
    </div>
  )
}
