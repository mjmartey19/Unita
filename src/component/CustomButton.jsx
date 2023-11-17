const CustomButton = ({ title, containerStyles, iconLeft, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type || "button"}
      className={`inline-flex items-center text-xs ${containerStyles}`}
    >
    {iconLeft && <div className='mr-2'>{iconLeft}</div>}
      {title}

      
    </button>
  );
};

export default CustomButton;
