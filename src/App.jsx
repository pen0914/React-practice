import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert();

  return (
    <>
      {/*HTML内に直接CSSを書く場合.. 
        Javascriptの{}
        オブジェクト記述のための{}
        二重{}で記述
      */}
      <h1 style={{ color: "red" }}>potato</h1>

      {/*コンポーネント先にpropsで渡す場合..
        1  <コンポーネント変数　カテゴリー="" />
        2  <コンポーネント変数　カテゴリー="">
           表示したい文字
           </コンポーネント変数>
           ->コンポーネント先でprops.childrenにする
       */}
      <ColorfulMessage color="green">I'am</ColorfulMessage>
      <ColorfulMessage color="pink">I like potato</ColorfulMessage>

      {/*別に変数でCSSを書く場合.. 
        Javascriptの{}
        中に変数を記入
      */}
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
