/*eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  //1つ目にstateの変数名,2つ目にstateを更新していく関数名
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  //手前に!を付けるとtrue,falseの逆を示す
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ;∀;)</p>}
    </>
  );
};

export default App;
