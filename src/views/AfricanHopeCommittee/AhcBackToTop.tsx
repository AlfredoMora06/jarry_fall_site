import { Container, Grid, Typography, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'


type BackToTopProps = {
	topRef: any
}

export default function AhcBackToTop({topRef}:BackToTopProps):JSX.Element {

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
								backgroundColor: "#A62626",
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
								window.open("https://www.figma.com/proto/hXI1NpvIrCqYFgqoNOBAI3/African-Hope?type=design&node-id=1-2&t=IYeWCb28OwMAdBor-0&scaling=scale-down&page-id=0%3A1", "_blank")
							}}
						>
							View Full Prototype Here
						</Fab>
          </Grid>
        </Grid>

		  	<Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" align="center" style={{ fontWeight: 700, color: "#A62626", letterSpacing: ".2rem", }}>
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
