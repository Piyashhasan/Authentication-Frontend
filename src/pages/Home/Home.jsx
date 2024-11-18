import { LuCamera } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import UserInfoUpdateForm from "../../components/UserInfoUpdateForm/UserInfoUpdateForm";
import landScapeImg from "../../assets/images/landscape.jpg";
import { useState } from "react";
import { Dialog } from "primereact/dialog";
import ChangeAvatar from "../../components/ChangeAvatar/ChangeAvatar";
import notFoundImg from "../../assets/images/not-found.webp";
import ChangeCoverImg from "../../components/ChangeCoverImg/ChangeCoverImg";

const Home = () => {
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [coverImageModalVisible, setCoverImageModalVisible] = useState(false);

  return (
    <>
      <div className="wrapper">
        <div className="flex items-center justify-center px-4 sm:px-0">
          <div className="w-[500px] mt-10 mb-10 shadow-[0px_10px_36px_0px_rgba(0,0,0,0.16),_0px_0px_0px_1px_rgba(0,0,0,0.06)] rounded-md ">
            {/* --- cover image section start --- */}
            <div className="bg-[#EAEAEA] h-[100px] relative">
              <img
                className="w-full h-[100px] object-cover object-center rounded-t-md"
                src={landScapeImg}
                alt="Cover image"
              />
              <div
                onClick={() => setCoverImageModalVisible(true)}
                className="absolute right-0 top-0 z-20 w-[30px] h-[30px] bg-white border border-blue-400 rounded-full flex items-center justify-center text-[18px] text-[#7a7575]  hover:bg-blue-500 hover:text-white cursor-pointer"
              >
                <MdEdit />
              </div>
            </div>
            {/* --- cover image section end --- */}

            {/* --- user image section start --- */}
            <div className="px-5 mt-[-50px] flex items-center justify-between">
              <div className="w-[90px] h-[90px] rounded-full relative z-10 bg-white">
                <img
                  className="w-[90px] h-[90px] rounded-full object-cover object-top border"
                  src={notFoundImg}
                  alt="User image"
                />
                <div
                  onClick={() => setAvatarModalVisible(true)}
                  className="absolute right-0 bottom-0 z-20 w-[30px] h-[30px] bg-white border border-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white cursor-pointer"
                >
                  <LuCamera />
                </div>
              </div>
              <div className="mt-14">
                <div className="flex items-center gap-2 border px-2 py-[3px] rounded-md">
                  <FaCheck className="text-[12px] text-blue-400" />
                  <p className="text-[12px]">Verified</p>
                </div>
              </div>
            </div>
            <div className="mt-2 px-5">
              <h3 className="font-bold">Piyash Hasan</h3>
              <p className="text-gray-500 text-[14px]">
                piyashhasan38@gmail.com
              </p>
            </div>
            {/* --- user image section end --- */}

            <hr className="mt-5 mx-5" />

            {/* --- user infomation section start --- */}
            <UserInfoUpdateForm />
            {/* --- user infomation section end --- */}
          </div>
        </div>
      </div>

      {/* --- avatar change modal start --- */}
      <Dialog
        visible={avatarModalVisible}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => {
          if (!avatarModalVisible) return;
          setAvatarModalVisible(false);
        }}
      >
        <ChangeAvatar />
      </Dialog>
      {/* --- avatar change modal end --- */}

      {/* --- cover image modal start --- */}
      <Dialog
        visible={coverImageModalVisible}
        style={{ width: "35vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
        onHide={() => {
          if (!coverImageModalVisible) return;
          setCoverImageModalVisible(false);
        }}
      >
        <ChangeCoverImg />
      </Dialog>
      {/* --- cover image change modal end --- */}
    </>
  );
};

export default Home;
