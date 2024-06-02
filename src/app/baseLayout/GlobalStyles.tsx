import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
${reset} 
  a {
    text-decoration: none;
    color: inherit;
  }
  * {
    box-sizing: border-box;
  }
  body {
  }
  input, textarea { 
    -moz-user-select: auto;
    -webkit-user-select: auto;
    -ms-user-select: auto;
    user-select: auto;
    border: 1px solid black;
  }
  input:focus {
    outline: none;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
  }

  ul, ol {
    list-style: none; /* 리스트 스타일 제거 */
    padding: 0; /* 리스트 내부 패딩 제거 */
    margin: 0; /* 리스트 외부 마진 제거 */
  }
`;

export default GlobalStyles;
