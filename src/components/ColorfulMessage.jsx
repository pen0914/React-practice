const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontsize: "18px"
  };

  return <p style={contentStyle}>{props.children}</p>;
};

export default ColorfulMessage;
