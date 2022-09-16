import {
  Container,
  Box,
  Center,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import Layout from '../components/layout'

const Posts = () => (
  <>
    <Layout>
      <Center>
        <Heading as="h1" size="4xl">
          Posts Page
        </Heading>
      </Center>
    </Layout>
  </>
)

export default Posts
