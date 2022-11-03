import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  input {
    visibility: hidden;
    position: absolute;
    left: -9999px;

    & + label {
      cursor: pointer;
      width: 40px;
      height: 20px;
      display: block;
      border-radius: 20px;
      background: var(--input-language-bg);
      position: relative;

      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: var(--input-language-dot);
        transition: transform 0.2s ease;
      }
    }

    &:checked + label::before {
      transform: translateX(20px);
    }
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: var(--text-color);
  text-transform: uppercase;
  padding: 0.5rem;
`;
