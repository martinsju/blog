import styled from 'styled-components'

export const Container = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  margin: 0 auto;
  width: 90vw;
`

export const MainContent = styled.main`
  /* border: 1px solid red; */
  max-width: 50%;
`

export const PostsContainer = styled.section`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
`

export const PostItemContainer = styled.li`
  /* display: flex; */
  /* flex-direction: row; */
  justify-content: space-between;
  list-style: inside;
  list-style-type: none;
  margin: 0;
  padding: 25px;
  box-shadow: -5.8px -5.3px 9.9px rgba(0, 0, 0, -0.002),
    -6.9px -6.4px 16px rgba(0, 0, 0, 0.005),
    -3.2px -2.9px 26.7px rgba(0, 0, 0, 0.01), 27px 25px 78px rgba(0, 0, 0, 0.02);
  box-shadow: 0px 10px 40px -20px rgba(24, 24, 25, 0.1);
  border-radius: 0.5rem;
  background-color: #fff;
`

export const SectionContainer = styled.section`
  width: fit-content;
  min-width: 30%;
`

export const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 25px;
`
