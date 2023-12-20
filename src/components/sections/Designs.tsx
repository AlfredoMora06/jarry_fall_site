import Box from "@mui/material/Box"
import { Container, Grid, Typography, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Carousel from 'react-material-ui-carousel'

import theme from "../../theme"
//@ts-ignore
import AppleVisionPro from "../../assets/AppleVisionPro.png"
//@ts-ignore
import Starbucks from "../../assets/Starbucks.png"
//@ts-ignore
import Burger from "../../assets/Burger.png"
//@ts-ignore
import Green from "../../assets/Green.png"
//@ts-ignore
import LightApp from "../../assets/LightApp.png"
//@ts-ignore
import Gray from "../../assets/Gray.png"
//@ts-ignore
import Donuts from "../../assets/Donuts.png"


const useStyles = makeStyles<Theme>(() => ({
  button: {
    overflow: "hidden",
    "&:hover": {
      "& img": {
        opacity: "0.7",
        transform: "scale(1.10)",
        cursor: "pointer"
      },
    },
  }
}))

type Item = {
  image: string,
  link: string,
}

export default function Designs():JSX.Element {
  const classes = useStyles()

  const items: Item[] = [
    {
      image: AppleVisionPro,
      link: "https://www.figma.com/proto/ayFP2iovMS3oD0TE9T6UlH/Apple-Vision-Pro?type=design&t=P5RodzYYx6HMH63U-1&scaling=scale-down&page-id=0%3A1&node-id=1-3&mode=design"
    },
    {
      image: Starbucks,
      link: "https://www.figma.com/proto/XLUhqnVGea1FIclFNFGsD6/Pinkity-Drinkity?type=design&t=TpLltn8YkU0O5TeD-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
    },
    {
      image: Burger,
      link: "https://www.figma.com/proto/jPuamvmjT9Y15d4iOEiE9P/Burger?type=design&t=59ltrvQQVWoxqAqC-1&scaling=scale-down&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&mode=design"
    },
    {
      image: Green,
      link: "https://www.figma.com/proto/S4GH122zHBXQCQgRzjFJ25/AirPods-Max?type=design&t=rA8KjJSYHWSkTxjP-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: LightApp,
      link: "https://www.figma.com/proto/dD9dQsEOd0MjNL8UXLUWgS/Brightness-Adjustment?type=design&t=OCt1dYUoz7ATiu32-1&scaling=scale-down&page-id=0%3A1&node-id=6-319&starting-point-node-id=1%3A4&mode=design"
    },
    {
      image: Gray,
      link: "https://www.figma.com/proto/DNv2l7NVu5lgnA5YAkKlYZ/iPhone?type=design&node-id=1-2&t=OepyMsFPsY1mcSPe-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: Donuts,
      link: "https://www.figma.com/proto/qLACAeQO7qd7WimB9iUEGk/Sweet-Donuts?type=design&t=1PjyNk9y7evfkTVA-1&scaling=scale-down&page-id=0%3A1&node-id=1-145&starting-point-node-id=1%3A2&mode=design"
    }
  ]

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={10}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light} fontSize={80}>
              My Designs
            </Typography>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <Carousel 
              animation="slide" 
              navButtonsAlwaysVisible 
              indicators={false}
              navButtonsProps={{style: {backgroundColor: "rgba(254, 85, 166, 0.5)" }}}
            >
              {
                items.map((item, index) => {
                  return (
                    <div
                      className={classes.button}
                      key={`imagen-${index}`}
                      onClick={() => {
                        window.open(item.link, "_blank")
                      }}
                    >
                      <img 
                        src={item.image} 
                        alt={`imagen-${index}`} 
                        style={{width: "100%", borderRadius: 50, maxHeight: 500, objectFit: "contain", transition: "transform .2s"}}
                      />
                    </div>
                  )
                })
              }
            </Carousel>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
