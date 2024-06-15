import { createGlobalStyle } from 'styled-components'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
})

// const openSans = Open_Sans({
//   weight: ['400', '700', '800'],
//   subsets: ['latin'],
// })

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0 auto;
    margin-top: 5rem;
    padding-top: 3rem;

    background-color: #fafafa;

    font-family: ${openSans.style.fontFamily}, sans-serif;
    color: #070707;

    /* Adiciona uma margem direita para reservar espaço para o scroll */
    /* margin-right: calc(100vw - 100%); */
    /* Garante que a barra de rolagem esteja sempre visível */
    /* overflow-y: scroll; */
  }

  /** Reseta estilos de textos */
  h1,
  h2,
  h3,
  h4,
  h5,
  span,
  p {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: #070707;
  }

  /** Scrollbar */

  /* Para navegadores WebKit (Google Chrome, Safari) */
  ::-webkit-scrollbar {
    /* largura do scrollbar */
    /* width: 6px;  */
  }

  ::-webkit-scrollbar-track {
    /* cor de fundo da track (trilha) */
    /* background: #f1f1f1;  */
  }

  ::-webkit-scrollbar-thumb {
    /* cor do thumb (barra) */
    /* background: #9d9c9c;  */
  }

  ::-webkit-scrollbar-thumb:hover {
    /* cor do thumb (barra) ao passar o mouse por cima */
    /* background: #555;  */
  }

  /* Para navegadores baseados no Mozilla (Firefox) */
  html {
    /* especifica a largura do scrollbar */
    /* scrollbar-width: thin;  */
    /* cor do thumb (barra) e da track (trilha) */
    /* scrollbar-color: #9d9c9c #f1f1f1;  */
  }

  button {
    background-color: #cce5ff;
  }
`

export default GlobalStyles
