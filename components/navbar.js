import NextLink from 'next/link'
import {
  Container,
  Link,
  Box,
  Flex,
  Stack,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from '../components/theme-toggle-button'

const LinkItem = ({ href, children }) => {
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link p={2}>{children}</Link>
    </NextLink>
  )
}

const Navbar = () => {
  const bg_color = useColorModeValue('orange.100', '#373737')
  return (
    <Box position="fixed" as="nav" w="100%" bg={bg_color} zIndex="100">
      <Container
        display="flex"
        maxW="container.md"
        p={2}
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={6}>
          <Heading as="h1" size="lg">
            <NextLink href="/" passHref>
              <a>Mango</a>
            </NextLink>
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
        >
          <ThemeToggleButton />
          <LinkItem href="/">About Me</LinkItem>
          <LinkItem href="/projects">Project</LinkItem>
        </Stack>

        <Box
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <ThemeToggleButton />
          <Menu isLazy>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              ml="5"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <NextLink href="/" passHref>
                <MenuItem as={Link}>About Me</MenuItem>
              </NextLink>
              <NextLink href="/projects" passHref>
                <MenuItem as={Link}>Project</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
