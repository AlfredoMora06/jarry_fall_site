import { Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"

//@ts-ignore
import searchIcon from "../../assets/searchIcon.svg"
//@ts-ignore
import dollarIcon from "../../assets/dollarIcon.svg"
//@ts-ignore
import circleArrowsIcon from "../../assets/circleArrowsIcon.svg"
//@ts-ignore
import mapLineIcon from "../../assets/mapLineIcon.svg"
//@ts-ignore
import mapIcon from "../../assets/mapIcon.svg"
//@ts-ignore
import hiveIcon from "../../assets/Hive.svg"
import ComparisonCheckTable from './ComparisonCheckTable'

const quantDataArray = [
  {
    image: searchIcon,
    title: 'CITIZEN',
    description: `Is our user’s preferred safety app`
  },
  {
    image: dollarIcon,
    title: 'FEES',
    description: `Our user’s don’t like paying for premium features`
  },
  {
    image: circleArrowsIcon,
    title: 'DAILY',
    description: `Is how often the majority of our user’s use a safety app`
  },
  {
    image: mapLineIcon,
    title: '80%',
    description: `Of our user’s track their family and friend’s location`
  },
  {
    image: mapIcon,
    title: '100%',
    description: `Of our user’s share their location with family and friends `
  }
]


export default function Discover():JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const phoneImage = cld.image('jarry_fall/kdff1al0d4yti5og1vz3')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()
  

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
                ORIGINAL CONCEPT / PAIN POINT
              </Typography>
            </Grid>
          </Grid>
          
          
          <Grid container justifyContent={"center"} paddingTop={2}>
            <Grid item xs={12} md={5} container justifyContent={"center"}>
              <Grid item xs={6} md={3}>
                <img src={hiveIcon} alt={"hiveIcon"} style={{width: "100%", objectFit: "contain",}}/>
              </Grid>
              <Grid item xs={6} md={3} container alignContent={"center"} paddingLeft={1} paddingTop={2}>
                <Typography variant='h3' fontWeight={700}>HIVE</Typography>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} container justifyContent={"center"}>
              <img src={phoneImage} alt={"phonesImage"} style={{width: "100%", objectFit: "contain",}}/>
            </Grid>
          </Grid>


          <Grid container paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                HIVE focuses on creating a solution for the lack of community spirit, overburdened services, and unproductive use of free time prevail in large cities. Presently, residents find themselves alienated from their neighbors, contributing to an absence of community cohesion. Concurrently, essential services within the city are overwhelmed, leading to prolonged wait times. A significant number of individuals fail to utilize their free time productively, despite harboring untapped skills. By addressing, these challenges HIVE empowers residents in large buildings to leverage their skills, ensuring swift access to vital services, and fostering a sense of community among neighbors.
              </Typography>
              <br/>
              <Typography variant="h6">
                By focusing on the priority of fostering and depending on your community, my team then came up with the app “BeeSafe.” We really wanted to keep the theme/idea of the HIVE community alike, hence the name “BeeSafe.” 
                HIVE...BeeSafe...get it 😁???
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                MARKET RESEARCH
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingY={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                In the discovery stage, our emphasis was on gaining a deep understanding of global issues, user challenges, and identifying the extent of our knowledge. We proactively considered potential business problems, envisioned desired outcomes, examined diverse user types, and addressed anticipated challenges. This comprehensive approach, which also included a thorough analysis of competitors such as “The Citizen,” “Life 360,” and “Noonlight,” enabled us to craft a well-informed strategy for the project. By delving into the complexities of worldwide issues and user perspectives, we laid a strong foundation to navigate potential obstacles. This ensures that our solutions are not only innovative but also responsive to the diverse needs of our user base, differentiating us in the market and positioning us strategically among industry competitors.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                FEATURE COMPARISON CHART
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                The feature comparison chart serves as a valuable tool for juxtaposing the features of our app with those of our competitors. This aids in the swift identification of market trends and openings.
              </Typography>
              <br/>
              <Typography variant="h6">
                Understanding mental models has been instrumental in aligning our solution with user expectations in a safety app. By incorporating familiar features that users have encountered before, our app is designed to feel more intuitive and navigable, enhancing the overall user experience.
              </Typography>
            </Grid>
          </Grid>

          <ComparisonCheckTable />

          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                We aspired to craft features that not only addressed the unique needs of communities and individuals but also distinguished us from competitors. Our innovative offerings, such as the Safety Challenges/Gamification feature and the Community Bulletin Board feature, stand out as prime examples of our commitment to providing distinctive and valuable functionalities.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
                USER RESEARCH
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5} paddingBottom={10}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After our market research, we moved onto user research. We started with a survey, which we sent out through email to our contacts.              
              </Typography>
              <br/>
              <Typography variant="h6">
                Our subjects consisted of a range of people of all different ages and backgrounds, and understanding their experience living in their communities.
              </Typography>
              <br/>
              <Typography variant="h6">
                We collected 65 surveys using Google Forms, which provided many insights about the ways in which users want to feel safe in their communities.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={4} container justifyContent={"center"} style={{background: "#F4C419"}}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "white", letterSpacing: ".2rem", }}>
                QUANTITATIVE DATA
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={5}>
            { quantDataArray.map((item) => {
                const {image, title, description} = item
                return (
                  <Grid item xs={12} md={2.4} key={title} paddingX={1}>
                    <Grid item container justifyContent={"center"}>
                      <img src={image} alt={title}/>
                    </Grid>
                    <Typography variant='h6' fontWeight={700} align='center'>{title}</Typography>
                    <Typography variant='h6' align='center'>{description}</Typography>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingTop={5} paddingBottom={15}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Qualitative Data: Interviews             
              </Typography>
              <br/>
              <Typography variant="h6">
                We conducted interviews with a total of 15 individuals, all of whom had experience with CITIZEN and at least one other safety app.               
              </Typography>
              <br/>
              <Typography variant="h6">
                This approach proved valuable as it allowed me to gain a more profound insight into our users' motivations for choosing CITIZEN over apps like Life360 and Noonlight.              
              </Typography>
            </Grid>
          </Grid>
        </Container>

      </div>
      
    </div>
  )
}
