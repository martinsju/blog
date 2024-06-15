import styled from 'styled-components'

interface TextProps {
  fontFamily: string
}

export const Header = styled.header``

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 100%;
  padding: 1rem 2rem;
  margin: 0 auto;

  position: fixed;
  top: 0;
  z-index: 1000;

  box-sizing: border-box;
  background-color: #fff;
  /* border: 1px solid fuchsia; */
`

export const BlogTitleContainer = styled.div``

export const Title = styled.h1<TextProps>`
  font-size: 32px;
  font-family: ${({ fontFamily }) => fontFamily};

  &:hover span {
    transition: 300ms;
    color: tomato;
  }
`

export const PointSpan = styled.span``

export const Description = styled.p`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`

export const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 1rem;

  list-style: inside;
  list-style-type: none;

  font-size: 14px;
`

export const Item = styled.li`
  /* a {
    transition: --offset 300ms, text-decoration 300ms;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    --offset: 0.4em;
    transform: translate3d(0, 0, 0);
  } */

  a {
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: tomato;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;

    opacity: 1;
    transform: scale(0);
    transform-origin: center;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
    transform: scale(1);
  }
`
