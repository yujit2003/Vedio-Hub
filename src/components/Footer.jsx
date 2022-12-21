import { Box, Stack, VStack, Heading, HStack,Button, Input,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import { FaYoutube,FaInstagram,FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color="white" p="16" minH={'40'}>
        <Stack direction={['column', 'row']}>
            <VStack w= {'full'} alignItems={'stretch'}>
                <Heading size="md" text-transform={'uppercase'}>
                    Subscribe for amazing vedios
                </Heading>
                <HStack
                borderBottom={'2px solid white'}
                borderLeft={'2px soild white'}
                borderRight={'2px solid white'}
                >
                    <Input placeholder='Enter your E-Mail...' border={'none'} focusBorderColor={'none'}/>
                    <Button
                    p={'0'}
                    colorScheme={'purple'}
                    variant={'ghost'}
                    borderRadius={'0 20px 20px 0'}
                    >
                        <AiOutlineSend />
                    </Button>
                </HStack>

                </VStack>
                <VStack
                w={'full'}
                borderLeft={'2px soild white'}
                borderRight={'2px solid white'}
                >
                    <Heading color={'white'} size={'md'}>
                        VEDIO HUB  |  YUJIT
                    </Heading>
                    <Text>All Rights Reserved </Text>
            </VStack>
                    <VStack
                    w={'full'}
                    borderLeft={'2px soild white'}
                    borderRight={'2px solid white'}
                    >
                    <Text color={'white'}><FaYoutube /></Text>
                    <Text color={'white'}><FaInstagram /></Text>
                    <Text color={'white'}><FaWhatsapp /> </Text>
                    <Text color={'white'}>Connect With Us ❤️❤️ </Text>
                    </VStack>
        </Stack>
    </Box>
  )
}

export default Footer
