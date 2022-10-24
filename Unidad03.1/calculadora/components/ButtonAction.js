const ButtonAction = ({ title, btnDiferencia, click }) => {
  const Click = () => {
    click(title);
  };

  const btnDif = {
    Prin: "bg-gray-ios rounded-full w-20 h-20 text-black hover:bg-gray-ios-100 active:bg-gray-ios font-sans text-4xl m-1",
    Num: "bg-grayfull-ios rounded-full w-20 h-20 text-white hover:bg-grayfull-ios-100 active:bg-grayfull-ios font-sans text-4xl m-1",
    Num0: "bg-grayfull-ios rounded-full w-40 h-20 text-white hover:bg-grayfull-ios-100 active:bg-grayfull-ios font-sans text-4xl m-1",
    Ope: "bg-orange-ios rounded-full w-20 h-20 text-white hover:bg-orange-ios-100 active:bg-orange-ios font-sans text-4xl m-1",
  };

  return (
    <div>
      <button className={btnDif[btnDiferencia]} onClick={Click}>
        <p className="p-2">{title}</p>
      </button>
    </div>
  );
};

export default ButtonAction;
