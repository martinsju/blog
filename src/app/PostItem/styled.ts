import styled from 'styled-components'

export const PostCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  max-width: 100%;
`

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 60%;
`

export const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* Limita o excerpt a 4 linhas */
  text-overflow: ellipsis;
`

export const PostExcerpt = styled.p`
  font-size: 12px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4; /* Limita o excerpt a 4 linhas */
  text-overflow: ellipsis;
`

export const PostImage = styled.div`
  flex: 0 0 40%;
  height: 128.6px;
  position: relative;
  /* border: 1px solid yellow; */

  img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
  }
`
