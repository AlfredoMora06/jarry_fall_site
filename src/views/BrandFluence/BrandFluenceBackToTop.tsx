import { Container, Grid, Typography, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'


type BackToTopProps = {
	topRef: any
}

export default function IntroBrandFluenceBackToTop({topRef}:BackToTopProps):JSX.Element {

	const scrollToHistory = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
		<div style={{paddingBottom: 50}}>
      <Container>
				<Grid container paddingBottom={8}>
          <Grid item xs={12} container justifyContent={"center"}>
            <Fab
							variant="extended"
							sx={{
								paddingX: 4,
								backgroundColor: "#FFABAB",
                boxShadow: "none",
								fontWeight: 700,
                color: "white",
                m: 1,
        				"&.MuiFab-extended .MuiSvgIcon-root": {
        				  marginRight: 1,
        				},
         				"&:hover":  {
									backgroundColor: "#A62626",
         				  opacity: "0.5"
         				}
							}}
							onClick={() => {
								window.open("https://www.figma.com/proto/DcTr9dYdFeFpAuKQ9tm3p3/Team-2%3A-Brandfluence?type=design&node-id=52-2&t=bcay4jwwA6DzpAFx-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=52%3A2&show-proto-sidebar=1&mode=design", "_blank")
							}}
						>
							View Full Prototype Here
						</Fab>
          </Grid>
        </Grid>

				<Grid container >
          <Grid item xs={12}>
            <Typography variant="h5" style={{ fontWeight: 700, color: "black" }}>
							Next Steps...
            </Typography>
          </Grid>
        </Grid>

				<Grid container paddingTop={2} paddingBottom={8}>
            <Grid item xs={12}>
              <Typography variant="h6">
								In this project, there are numerous additions and refinements I'm eager to implement personally. With the expansion of wireframes and improvements to prototype flows, BrandFluence could transform into an outstanding platform, offering unparalleled benefits for all users. Additionally, I plan to conduct further user testing to gather valuable insights and refine the user interface for optimal usability. Iterative design enhancements, coupled with a keen focus on user feedback, will ensure that BrandFluence not only meets, but exceeds user expectations. By prioritizing continuous improvement, the platform is poised to become a go-to hub for seamless social media interactions, fostering collaboration between users, influencers, and brands. The journey doesn't end here; it's an ongoing process of innovation and user-centric refinement.							
							</Typography>
            </Grid>
          </Grid>

		  	<Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" style={{ fontWeight: 700, color: "#FFABAB", letterSpacing: ".2rem", }}>
		  				THANK YOU FOR READING THIS CASE STUDY!
            </Typography>
          </Grid>
        </Grid>

				<Grid container paddingTop={5}>
          <Grid item xs={12} container justifyContent={"center"}>
            <Fab
							variant="extended"
							sx={{
								paddingLeft: 4,
								backgroundColor: "#FF9DCC",
                boxShadow: "none",
								fontWeight: 700,
                m: 1,
        				"&.MuiFab-extended .MuiSvgIcon-root": {
        				  marginRight: 1,
        				},
         				"&:hover":  {
         				  backgroundColor: "primary.main",
         				}
							}}
							onClick={scrollToHistory}
						>
							Back to the top <KeyboardArrowUpIcon/>
						</Fab>
          </Grid>
        </Grid>
      </Container>
		</div>
  )
}
