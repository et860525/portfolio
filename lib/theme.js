import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: (props) => ({
    body: {
      bg: mode('#FFFAF0', '#121212')(props),
    },
  }),
}

const fonts = {
  heading: "'Noto Sans TC'",
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles, fonts })

export default theme
