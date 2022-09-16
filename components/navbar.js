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
  return (
    <Box
      position="relative"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f7f2e6', '#002b36')}
    >
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
          <LinkItem href="/project">Project</LinkItem>
          <LinkItem href="/posts">Posts</LinkItem>
        </Stack>

        <Box
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'flex', md: 'none' }}
        >
          <ThemeToggleButton />
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              ml="5"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <NextLink href="/project" passHref>
                <MenuItem as={Link}>Project</MenuItem>
              </NextLink>
              <NextLink href="/posts" passHref>
                <MenuItem as={Link}>Posts</MenuItem>
              </NextLink>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
