'use client'

import React from 'react'
import { Container, Description, Title } from './styled'
import { posts } from '@/postsMock'

const Post = ({ params }: { params: { slug: string } }) => {
  const post = posts.find((item) => item.slug === Number(params.slug))

  const hasPostResponse = !!post

  function createMarkup(c: string) {
    return { __html: c }
  }

  return (
    <Container>
      {/* <div>Post: {params.slug}</div> */}
      {hasPostResponse && (
        <>
          <Title>{post?.title}</Title>
          <Description dangerouslySetInnerHTML={createMarkup(post.content)}>
            {/* {post?.articleText} */}
          </Description>
        </>
      )}
    </Container>
  )
}

export default Post
