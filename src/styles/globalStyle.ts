'use client'
import ImgBackground from '@assets/image/background.png'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`



/***
새로운 CSS 리셋 - 버전 1.8.5 (마지막 업데이트: 2023년 6월 14일)
GitHub 페이지: https://github.com/elad2412/the-new-css-reset
***/

/*
"User-Agent-Stylesheet"의 모든 스타일을 'display' 속성을 제외하고 제거합니다.
- "symbol *" 부분은 Firefox SVG 스프라이트 버그를 해결하기 위한 것입니다.
- "html" 속성은 CSS 하이픈 속성이 깨지는 Chrome 버그를 방지하기 위해 제외됩니다. (https://github.com/elad2412/the-new-css-reset/issues/36)
*/
*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
all: unset;
display: revert;
}

/* 기본 box-sizing 값 적용 */
/* 기본 font-family 값 적용 */
/* 기본 font-size 값 적용 */
*,
*::before,
*::after {
    box-sizing: border-box;
    font-size: 1.4rem;
    font-family: var(--font_family_default);
    color: ${(p) => p.theme.colors.default};
}

/* 앵커 태그에 대한 포인터 커서 재적용 */
a, button {
cursor: revert;
}

/* 목록 스타일 (글머리 기호/번호) 제거 */
ol, ul, menu {
list-style: none;
}

/* 이미지가 컨테이너를 초과하지 못하도록 설정 */
img {
display: block;
max-inline-size: 100%;
max-block-size: 100%;
}

/* 테이블 셀 사이의 간격 제거 */
table {
border-collapse: collapse;
}

/* Safari - <body> 텍스트 입력란에서 user-select:none 사용 시 문제 해결 */
input, textarea {
-webkit-user-select: auto;
}

/* Safari에서 textarea 요소의 'white-space' 속성 복원 */
textarea {
white-space: revert;
}

/* meter 요소에 스타일을 적용하기 위한 최소한의 스타일 지정 */
meter {
-webkit-appearance: revert;
appearance: revert;
}

/* 서식 있는 텍스트(pre)에만 사용하는 기능을 위해 모든 스타일 복원 */
:where(pre) {
all :revert ;
}

/* 입력 플레이스홀더의 기본 텍스트 불투명도 복원*/
::placeholder{
color :unset ;
}

/* 기본 도트(•) 표시 삭제*/
::marker{
content :initial ;
}

/* 'hidden' 속성 오류 수정.
display :revert;속성으로 요소로 되돌림.*/
:where([hidden]){
display:none ;
}

/* 크로미움 브라우저에서 발생하는 버그 복구

contenteditable 속성 정상 작동되도록 수정
Safari에서 user-select:none 사용 시 wrapper 요소에 대해 webkit-user-select:auto; 추가*/ :where([contenteditable]:not([contenteditable="false"])){ -moz-user-modify :read-write ; -webkit-user-modify :read-write ; overflow-wrap :break-word ; -webkit-line-break-after-white-space:true ; webkit-user-select:auto ; }
/* 드래그 가능한 기능 다시 적용- 크로미움 및 Safari 전용*/
:where([draggable="true"]) {
    -webkit-user-drag: element;
}

/* Modal 네이티브 동작 복원*/
:where(dialog:modal) {
    all: revert;
}

/* 크롬에서 input 자동완성 백그라운드 색 제거 */
input:-webkit-autofill {
	-webkit-box-shadow: 0 0 0 1000px #EDE4CE inset;
	box-shadow: 0 0 0 1000px #EDE4CE inset;
}


html{
    height: 100%;
    font-size: 62.5%;
    scrollbar-gutter: stable;
    background-image: url(${ImgBackground});
    background-position: center;
  background-repeat: repeat;
  
}
body{
    margin: 0;
    padding: 0;
    scrollbar-gutter: stable;
  
    
  
}
#root{
    display: flex;
    flex-direction: column;
  
}


`
