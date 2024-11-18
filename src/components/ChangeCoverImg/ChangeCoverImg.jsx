import { useRef, useState } from "react";
import notFoundImg from "../../assets/images/not-found-landscape.jpg";

const ChangeCoverImg = () => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  // --- handle button click ---
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // --- handle file selection ---
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  //   --- handle upload ---
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    // try {
    //   const response = await fetch("https://your-server-endpoint/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     alert("File uploaded successfully!");
    //   } else {
    //     alert("Failed to upload file.");
    //   }
    // } catch (error) {
    //   console.error("Error uploading file:", error);
    //   alert("Error uploading file.");
    // }
  };

  return (
    <div className="px-5 pb-5">
      <div className="flex items-center justify-center">
        <div className="w-full h-[100px] rounded-md">
          <img
            className="w-full h-[100px] object-cover object-center border rounded-md"
            src={preview ? preview : notFoundImg}
            alt="Cover image"
          />
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <div className="mt-5 flex items-center justify-center gap-2">
        <button
          onClick={handleButtonClick}
          className="text-[14px] bg-[#2FCD71] hover:bg-green-500 text-white px-3 py-[3px] rounded-md"
        >
          Select cover image
        </button>
        <button
          onClick={handleUpload}
          className="text-[14px] bg-blue-500 hover:bg-blue-700 text-white px-3 py-[3px] rounded-md"
        >
          Upload
        </button>
      </div>
      <div className="text-center mt-2">
        <span className="text-[14px] text-red-500">
          NB: Select landscape image for better view
        </span>
      </div>
    </div>
  );
};

export default ChangeCoverImg;
