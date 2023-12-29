import { Container, Grid, Typography, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


type BackToTopProps = {
	topRef: any
}

export default function BackToTop({topRef}:BackToTopProps):JSX.Element {

	const scrollToHistory = () => {
    topRef.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
		<div style={{paddingBottom: 50}}>
      <Container>
				<Grid container paddingBottom={10}>
          <Grid item xs={12} container justifyContent={"center"}>
            <Fab
							variant="extended"
							sx={{
								paddingX: 4,
								backgroundColor: "#FFDE69",
                boxShadow: "none",
								fontWeight: 700,
                m: 1,
        				"&.MuiFab-extended .MuiSvgIcon-root": {
        				  marginRight: 1,
        				},
         				"&:hover":  {
									backgroundColor: "#FFDE69",
         				  opacity: "0.5"
         				}
							}}
							onClick={() => {
								window.open("https://www.figma.com/proto/tpVI9cLDx880YIJi5AdTl6/BeeSafe?type=design&node-id=161-1772&t=833RfhAJX2bhuAWh-1&scaling=min-zoom&page-id=0%3A1&mode=design", "_blank")
							}}
						>
							View Full Prototype Here
						</Fab>
          </Grid>
        </Grid>

		  	<Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" style={{ fontWeight: 700, color: "#E6B301", letterSpacing: ".2rem", }}>
		  				THANK YOU FOR READING THIS CASE STUDY!
            </Typography>
          </Grid>
        </Grid>

				<Grid container paddingTop={10}>
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
