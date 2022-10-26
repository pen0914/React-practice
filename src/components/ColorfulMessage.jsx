export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    //CSSのプロパティとカテゴリー名が同じ時、省略可
    color,
    fontsize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
