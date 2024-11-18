import { useForm } from "react-hook-form";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";

const UserInfoUpdateForm = () => {
  // --- form state ---
  const {
    register,
    formState: { errors },
    handleSubmit: handleUserInfoSubmit,
    reset,
  } = useForm();

  // --- handle signIn form submit ---
  const onUserInfoSubmit = (data) => {
    console.log("User Info Data: ", data);
    reset();
  };

  return (
    <div className="px-5 py-5">
      <form onSubmit={handleUserInfoSubmit(onUserInfoSubmit)}>
        <div className="flex items-center">
          <label className="w-full" htmlFor="name">
            User Name
          </label>
          <div className="w-full">
            <input
              className={`w-full border outline-[#2ECC71] px-2 py-1 rounded-md ${
                errors.userName ? "border-red-500" : ""
              }`}
              {...register("userName", {
                required: "User name is required",
              })}
              type="text"
              id="userName"
              name="userName"
              defaultValue="Piyash"
              autoComplete="userName"
            />
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <label className="w-full" htmlFor="fullName">
            Full Name
          </label>
          <div className="w-full">
            <input
              className={`w-full border outline-[#2ECC71] px-2 py-1 rounded-md ${
                errors.fullName ? "border-red-500" : ""
              }`}
              {...register("fullName", {
                required: "Full is required",
              })}
              type="text"
              id="fullName"
              name="fullName"
              defaultValue="Piyash Hasan"
              autoComplete="fullName"
            />
            {/* Error message for email */}
            {errors.fullName && (
              <span className="text-red-500 text-sm mt-1">
                {errors.fullName.message}
              </span>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex items-center justify-between">
          <label className="w-full" htmlFor="email">
            Email
          </label>
          <div className="w-full">
            <input
              className={`w-full border outline-[#2ECC71] px-2 py-1 rounded-md ${
                errors.email ? "border-red-500" : ""
              }`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              type="email"
              id="email"
              name="email"
              defaultValue="piyashhasan38@gmail.com"
              autoComplete="email"
            />
            {/* Error message for email */}
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-[6px] bg-[#39b9b5] text-white text-[14px] rounded-md hover:bg-[#249490]"
          >
            Save Changes
          </button>
        </div>
      </form>
      {/* --- change password filed start --- */}
      <ChangePasswordForm />
      {/* --- change password filed start --- */}
    </div>
  );
};

export default UserInfoUpdateForm;
