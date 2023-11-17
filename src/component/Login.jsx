import React, { useState } from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";

const Login = () => {
  const [errMsg, setErrMsg] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <TextInput
          name="username"
          placeholder="Username"
          type="text"
          register={register("username", {
            required: "username is required",
          })}
          styles="w-full"
          labelStyle=""
          error={errors.username ? errors.username.message : ""}
        />
        <TextInput
          name="username"
          placeholder="Password"
          type="text"
          register={register("password", {
            required: "password is required",
          })}
          styles="w-full"
          labelStyle=""
          error={errors.password ? errors.password.message : ""}
        />

        {errMsg?.message && (
          <span
            className={`text-sm ${
              errMsg?.status == "failed"
                ? "text-[#f64949fe]"
                : "text-[#2ba150fe]"
            } mt-0.5`}
          >
            {errMsg?.message}
          </span>
        )}

        <CustomButton
          type="submit"
          containerStyles={`inline-flex justify-center rounded-md bg-secondary mt-5 px-8 py-3 text-sm font-medium text-white outline-none w-full`}
          title="Sign In"
          iconLeft={<FaUser />}
        />
      </form>
      <div className="flex justify-between">
        <div className="flex py-4 gap-2">
          <input type="checkbox" name="check" className="text-xs" />
          <span className=" text-sm text-black-100">Remember me</span>
        </div>
        <Link to='/reset-password' className="flex gap-2 items-center text-xs">
          <BiSolidLock />
          <span>Forget password?</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
