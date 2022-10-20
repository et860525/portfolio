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
          <ProjectGithubGridItem
            title="Express Project Architecture"
            url="https://github.com/et860525/express-project-architecture"
            thumbnail="/images/express-project.png"
          >
            紀錄 express
            的專案架構方式，檔案分類的方式是依照，程式的工作類型與服務的對象進行分類，並使用物件導向的方式來做設計，依照
            MVC 的思維來建構，並逐步修改其中不足的地方。
          </ProjectGithubGridItem>
          <ProjectGithubGridItem
            title="My Graduation Project"
            url="https://github.com/et860525/Graduation-Project"
            thumbnail="/images/graduation-project.png"
          >
            利用 Python 製作爬蟲來抓取 Yahoo Finance
            的股票資料，只要輸入股票名稱或是 symbols。
          </ProjectGithubGridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  </>
)

export default Project
