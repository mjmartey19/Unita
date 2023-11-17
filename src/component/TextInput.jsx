import React from "react";

const TextInput = React.forwardRef(
  (
    { type, placeholder, styles, label, labelStyles, register, name, error },
    ref
  ) => {
    return (
      <div className='w-full flex flex-col mt-2'>
        {label && (
          <p className={`text-black text-sm mb-2 ${labelStyles}`}>{label}</p>
        )}

        <div>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            ref={ref}
            className={`bg-transparent border-b border-[#66666690] outline-none text-sm text-black-100  py-3 placeholder:text-black placeholder:text-xs ${styles}`}
            {...register}
            aria-invalid={error ? "true" : "false"}
          />
        </div>
        {error && (
          <span className='text-xs text-[#f64949fe] mt-0.5 '>{error}</span>
        )}
      </div>
    );
  }
);

export default TextInput;
