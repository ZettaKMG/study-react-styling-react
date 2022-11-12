// CSS Module 사용 클래스가 1개일 때
// import React from 'react';
// import styles from './CSSModule.module.css';
// const CSSModule = () => {
//     return (
//         <div className={styles.wrapper}>
//             안녕하세요, 저는 <span className="something">CSS Module!</span>
//         </div>
//     );
// };

// export default CSSModule;

// CSS Module 사용 클래스가 2개 이상일 때
import React from 'react';
import styles from './CSSModule.module.css';
const CSSModule = () => {
    return (
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
        </div>
    );
};

export default CSSModule;

// className={`${styles.wrapper} ${styles.inverted}`} ES6 문법 템플릿 리터럴 사용
// className={[styles.wrapper, styles.inverted].join('')} 문법 템플릿 리터럴 미사용