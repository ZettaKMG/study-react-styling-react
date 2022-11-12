// 컴포넌트 스타일링
// 스타일링 방식 종류
// 일반 CSS: 가장 기본적인 방식.
// Sass: 확장된 CSS 문법을 사용하여 CSS 코드 작성을 쉽게 할 수 있게끔 하는 것.
// CSS Module: CSS 클래스가 다른 CSS 클래스 이름과 절대 충돌하지 않게끔 파일마다 고유한 이름을 자동으로 생성해주는 옵션.
// styled-components: 스타일을 JS에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 함.
// 실습의 흐름
// ㄴ 프로젝트 준비 > 일반 CSS 사용 > Sass 사용 > CSS Module 사용 > styled-components 사용

// 가장 흔한 방식, 일반 CSS
// CSS 클래스를 중복되지 않게 만드는 것이 가장 중요!
// ㄴ 이름을 지을 때 특별한 규칙 사용
// ㄴ CSS Selector 활용

// 이름 짓는 규칙
// 예시
// BEM 네이밍: 이름 지을 때 해당 클래스가 어디에서 어떤 용도로 사용되는지 명확하게 작성하는 방식
// ㄴ .card__title-primary

// CSS Selector
// 예시
// .App .logo {
//   animation: App-logo-spin infinite 20s linear;
//   height: 40vmin;
// }

// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <img src={logo} className="logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a            
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// SassComponent 렌더링
// import React, {Component} from 'react';
// import SassComponent from './SassComponent';

// class App extends Component {
//   render() {
//     return (
//       <>
//         <SassComponent />
//       </>
//     );
//   }
// }

// export default App;

// CSSModule 렌더링
import React, {Component} from 'react';
import CSSModule from './CSSModule';

class App extends Component {
  render() {
    return (
      <>
        <CSSModule />
      </>
    );
  }
}

export default App;