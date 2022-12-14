import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import theme from '../lib/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
