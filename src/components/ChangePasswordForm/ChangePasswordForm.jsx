import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const ChangePasswordForm = () => {
  //   const [showPassword, setShowPassword] = useState(false);
  //   const togglePassword = () => setShowPassword(!showPassword);

  //   const [showNewPassword, setShowNewPassword] = useState(false);
  //   const toggleNewPassword = () => setShowNewPassword(!showNewPassword);

  const [passwordVisible, setPasswordVisible] = useState({
    newPassword: false,
    oldPassword: false,
  });

  const togglePassword = (field) => {
    setPasswordVisible((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // --- form state ---
  const {
    register,
    formState: { errors },
    handleSubmit: handleChangePassword,
    reset,
  } = useForm();

  // --- handle signIn form submit ---
  const onChangePasswordSubmit = (data) => {
    console.log("--- data ---", data);
    reset();
  };

  return (
    <form
      className="mt-8"
      onSubmit={handleChangePassword(onChangePasswordSubmit)}
    >
      <div className="flex justify-between gap-5">
        <div>
          <label className="w-full" htmlFor="ondPassword">
            Old Password
          </label>
          <div className="relative mt-2">
            <input
              className="w-full border outline-none pl-2 py-1 pr-8 rounded-md"
              {...register("oldPassword", {
                required: "old password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 characters long",
                },
              })}
              type={passwordVisible.oldPassword ? "text" : "password"}
              id="oldPassword"
              name="oldPassword"
              autoComplete="oldPassword"
            />
            <button
              type="button"
              className="absolute p-1 right-1 top-1 text-[22px] text-[#868585] opacity-45"
              onClick={() => togglePassword("oldPassword")}
            >
              {passwordVisible.oldPassword ? (
                <IoMdEye className="text-[20px]" />
              ) : (
                <IoMdEyeOff className="text-[20px]" />
              )}
            </button>
          </div>
          {/* Error message for old password */}
          {errors.oldPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.oldPassword.message}
            </span>
          )}
        </div>

        <div>
          <label className="w-full" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative mt-2">
            <input
              className="w-full border outline-none pl-2 py-1 pr-8 rounded-md"
              {...register("newPassword", {
                required: "New password is required",
                minLength: {
                  value: 6,
                  message: "At least 6 characters long",
                },
              })}
              type={passwordVisible.newPassword ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              autoComplete="newPassword"
            />
            <button
              type="button"
              className="absolute p-1 right-1 top-1 text-[22px] text-[#868585] opacity-45"
              onClick={() => togglePassword("newPassword")}
            >
              {passwordVisible.newPassword ? (
                <IoMdEye className="text-[20px]" />
              ) : (
                <IoMdEyeOff className="text-[20px]" />
              )}
            </button>
          </div>
          {/* Error message for old password */}
          {errors.newPassword && (
            <span className="text-red-500 text-sm mt-1">
              {errors.newPassword.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button
          type="submit"
          className="px-5 py-[6px] bg-[#3574DD] text-white text-[14px] rounded-md hover:bg-[#2863ca]"
        >
          Change Password
        </button>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
