import styled from "styled-components";

export const StyledLink = styled.a`
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;

  > span {
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    display: block;
    border-radius: 2px;
    background: var(--primary-color);
  }
`;

// export const Container = styled(Link)``
//   border: 1px dashed orangered;
//   background: turquoise;

//   a {
//     font-size: 1.5rem;
//     text-decoration: none;
//     position: relative;

//     &::before {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 4px;
//       display: block;
//       border-radius: 2px;
//       background: orangered;
//     }
//   }
// `;
