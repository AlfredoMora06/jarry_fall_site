import Box from "@mui/material/Box"
import { Container, Grid, Typography, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import Carousel from 'react-material-ui-carousel'
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"

import theme from "../../theme"


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
      image: "jarry_fall/dhcbfqs1voztcsc0mrct", //AppleVisionPro
      link: "https://www.figma.com/proto/ayFP2iovMS3oD0TE9T6UlH/Apple-Vision-Pro?type=design&t=P5RodzYYx6HMH63U-1&scaling=scale-down&page-id=0%3A1&node-id=1-3&mode=design"
    },
    {
      image: "jarry_fall/n2qqf7mcatueq9trbnuq", // Starbucks
      link: "https://www.figma.com/proto/XLUhqnVGea1FIclFNFGsD6/Pinkity-Drinkity?type=design&t=TpLltn8YkU0O5TeD-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
    },
    {
      image: "jarry_fall/uowsrox5mwgt8nxl7goz", //Burger
      link: "https://www.figma.com/proto/jPuamvmjT9Y15d4iOEiE9P/Burger?type=design&t=59ltrvQQVWoxqAqC-1&scaling=scale-down&page-id=0%3A1&node-id=2-2&starting-point-node-id=2%3A2&mode=design"
    },
    {
      image: "jarry_fall/fxgjp9u0zcivgacxm0cq", // Green
      link: "https://www.figma.com/proto/S4GH122zHBXQCQgRzjFJ25/AirPods-Max?type=design&t=rA8KjJSYHWSkTxjP-1&scaling=min-zoom&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: "jarry_fall/faaf9s8xrbsgyiwnqvrf", // LightApp
      link: "https://www.figma.com/proto/dD9dQsEOd0MjNL8UXLUWgS/Brightness-Adjustment?type=design&t=OCt1dYUoz7ATiu32-1&scaling=scale-down&page-id=0%3A1&node-id=1-4&starting-point-node-id=1%3A4"
    },
    {
      image: "jarry_fall/xsko2s2effbscxc2t2lw", // Gray
      link: "https://www.figma.com/proto/DNv2l7NVu5lgnA5YAkKlYZ/iPhone?type=design&node-id=1-2&t=OepyMsFPsY1mcSPe-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design"
    },
    {
      image: "jarry_fall/mgmwndiwlgfz9mangyly", // Donuts
      link: "https://www.figma.com/proto/qLACAeQO7qd7WimB9iUEGk/Sweet-Donuts?type=design&t=1PjyNk9y7evfkTVA-1&scaling=scale-down&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2"
    }
  ]

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container justifyContent={"center"}>
          <Grid item paddingBottom={10}>
            <Typography variant="h1" fontWeight={700} color={theme.palette.primary.light} fontSize={80} align="center">
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
                  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})
                  const myImage = cld.image(item.image)
                    .delivery(quality(qualityAuto()))
                    .delivery(format(auto()))
                    .toURL()
                  return (
                    <div
                      className={classes.button}
                      key={`imagen-${index}`}
                      onClick={() => {
                        window.open(item.link, "_blank")
                      }}
                    >
                      <img 
                        src={myImage} 
                        alt={`imagen-${index}`} 
                        style={{
                          width: "100%", 
                          borderRadius: 50,
                          minHeight: 455,
                          maxHeight: 500, 
                          objectFit: "contain", 
                          transition: "transform .2s"
                        }}
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
