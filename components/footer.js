import { Container, Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      borderTop="1px"
      w="100%"
      mt="25"
      textAlign="center"
      opacity={0.4}
      fontSize="sm"
    >
      &copy; {new Date().getFullYear()} Mango
    </Box>
  )
}

export default Footer
