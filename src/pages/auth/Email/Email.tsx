import React, { useState, useEffect } from "react";
import { User } from "utils";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState<number>(1);
  const [userData, setUserData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      imageIndex !== 4
        ? setImageIndex((prevIndex) => prevIndex + 1)
        : setImageIndex(1);
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [imageIndex]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    if(userData === null || "") return
    setUserData(userData);
  }, []);

  useEffect(() => {
    if (userData) {
      console.log(userData)
    }
  }, [userData]);
  return (
    <div className="flex h-screen w-screen justify-center pt-[12vh] min-[876px]:mx-auto min-[876px]:w-[55rem]">
      <div className="hidden h-[40rem] w-1/2 bg-[url('../public/phone.png')] bg-cover bg-no-repeat min-[876px]:relative min-[876px]:flex">
        <img
          className="animate-out fade-out absolute right-[1.8rem] top-[1.5rem] h-[86%]"
          src={`slider_img_${imageIndex}.png`}
          alt=""
        />
      </div>
      <div className="g-[red] flex h-[37rem] w-[95%] flex-col items-center gap-2 min-[370px]:w-[22rem]">
        <div className="h-[3rem] w-[3rem] bg-[blue]"></div>
        <span>Enter Confirmation Code</span>
        <span>{`Enter the confirmation code we sent to ${userData.email}`}</span>
        <div className="flex w-full justify-center gap-2 border px-4 py-5 text-sm">
          <span>Have an account?</span>
          <span
            className="cursor-pointer font-semibold text-[rgb(0,149,246)]"
            onClick={() => navigate("/login")}
          >
            Log in
          </span>
        </div>
        <div className="flex w-full flex-col items-center gap-4 py-2 text-sm">
          <span>Get the app.</span>
          <div className="flex max-w-[18rem] justify-around">
            <img
              src="/apple_store.png"
              alt=""
              className="h-auto w-[47%] cursor-pointer"
            />
            <img
              src="/play_store.png"
              alt=""
              className="h-auto w-[47%] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
