const Shape = (props) => {
  return (
    <div className='shape flex flex-col ai-center'>
      <div className='triangle'></div>
      <div className='tooltip-text'>{props.children}</div>
    </div>
  );
};
export default Shape;
