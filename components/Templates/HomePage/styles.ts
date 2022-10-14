import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .presentation {
    width: 100%;
    min-height: calc(90vh - 150px);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: 1fr auto;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    > .content {
      width: 100%;
      max-width: 605px;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      > h2 {
        margin-bottom: 2rem;
      }
    }
  }
`
