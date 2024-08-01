import Button from "./components/common/Button";
import PostBlock from "./components/common/PostBlock";
import Router from "./Router";
import "./styles/App.css";
import { ButtonPrimary, ButtonSecondary } from "./styles/color";
import img1 from "./assets/icon/mockImage.jpg";
import ModalComplete from "./components/common/ModalComplete";
function App() {
  return (
    <>
      <Button
        color={ButtonSecondary}
        text={"기록하기"}
        onClick={() => {
          console.log("버튼 클릭");
        }}
      ></Button>
      <PostBlock
        img={img1}
        textMain={"보고싶은나의햄쥐돌아와줘"}
        textSub={"김멋사"}
        onClick={() => {
          console.log("게시물 클릭");
        }}
      ></PostBlock>
      <ModalComplete
        onCloseClick={() => {
          console.log("닫기 버튼 클릭");
        }}
      ></ModalComplete>
      <Router />
    </>
  );
}

export default App;
