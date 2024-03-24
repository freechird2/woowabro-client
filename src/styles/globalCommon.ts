import { createGlobalStyle } from "styled-components";

export const GlobalCommon = createGlobalStyle`

.font__notosans{
    font-family: "NotoSansKR";
}
.font__hanna{
    font-family: "Hanna";
    word-spacing: -1px;
    letter-spacing: -0.3px;
}


.ellipsis {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }

 
    .ellipsis2{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 374px) {
      br.responsive {
        display: none;
      }
    }
`;
