import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .presentation {
    width: 100%;
    min-height: calc(90vh - 150px);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    justify-content: center;
    align-items: center;

    > article {
      width: 100%;
      max-width: 575px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h2 {
        margin-bottom: 2rem;
      }
    }
  }
`

export const About = styled.section`
  display: grid;
  gap: 1.2rem;
  padding: 5rem 0 2rem;
`
