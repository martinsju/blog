'use client'

import { posts } from '../postsMock'
import {
  Container,
  MainContent,
  PostItemContainer,
  PostsContainer,
  SectionContainer,
  SectionTitle,
} from './styled'
import PostItem from './PostItem/page'

export default function Home() {
  console.log('carregou a pagina Home')

  return (
    <Container>
      <MainContent>
        {/* <SectionTitle>Últimos posts publicados</SectionTitle> */}
        <PostsContainer>
          {posts.map((post, index) => {
            return (
              <PostItemContainer key={index}>
                <PostItem post={post} />
              </PostItemContainer>
            )
          })}
        </PostsContainer>
      </MainContent>
      <SectionContainer>
        <SectionTitle>Artigos relacionados</SectionTitle>
      </SectionContainer>
    </Container>
  )
}
