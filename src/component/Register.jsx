import React, { useState } from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import CustomButton from "./CustomButton";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSolidLock } from "react-icons/bi";
import Select from 'react-select';


const Register = () => {
  const [errMsg, setErrMsg] = useState("");
  const [formType, setFormType] = useState("user");

  const handleRoleChange = (event) => {
    setFormType(event.target.value);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const networkOptions = [
    {value: "Select Network", label: "Select Network"},
    {value: "Facebook", label: "Facebook"},
    {value: "Twitter", label: "Twitter"},
    {value: "Instagram", label: "Instagram"},
    {value: "Youtube", label: "Youtube"},
    {value: "SnapChat", label: "SnapChat"},
    {value: "Tumblr", label: "Tumblr"},
    {value: "Reddit", label: "Reddit"},
    {value: "LinkedIn", label: "LinkedIn"},
    {value: "DeviantArt", label: "DeviantArt"},
  ];
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#f3f3f3", 
      borderColor: state.isFocused ? "#007bff" : "#ccc", // Adjust border color on focus
      "&:hover": {
        borderColor: state.isFocused ? "#007bff" : "#ccc", // Adjust border color on hover
      },
    }),
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div className="w-full flex flex-col mt-5">
          <div className={`text-black text-sm mb-2`}>Choose role</div>
          <div className="flex gap-5 text-xs">
            <div className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                id="user"
                name="role"
                value="user"
                className="cursor-pointer"
                checked={formType === "user"}
                onChange={handleRoleChange}
              />
              <label htmlFor="user" className="cursor-pointer">
                {" "}
                User
              </label>
            </div>
            <div className="flex gap-2 cursor-pointer">
              <input
                type="radio"
                id="community"
                name="role"
                value="community"
                className="cursor-pointer"
                checked={formType === "community"}
                onChange={handleRoleChange}
              />
              <label htmlFor="comminity" className="cursor-pointer">
                {" "}
                comminity owner
              </label>
            </div>
          </div>
        </div>
        {/* Form fields based on selected role */}
        {/* User form fields */}
        {formType === "user" && (
          <div>
            <TextInput
              name="firstName"
              placeholder="First Name"
              type="text"
              register={register("firstName", {
                required: "First Name is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.firstName ? errors.firstName.message : ""}
            />
            <TextInput
              name="lastName"
              placeholder="Last Name"
              type="text"
              register={register("lastName", {
                required: "last Name is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.lastName ? errors.lastName.message : ""}
            />

            <TextInput
              name="email"
              placeholder="Email"
              type="text"
              register={register("email", {
                required: "email is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.email ? errors.email.message : ""}
            />

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
              name="password"
              placeholder="Password"
              type="password"
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
          </div>
        )}
        {formType === "community" && (
          <div>
            <TextInput
              name="firstName"
              placeholder="First Name"
              type="text"
              register={register("firstName", {
                required: "First Name is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.firstName ? errors.firstName.message : ""}
            />
            <TextInput
              name="lastName"
              placeholder="Last Name"
              type="text"
              register={register("lastName", {
                required: "last Name is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.lastName ? errors.lastName.message : ""}
            />
            <TextInput
              name="communityName"
              placeholder="Community Name"
              type="text"
              register={register("communityName", {
                required: "Community Name is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.communityName ? errors.communityName.message : ""}
            />

            <div className="w-full flex flex-col mt-5">
              <label className="text-xs">Community Role/Position</label>
              <textarea
                cols={5}
                className="bg-transparent resize-none border-b border-[#66666690] outline-none text-sm text-black-100 placeholder:text-black placeholder:text-xs"
              ></textarea>
            </div>

            <TextInput
              name="email"
              placeholder="Email"
              type="text"
              register={register("email", {
                required: "email is required",
              })}
              styles="w-full"
              labelStyle=""
              error={errors.email ? errors.email.message : ""}
            />
            <div className="mt-5 text-xs">
              <div>
                <p>LinkedIn or Twitter profile</p>
                <div className="w-full mt-5 mb-10">
                <Select options={networkOptions} className="bg-transparent outline-none"/>
                  
                  <TextInput
                    name="url"
                    placeholder="Enter Url"
                    type="text"
                    register={register("url", {
                      required: "url is required",
                    })}
                    styles="w-full"
                    labelStyle=""
                    error={errors.email ? errors.email.message : ""}
                  />
                </div>
                <div className="py-2 w-full bg-[#D9E3E9] hover:bg-[#e0e8ed]  text-center mt-2 cursor-pointer">
                  Add
                </div>
              </div>
            </div>
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
              name="password"
              placeholder="Password"
              type="password"
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
          </div>
        )}

        <div>
          <CustomButton
            type="submit"
            containerStyles={`inline-flex justify-center rounded-md bg-secondary mt-5 px-8 py-3 text-sm font-medium text-white outline-none w-full`}
            title="Sign In"
            iconLeft={<FaUser />}
          />
        </div>
      </form>
      <p className="text-xs text-neutral-500 py-5">
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our{" "}
        <Link
          to="/privacy-policy"
          className="text-black hover:text-secondary cursor-pointer"
        >
          privacy policy.
        </Link>
      </p>
      <div className="flex justify-between">
        <div className="flex py-3 gap-2">
          <input type="checkbox" name="check" className="text-xs" />
          <p className=" text-xs text-black-100">
            I’ve read and accept the terms & conditions{" "}
            <span className="text-red-700">*</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
