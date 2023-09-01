import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState<number>(1);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [response, setResponse] = useState<string>("");
  const [errorOccured, setErrOccured] = useState(false);
  const [otp, setOtp] = useState(0);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail === null || userEmail === "") {
      return setResponse("Signup Again!");
    }
    setUserEmail(userEmail);
  }, []);

  const login = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!userEmail || !userPassword) {
      setErrOccured(true);
      return setResponse("Provide both email and password!");
    }
    try {
      setResponse("Logging In...");
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userEmail,
            password: userPassword,
          }),
        }
      );
      const data = await res.json();
      if (!data.success) {
        setResponse(data.message);
      }
      setResponse("");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setResponse("Unexcepted error, Retry!");
      setErrOccured(true);
    }
  };

  const verifyUser = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!otp) {
      setErrOccured(true);
      return setResponse("Provide OTP");
    }

    try {
      setResponse("Verifying OTP...");
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/verify-otp`,
        {
          method: "POST",
          body: JSON.stringify({
            email: userEmail,
            otp,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.success) {
        setResponse(data.message);
      }
      setResponse("");
      login(e);
    } catch (err) {
      setResponse("Failure in Verification!");
      setErrOccured(true);
    }
  };

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

  return (
    <div className="flex h-screen w-screen justify-center pt-[12vh] min-[876px]:mx-auto min-[876px]:w-[55rem]">
      <div className="hidden h-[40rem] w-1/2 bg-[url('../public/phone.png')] bg-cover bg-no-repeat min-[876px]:relative min-[876px]:flex">
        <img
          className="animate-out fade-out absolute right-[1.8rem] top-[1.5rem] h-[86%]"
          src={`slider_img_${imageIndex}.png`}
          alt=""
        />
      </div>
      <div className="flex h-[37rem] w-[95%] flex-col items-center gap-3 px-4 min-[370px]:w-[22rem]">
        <div className="h-[3rem] w-[3rem] bg-[blue]"></div>
        <span className="text-sm font-bold ">Enter Confirmation Code</span>
        <span className="text-center text-sm leading-6">
          {`Enter the confirmation code we sent to ${userEmail}`}{" "}
          <span className="cursor-pointer font-bold text-[rgb(0,149,246)]">
            Resend Code
          </span>
        </span>
        <form className="flex w-full flex-col gap-3" onSubmit={verifyUser}>
          <input
            type="number"
            className="h-[2.5rem] text-ellipsis rounded-lg border bg-[rgb(250,250,250)] px-2 text-sm outline-none placeholder:text-sm"
            placeholder="Confirmation Code"
            onChange={(e) => setOtp(Number(e.target.value))}
          />
          <input
            name="password"
            type="password"
            value={userPassword}
            placeholder="Confirm Password"
            className="h-[2.3rem] text-ellipsis rounded-lg border bg-[rgb(250,250,250)] px-2 text-xs outline-none placeholder:text-sm"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button className="cursor-pointer text-sm font-bold text-[rgb(0,149,246)]">
            Go Back
          </button>
        </form>
        <span
          className="text-sm leading-[18px]"
          style={
            errorOccured
              ? {
                  color: "rgb(273,73,86)",
                }
              : { color: "rgb(0,55,107)" }
          }
        >
          {response}
        </span>
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

export default VerifyEmail;
