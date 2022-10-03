import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layout'
import { ProjectGithubGridItem } from '../components/grid-item'

const Project = () => (
  <>
    <Layout title="Projects">
      <Container maxW="container.md" pt={20}>
        <Heading
          as="h3"
          my="10"
          textAlign="center"
          borderBottom="2px"
          display="inline-block"
        >
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} spacing="10px">
          <ProjectGithubGridItem
            title="Quiz Game"
            url="https://github.com/et860525/QuizF"
            thumbnail="/images/thumbnail.jpg"
          >
            第一次製作手機遊戲。
          </ProjectGithubGridItem>
          <ProjectGithubGridItem
            title="RSS Picker"
            url="https://github.com/et860525/rss-picker"
            thumbnail="/images/rss-picker.png"
          >
            一個簡單的 RSS Picker。
          </ProjectGithubGridItem>
        </SimpleGrid> 
      </Container>
    </Layout>
  </>
)

export default Project
