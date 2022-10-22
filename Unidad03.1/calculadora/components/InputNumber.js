const InputNumber = ({ background, color, wh }) => {
  return (
    <div>
      <input
        readOnly
        className={`${background} ${color} ${wh} font-sans text-2xl mt-60`}
      ></input>
    </div>
  );
};

export default InputNumber;
