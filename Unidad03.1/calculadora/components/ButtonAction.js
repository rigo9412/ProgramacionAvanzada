const ButtonAction = ({ title, background, wh, color, hover }) => {
  return (
    <div>
      <button
        className={`m-1 rounded-full ${background} ${wh} ${color} font-sans text-2xl ${hover}`}
      >
        <p className="p-2">{title}</p>
      </button>
    </div>
  );
};

export default ButtonAction;
