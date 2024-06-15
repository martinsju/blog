'use client'

import Link from 'next/link'
import React from 'react'
import {
  NavBar,
  BlogTitleContainer,
  Title,
  Menu,
  Item,
  PointSpan,
} from './styled'
import { DM_Serif_Display, Junge } from 'next/font/google'

const junge = Junge({
  weight: ['400'],
  subsets: ['latin'],
})

const DMSerifDisplay = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
})

export const NavBarLayout = () => {
  return (
    <NavBar>
      <BlogTitleContainer>
        <Title fontFamily={DMSerifDisplay.style.fontFamily}>
          <Link href='/'>
            Écrivent<PointSpan>.</PointSpan>
          </Link>
        </Title>
        {/* <Description>{`Let the world know what you're thinking.`}</Description> */}
      </BlogTitleContainer>
      <Menu>
        <Item>
          <Link href='/'>Home</Link>
        </Item>
        <Item>
          <Link href='/post'>Posts</Link>
        </Item>
        <Item>
          <Link href='/post'>About us</Link>
        </Item>
        <Item>
          <Link href='/post'>Contact</Link>
        </Item>
      </Menu>
    </NavBar>
  )
}
