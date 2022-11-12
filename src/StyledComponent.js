// styled-components
// import React from 'react';
// import styled, {css} from 'styled-components';

// const sizes = {
//     desktop: 1024,
//     tablet: 768
// };
  
// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
// const media = Object.keys(sizes).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (max-width: ${sizes[label] / 16}em) {
//       ${css(...args)};
//     }
//   `;
  
//   return acc;
// }, {});

// const Box = styled.div`
//     /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
//     background: ${props => props.color || 'blue'};
//     padding: 1rem;
//     display: flex;
//     width: 1024px;
//     margin: 0 auto;
//     ${media.desktop`width: 768px;`}
//     ${media.tablet`width: 100%;`};
// `;

// const Button = styled.button`
//     background: white;
//     color: black;
//     border-radius: 4px;
//     padding: 0.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     box-sizing: border-box;
//     font-size: 1rem;
//     font-weight: 600;

//     /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
//     &:hover {
//         background: rgba(255, 255, 255, 0.9);
//     }

//     /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해줍니다. */
//     ${props => 
//       props.inverted && 
//       css`
//         background: none;
//         border: 2px solid white;
//         color: white;
//         &:hover {
//             background: white;
//             color: black;
//         }
//       `};
//     & + button {
//         margin-left: 1rem;
//     }    
// `;

// const StyledComponent = () => (
//     <Box color="black">
//         <Button>안녕하세요</Button>
//         <Button inverted={true}>테두리만</Button>
//     </Box>    
// );

// export default StyledComponent;

// 스타일링된 엘리먼트 만들기
// 예시 코드(styled.태그명)
// 컴포넌트 파일 상단에서
// import styled from 'styled-components';

// const MyComponent = styled.div`
//     font-size: 2rem;
// `;

// 사용할 태그명이 유동적이거나 특정 컴포넌트 자체에 스타일링 해주고 싶을 때?
// 예시 코드
// // 태그의 타입을 styled 함수의 인자로 전달
// const MyInput = styled('input')`
//     background: gray;
// `
// // 아예 컴포넌트 형식의 값을 넣어 줌
// const StyledLink = styled(Link)`
//     color: blue;
// `

// 스타일에서 props 조회하기
// props에 따른 조건부 스타일링
// import React from 'react';
// import styled, {css} from 'styled-components';
// /* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 합니다. */

// const sizes = {
//     desktop: 1024,
//     tablet: 768
// };

// const media = Object.keys(sizes).reduce((acc, label) => {
//     acc[label] = (...args) => css`
//       @media (max-width: ${sizes[label] / 16}em) {
//         ${css(...args)};
//       }
//     `;
    
//     return acc;
//   }, {});
  
//   const Box = styled.div`
//       /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
//       background: ${props => props.color || 'blue'};
//       padding: 1rem;
//       display: flex;
//       width: 1024px;
//       margin: 0 auto;
//       ${media.desktop`width: 768px;`}
//       ${media.tablet`width: 100%;`};
//   `;
  
//   const Button = styled.button`
//       background: white;
//       color: black;
//       border-radius: 4px;
//       padding: 0.5rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-sizing: border-box;
//       font-size: 1rem;
//       font-weight: 600;
  
//       /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
//       &:hover {
//           background: rgba(255, 255, 255, 0.9);
//       }
  
//       /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해줍니다. */
//       ${props => 
//         props.inverted && 
//         css`
//           background: none;
//           border: 2px solid white;
//           color: white;
//           &:hover {
//               background: white;
//               color: black;
//           }
//         `};
//       & + button {
//           margin-left: 1rem;
//       }    
//   `;
  
//   const StyledComponent = () => (
//       <Box color="black">
//           <Button>안녕하세요</Button>
//           <Button inverted={true}>테두리만</Button>
//       </Box>    
//   );
  
//   export default StyledComponent;

// 반응형 디자인
// 브라우저 가로 크기에 따라 다른 스타일 적용
// ㄴ 일반 CSS 사용 때처럼 media 쿼리 사용!
// import React from 'react';
// import styled, {css} from 'styled-components';
// /* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 합니다. */

// const sizes = {
//     desktop: 1024,
//     tablet: 768
// };

// const media = Object.keys(sizes).reduce((acc, label) => {
//     acc[label] = (...args) => css`
//       @media (max-width: ${sizes[label] / 16}em) {
//         ${css(...args)};
//       }
//     `;
    
//     return acc;
//   }, {});
  
//   const Box = styled.div`
//       /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
//       background: ${props => props.color || 'blue'};
//       padding: 1rem;
//       display: flex;
//       /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
//         가로 크기가 작아짐에 따라 크기를 줄이고
//         768px 미만이 되면 꽉 채웁니다. */
//       width: 1024px;
//       margin: 0 auto;
//       @media (max-width: 1024px) {
//         width: 768px;
//       }
//       @media (max-width: 768px) {
//         width: 100%;
//       }
//   `;
  
//   const Button = styled.button`
//       background: white;
//       color: black;
//       border-radius: 4px;
//       padding: 0.5rem;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-sizing: border-box;
//       font-size: 1rem;
//       font-weight: 600;
  
//       /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
//       &:hover {
//           background: rgba(255, 255, 255, 0.9);
//       }
  
//       /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해줍니다. */
//       ${props => 
//         props.inverted && 
//         css`
//           background: none;
//           border: 2px solid white;
//           color: white;
//           &:hover {
//               background: white;
//               color: black;
//           }
//         `};
//       & + button {
//           margin-left: 1rem;
//       }    
//   `;
  
//   const StyledComponent = () => (
//       <Box color="black">
//           <Button>안녕하세요</Button>
//           <Button inverted={true}>테두리만</Button>
//       </Box>    
//   );
  
//   export default StyledComponent;

// 여러 컴포넌트에서 이 작업을 반복한다면?
// 작업을 함수화하면 간편해진다.
// styled-components 메뉴얼에서 제공하는 유틸 함수 사용
// 예시
import React from 'react';
import styled, {css} from 'styled-components';
/* 단순 변수의 형태가 아니라 여러 줄의 스타일 구문을 조건부로 설정해야 하는 경우에는 css를 불러와야 합니다. */

const sizes = {
    desktop: 1024,
    tablet: 768
};

// 위에있는 size 객체에 따라 자동으로 media 쿼리 함수를 만들어줍니다.
// 참고: https://www.styled-components.com/docs/advanced#media-templates
const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
    
    return acc;
  }, {});
  
  const Box = styled.div`
      /* props로 넣어 준 값을 직접 전달해 줄 수 있습니다. */
      background: ${props => props.color || 'blue'};
      padding: 1rem;
      display: flex;
      /* 기본적으로는 가로 크기 1024px에 가운데 정렬을 하고
        가로 크기가 작아짐에 따라 크기를 줄이고
        768px 미만이 되면 꽉 채웁니다. */
      width: 1024px;
      margin: 0 auto;
      ${media.desktop`width: 768px`}
      ${media.tablet`width: 100%`};
  `;
  
  const Button = styled.button`
      background: white;
      color: black;
      border-radius: 4px;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-size: 1rem;
      font-weight: 600;
  
      /* & 문자를 사용하여 Sass처럼 자기 자신 선택 가능 */
      &:hover {
          background: rgba(255, 255, 255, 0.9);
      }
  
      /* 다음 코드는 inverted 값이 true일 때 특정 스타일을 부여해줍니다. */
      ${props => 
        props.inverted && 
        css`
          background: none;
          border: 2px solid white;
          color: white;
          &:hover {
              background: white;
              color: black;
          }
        `};
      & + button {
          margin-left: 1rem;
      }    
  `;
  
  const StyledComponent = () => (
      <Box color="black">
          <Button>안녕하세요</Button>
          <Button inverted={true}>테두리만</Button>
      </Box>    
  );
  
  export default StyledComponent;