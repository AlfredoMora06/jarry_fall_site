import { Box, Container, Grid, Typography } from '@mui/material'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"
//@ts-ignore
import pencilOutline from "../../assets/pencilOutline.svg"


export default function AhcDeliver({isMobile}:{isMobile: boolean}):JSX.Element {
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
  const photoArray = [
    'jarry_fall/AHC/dr0kcmkctpsitcvj8n9b',
    'jarry_fall/AHC/l8mj1gnbiq9ryllcwqx1',
    'jarry_fall/AHC/pgustnb7ignvahazalsn',
    'jarry_fall/AHC/vy4av5cwkiir9tkyktnm',
    'jarry_fall/AHC/bsdriujcdexlxydomldr',
    'jarry_fall/AHC/k6kpzsrrbuximqxpecev',
    'jarry_fall/AHC/g2lj5kwk1laae04evj9o',
    'jarry_fall/AHC/xue8jss7w8whp4zpdkpw'
  ] 

  const ipadDrawings = [
    'jarry_fall/AHC/d6liifdijljyymiofgrc',
    'jarry_fall/AHC/ai3t7gnnmaxw7t9mk8ct',
    'jarry_fall/AHC/yrt7vt4ae8hxqgevqucl',
    'jarry_fall/AHC/jfzabutah6mfkjzaycvk',
    'jarry_fall/AHC/b3jhade44yry3g3s2dlr',
    'jarry_fall/AHC/wm6oozelcjoo4mfxc8aw',
  ]

  const colorSquares: {title: string, color: string, white: boolean}[] = [
    {
      title: "Playful",
      color: "-webkit-linear-gradient(#F98080, #9B1D1D)",
      white: true
    },
    {
      title: "Cohesive",
      color: "#9C1818",
      white: true
    },
    {
      title: "Professional",
      color: "#4F0202",
      white: true
    },
    {
      title: "Clean",
      color: "#CB9D72",
      white: false
    },
    {
      title: "Inviting",
      color: "#F6C58C",
      white: false,
    },
    {
      title: "Calm",
      color: "#FFF0DE",
      white: false
    }
  ]

  const hiWireFrames = [
    'jarry_fall/AHC/sg1byncuwqh1nli0swgy',
    'jarry_fall/AHC/i166a1ghcaschbq6uxcp',
    'jarry_fall/AHC/tx7kwbt2cow7ktli38dy'
  ]

  const colorCircles: {title: string, color: string}[] = [
    {
      title: "Gradient",
      color: "-webkit-linear-gradient(#F98080, #9B1D1D)",
    },
    {
      title: "#9C1818",
      color: "#9C1818",
    },
    {
      title: "#4F0202",
      color: "#4F0202",
    },
    {
      title: "#CB9D72",
      color: "#CB9D72",
    },
    {
      title: "#F6C58C",
      color: "#F6C58C",
    },
    {
      title: "#FFF0DE",
      color: "#FFF0DE",
    }
  ]

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

          <Grid container paddingTop={2} paddingBottom={5}>
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

          <Grid container paddingTop={2} paddingBottom={5}>
            {
              ipadDrawings.map((img) => {
                const ipadImage = cld.image(img)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={4} padding={2}>
                    <img src={ipadImage} alt={ipadImage} style={{width: "100%", objectFit: "contain"}}/>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Mid-Fidelity Wireframes
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                A mid-fidelity prototype is a design representation that strikes a balance between low-fidelity sketches and high-fidelity, detailed mockups, offering a moderately detailed view of the user interface and interactions. I created my wireframes in Figma which helped bring more clarity to the website.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            {
              photoArray.map((image) => {
                const designImage = cld.image(image)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={3} paddingX={3} paddingBottom={4}>
                    <img src={designImage} alt={designImage} style={{width: "100%", objectFit: "contain"}}/>
                  </Grid>
                )
              })
            }
          </Grid>

          <Grid container paddingTop={3}>
            <Grid item xs={12}>
              <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
                Style Guide
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2}>
            <Grid item xs={12}>
              <Typography variant="h6">
                Before moving onto my high fidelity prototype, I quickly laid out a style guide to help keep the visual design cohesive.              
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={4}>
            <Grid item xs={12} md={9} container>
              {
                colorCircles.map((circle) => {
                  return !isMobile ? (
                    <Grid item xs={6} md={2} container justifyContent={"center"}>
                      <Box style={{background: circle.color, width: 100, height: 240, borderRadius: 100}} boxShadow={10}/>
                      <Typography sx={{color: "#636363"}} paddingY={3}>{circle.title}</Typography>
                      <Box style={{background: circle.color, width: 100, height: 100, borderRadius: 100 }} boxShadow={10}/>
                    </Grid>
                  ) : (
                    <>
                      <Grid item xs={6} container marginBottom={3}>
                        <Grid item xs={12} container justifyContent={'center'}>
                          <Box style={{background: circle.color, width: 100, height: 240, borderRadius: 100}} boxShadow={10}/>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography sx={{color: "#636363"}} paddingTop={3} paddingBottom={2} fontWeight={700} align='center'>{circle.title}</Typography>
                        </Grid>
                        <Grid item xs={12} container justifyContent={'center'}>
                          <Box style={{background: circle.color, width: 100, height: 100, borderRadius: 100 }} boxShadow={10}/>
                        </Grid>
                      </Grid>
                    </>
                  )
                })
              }
            </Grid>
            <Grid item xs={12} md={3} container justifyContent={"center"} pt={isMobile ? 6 : 0}>
              <img src={pencilOutline} alt={pencilOutline} style={{width: isMobile ? "40%" : "70%", objectFit: "contain"}}/>
            </Grid>
          </Grid>

          <Grid container paddingTop={5}>
            <Grid item xs={12} paddingBottom={5} container justifyContent={isMobile ? 'center' : 'flex-start'}>
              <Typography variant="h1" sx={{color: "#636363"}} fontWeight={700}>Inter</Typography>
            </Grid>
            <Grid item xs={12} md={1.5} marginRight={isMobile ? 0 : 5} marginBottom={isMobile ? 2 : 0}>
              <Typography variant="h2" fontWeight={400} align='center'>Aa</Typography>
              <Typography variant="h5" fontWeight={400} align='center'>Inter Regular</Typography>
            </Grid>
            <Grid item xs={12} md={1.5} marginRight={isMobile ? 0 : 5} marginBottom={isMobile ? 2 : 0}>
              <Typography variant="h2" fontWeight={500} align='center'>Aa</Typography>
              <Typography variant="h5" fontWeight={500} align='center'>Inter Medium</Typography>
            </Grid>
            <Grid item xs={12} md={1.5} marginRight={isMobile ? 0 : 5} marginBottom={isMobile ? 2 : 0}>
              <Typography variant="h2" fontWeight={600} align='center'>Aa</Typography>
              <Typography variant="h5" fontWeight={600} align='center'>Inter Semi Bold</Typography>
            </Grid>
            <Grid item xs={12} md={1.5} marginRight={isMobile ? 0 : 5}>
              <Typography variant="h2" fontWeight={700} align='center'>Aa</Typography>
              <Typography variant="h5" fontWeight={700} align='center'>Inter</Typography>
              <Typography variant="h5" fontWeight={700} align='center'>Bold</Typography>
            </Grid>
          </Grid>


          <Grid container paddingTop={5} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                After finalizing the color palette for the website, I conducted a survey to gather user perceptions of the emotional tone conveyed by each color in the user interface. The goal was to establish brand attributes—distinct characteristics that users should associate with AHC. These attributes would guide design choices and be  reflected in my high-fidelity prototype.              
              </Typography>
              <br/>
              <Typography variant="h6">
                I aimed to guarantee that my design resonated with the brand's intended attributes.              
              </Typography>
            </Grid>
          </Grid>

          {/* Color Squares */}
          <Grid container>
            {
              colorSquares.map((square) => {
                return (
                  <Grid item xs={6} md={2} sx={{background: square.color}} paddingY={8}>
                    <Typography 
                      variant="h6" 
                      sx={{color: square.white ? "white" : "black"}} 
                      textAlign={"center"}
                      fontWeight={700}
                    >
                      {square.title}
                    </Typography>
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

          <Grid container paddingTop={2} paddingBottom={5}>
            <Grid item xs={12}>
              <Typography variant="h6">
                I was then able to shift to crafting the high-fidelity prototype, incorporating the evolving elements of the website. I am actively collaborating on this project with the director, incorporating their preferences, and anticipate completing the full design within the next couple of months. The design is not at all complete, but I’m excited to continue working on this project and showcasing the final results.               
              </Typography>
            </Grid>
          </Grid>

          <Grid container paddingTop={2} paddingBottom={5}>
            {
              hiWireFrames.map((wireFrame) => {
                const wireFrameImage = cld.image(wireFrame)
                  .delivery(quality(qualityAuto()))
                  .delivery(format(auto()))
                  .toURL()
                return (
                  <Grid item xs={4} padding={2}>
                    <img src={wireFrameImage} alt={wireFrameImage} style={{width: "100%", objectFit: "contain"}}/>
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
