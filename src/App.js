// 컴포넌트 스타일링
// 스타일링 방식 종류
// 일반 CSS: 가장 기본적인 방식.
// Sass: 확장된 CSS 문법을 사용하여 CSS 코드 작성을 쉽게 할 수 있게끔 하는 것.
// CSS Module: CSS 클래스가 다른 CSS 클래스 이름과 절대 충돌하지 않게끔 파일마다 고유한 이름을 자동으로 생성해주는 옵션.
// styled-components: 스타일을 JS에 내장시키는 방식으로 스타일을 작성함과 동시에 해당 스타일이 적용된 컴포넌트를 만들 수 있게 함.
// 실습의 흐름
// ㄴ 프로젝트 준비 > 일반 CSS 사용 > Sass 사용 > CSS Module 사용 > styled-components 사용
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
