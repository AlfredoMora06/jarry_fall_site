import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"


export default function BrandFluenceDiscoverSecond():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const ipadDrawings = cld.image('jarry_fall/BrandFluence/xz6bqm1mbyzgs51m0myy')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()

  const midWireFrames = [
    'jarry_fall/BrandFluence/ofhqn7q9fvrstimvhhzo',
    'jarry_fall/BrandFluence/g5w5belybqua6ecjzw5t',
    'jarry_fall/BrandFluence/gorevtf4xtgxeghggzed',
    'jarry_fall/BrandFluence/fvn1whfvvm6jjaj1m15b',
    'jarry_fall/BrandFluence/z0bm0plglf4xv3mlbhji',
    'jarry_fall/BrandFluence/qv4wqpjtgkgibpyyuhak',
    'jarry_fall/BrandFluence/v7upeuyub5tjemygax2z',
    'jarry_fall/BrandFluence/xsojcq7mj5zxgjrlsrq9',
  ]

  const hiWireFrames = [
    'jarry_fall/BrandFluence/imqmyjo9p1v4zcui7nd6',
    'jarry_fall/BrandFluence/lm9fsvwvb82ztsdl8xrn',
    'jarry_fall/BrandFluence/ninlunvt4oy9i64xgrbq',
    'jarry_fall/BrandFluence/tezkdfkgr627whn9pi5r',
    'jarry_fall/BrandFluence/l8k7tk4vw17c3idpuqai',
  ]

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
              <Typography variant="h5" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
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

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                I crafted a low-fidelity prototype utilizing my iPad and Apple Pencil, facilitating seamless iterations and adjustments. We wanted to focus on designing a user-friendly app that app prioritizes seamless navigation, intuitive features, and an engaging interface, ensuring an enjoyable experience for our users.              
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

          <Grid item xs={12} container>
            <ul style={{paddingLeft: 20, fontSize: 20, fontWeight: 500}}>
              <li>
                <Typography variant="h6">
                  The login page follows a straightforward approach, resembling other social media platforms. However, our unique color scheme contributes to a sleek appearance, setting our app apart from others in the market.                
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Users have the ability to redeem the points that they earned from engaging with posts on social media.                
                </Typography>
              </li>
              <li>
                <Typography variant="h6">
                  Users not only receive discounts as rewards but also have the opportunity to enjoy unique experiences. Examples include receiving personalized video messages from their favorite influencers or securing front-row seats at a New York Fashion Week show.                
                </Typography>
              </li>
            </ul>
          </Grid>

          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={8} container justifyContent={"center"}>
              <img src={ipadDrawings} alt={ipadDrawings} style={{width: "100%", objectFit: "contain"}}/>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Usability Testing
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Most users perceived the arrangement of buttons and navigation elements as intuitive and easy to use.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3}>
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

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Usability Testing
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Our usability metrics consistently improved, reaching a 100% success rate and a 98 usability score. After making minor adjustments based on user feedback, we advanced to develop our high-fidelity prototype.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3} paddingBottom={5} justifyContent={"center"}>
            {
              midWireFrames.map((img) => {
                const midImage = cld.image(img)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={6} md={2.8} marginX={1} marginBottom={4} container alignContent={"flex-end"} border={1} borderRadius={10}>
                    <img src={midImage} alt={midImage} style={{width: "100%", maxHeight: 500, objectFit: "contain"}}/>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Hi-Fidelity Wireframes
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={3} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Following a comprehensive review of user feedback on our mid-fidelity prototype, we made minor adjustments, with a primary focus on refining the placement of headings, buttons, button labels, and navigation elements.              
              </Typography>
              <br/>
              <Typography variant="h6">
                To better our mid-fidelity prototypes, we introduced vibrant colors, compelling text, and engaging photos, breathing life into our final design. In addition, we enriched our mid-fidelity prototypes with dynamic illustrations, interactive elements, user-friendly icons, and cohesive typography, creating a more immersive and visually appealing experience. Click the button below to explore and interact with the complete prototype.             
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingBottom={5} justifyContent={"center"}>
            {
              hiWireFrames.map((img) => {
                const hiImage = cld.image(img)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={6} md={2.4} marginBottom={4} container justifyContent={"center"}>
                    <img src={hiImage} alt={hiImage} style={{width: "100%", objectFit: "contain"}}/>
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
