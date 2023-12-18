import Box from "@mui/material/Box"
import { Button, Container, Grid, Typography, Theme} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

import theme from "../../theme"
//@ts-ignore
import BeeSafe from "../../assets/BeeSafe.png"


const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    overflow: "hidden",
    "&:hover": {
      "& img": {
        opacity: 0.8,
        transform: "scale(1.10)"
      },
    },
  }
}))


export default function MyWork():JSX.Element {
  const classes = useStyles()
  const navigate = useNavigate()

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={10}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light}>
              My Work
            </Typography>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={10}>
            <Button
              variant="text" 
              className={classes.button}
            >
              <img loading="lazy" style={{width: "100%", transition: "transform .2s"}} src={BeeSafe} alt="beeSafe" />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
