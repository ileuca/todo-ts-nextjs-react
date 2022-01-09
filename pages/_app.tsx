import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import bg from '/public/todobackground.jpg'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Box style = {{height:"100vh"}} backgroundImage={bg.src} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize='cover'>
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </Box>
  )
}

export default MyApp
