import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Presentation = styled.section`
  width: 100%;
  min-height: calc(90vh - 150px);
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
  }
`

export const Content = styled.section`
  width: 100%;
  max-width: 605px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > .subtitle {
    padding-bottom: 2rem;
  }
`
