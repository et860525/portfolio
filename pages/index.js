import {
  Container,
  Box,
  Button,
  Heading,
  Text,
  Link,
  List,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../components/layout'
import Paragraph from '../components/paragraph'
import { SiGmail, SiInstagram, SiGithub } from 'react-icons/si'

const Home = () => {
  const color = useColorModeValue('rgba(0,0,0,85%)', '#ffffff')
  return (
    <>
      <Layout title="Homepage">
        <Container maxW="container.md" pt={20} color={color}>
          <Box textAlign="center" my="5">
            <Heading as="h1" size="4xl" py="5">
              Hello
            </Heading>
            <Box
              border="1px"
              w="50%"
              p="4"
              my="8"
              letterSpacing="2px"
              mx="auto"
              borderRadius="lg"
            >
              Welcome my website
            </Box>
            <Box
              display={{ md: 'flex' }}
              justifyContent="center"
              alignItems="center"
              my="10"
            >
              <Image
                width="100px"
                height="100px"
                src="/images/Mango.png"
                alt="Mango Profile image"
              />
              <Box display="flex" flexDirection="column">
                <Heading as="h2" size="md">
                  Yu Fan Chen
                </Heading>
                <Text>Backend developer / Taiwanese</Text>
              </Box>
            </Box>
          </Box>
          <section>
            <Box p={2} w={'60%'} mx={'auto'}>
              <Heading
                as="h3"
                textAlign="left"
                mb="5"
                borderBottom="2px"
                display="inline-block"
              >
                Me
              </Heading>
              <Paragraph>
                我是一名應屆畢業生，目標是後端工程師，住在台灣高雄。 我喜歡用
                Code 來解決現實生活中的很多問題。
              </Paragraph>
            </Box>
            <Box p={2} w={'60%'} mx={'auto'}>
              <Paragraph>
                I'm a fresh graduate, aiming for a backend engineer, living in
                Kaohsiung, Taiwan. I like to use code to solve many problems in
                real-life.
              </Paragraph>
            </Box>
          </section>

          <section>
            <Box p={2} w={'60%'} mx={'auto'} my={5}>
              <Heading
                as="h3"
                textAlign="left"
                mb={5}
                borderBottom="2px"
                display="inline-block"
              >
                On the web
              </Heading>
              <List>
                <ListItem>
                  <Link href="https://github.com/et860525" target="_blank">
                    <Button variant="ghost" leftIcon={<SiGithub />}>
                      @et860525
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://www.instagram.com/mango70225/"
                    target="_blank"
                  >
                    <Button variant="ghost" leftIcon={<SiInstagram />}>
                      @mango70225
                    </Button>
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&source=mailto&to=et860525@gmail.com"
                    target="_blank"
                  >
                    <Button variant="ghost" leftIcon={<SiGmail />}>
                      et860525@gmail.com
                    </Button>
                  </Link>
                </ListItem>
              </List>
            </Box>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
