import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function AhcDefine():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})

  const valuePropositionChart = cld.image('jarry_fall/zfhlwocrrsfspjzjpdfs')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  return (
    <div style={{paddingBottom: 50}}>
      <div style={{ backgroundColor: "#A62626" }}>
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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
                VALUE PROPOSITION CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A value proposition chart acts as a guiding framework for designers to clearly articulate the measurable and tangible advantages that users gain from engaging with a redesigned product or service.
              </Typography>
              <br/>
              <Typography variant="h6">
                Constructing this chart, informed by our collected data, provided insights into ways we can elevate the value in users' interactions with the revamped African Hope Committee (AHC) website, ensuring alignment with their goals, motivations, and core tasks.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingBottom={5} justifyContent={"center"}>
            <Grid item xs={12} md={5}>
              <img src={valuePropositionChart} alt="valuePropositionChart" style={{width: "100%", objectFit: "contain"}}/>
            </Grid>
          </Grid>
        
        </Container>
      </div>
    </div>
  )
}
