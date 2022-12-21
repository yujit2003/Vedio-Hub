import { Heading, Box, Image, Container, Stack,Text} from '@chakra-ui/react';
import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from"../asserts/1.jpg";
import img2 from"../asserts/2.jpg";
import img3 from"../asserts/3.jpg";
import img4 from"../asserts/4.jpg";
import img5 from"../asserts/5.png";

const headingOptions = {
    // absolute -> jab kisi image ke upr ye text lana padta hai
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",  
    p:"4",
    size:'4xl'
}

const Home = () => {
    
  return (
    <div>
      <MyCarousel />
      <Box>

      <Container
      maxW={'Container.xl'}
      minH={'100vh'}
      p="16"
      >
        <Heading
        m="auto"
        w={'fit-content'}
        text-transform={'uppercase'}
        borderBottom={'2px solid'}
        >
        Services
        </Heading>

        <Stack
        maxW={'14600'}
        py={'4'}
        direction={['column','row']}
        alignItems={'center'}
        h="full"
        >

            <Image src={img5} filter={'hue-rotate(-130deg)'} h={["40", "300"]} />
            
            <Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut molestias nostrum labore dolorum, soluta eos dolore est, aliquid nesciunt culpa. Error maiores similique adipisci debitis dolor saepe accusamus officia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut molestias nostrum labore dolorum, soluta eos dolore est, aliquid nesciunt culpa. Error maiores similique adipisci debitis dolor saepe accusamus officia.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ut molestias nostrum labore dolorum, soluta eos dolore est, aliquid nesciunt culpa. Error maiores similique adipisci debitis dolor saepe accusamus officia.
            </Text>
        </Stack>
            
      </Container>
        </Box>
    </div>
  )
}

// carousel -> box

const MyCarousel = () => (
    <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
    >
        <Box w={'full'} h={'100vh'}>
            <Image src={img1} />
            <Heading 
            bgColor={'blackAlpha.600'}
            color={'white'} 
            {...headingOptions} 
            >Watch The Future</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img2} />
            <Heading 
            bgcolor={"BlackAlpha.600"}
            color={'white'}
            {...headingOptions}
            >future is gamming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img3} />
            <Heading 
            bgcolor={"BlackAlpha.600"}
            color={'white'}
            {...headingOptions}
            >Best game means this site</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
            <Image src={img4} />
            <Heading 
            bgcolor={"BlackAlpha.600"}
            color={'white'}
            {...headingOptions}
            >Watch The Future</Heading>
        </Box>
    </Carousel>
)

export default Home
