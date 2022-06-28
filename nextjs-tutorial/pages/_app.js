import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/component/Footer";
import Top from "../src/component/Top";

function MyApp({ Component, pageProps }) {
    return (
        <div style={{ width: 1000, margin: "0 auto" }}>
            <Top />
            <Component {...pageProps} />
            <Footer />
        </div>
    );
}

export default MyApp;

/**
 * _app.js의 역할
 * 1. 페이지 전환시 레이아웃을 유지 할 수 있음
 * 2. 페이지 전환시 상태 값을 유지 할 수 있음
 * 3. componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있음
 * 4. 추가적인 데이터를 페이지로 주입 가능
 * 5. 글로벌 CSS를 이곳에서 선언
 */