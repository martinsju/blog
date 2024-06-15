import React from 'react'
import Image from 'next/image'
import { PostInterface } from '@/postsMock'
import { PostCard, PostExcerpt, PostImage, PostInfo, PostTitle } from './styled'
import Link from 'next/link'

interface PostItemProps {
  post: PostInterface
}

function PostItem(props: PostItemProps) {
  return (
    <Link href={`/${props.post.slug}`}>
      <PostCard>
        <PostInfo>
          <PostTitle>{props.post.title}</PostTitle>
          <PostExcerpt>{props.post.excerpt}</PostExcerpt>
        </PostInfo>
        <PostImage>
          <Image
            src={props.post.imgUrl}
            fill={true}
            style={{ objectFit: 'cover' }}
            // width={180}
            // height={180}
            alt={props.post.title}
            priority={true}
          />
        </PostImage>
      </PostCard>
    </Link>
  )
}

export default PostItem
