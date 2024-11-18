import { Link } from "react-router-dom";

const CommonPage = () => {
  return (
    <div className="wrapper py-20 px-4 xl:px-0">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-[28px] sm:text-[38px] text-gray-700 font-semibold capitalize mt-5 mb-3">
            Secure Your Application !
          </h1>
          <p className="text-[14px] sm:text-[18px] text-gray-700 leading-7">
            <span className="text-[#40C057]">Welcome</span>
          </p>
          <Link to="/sign-in">
            <button className="my-5 bg-[#2FCD71] px-10 py-3 text-white rounded-md">
              Let&apos;s start with Sign In
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CommonPage;
