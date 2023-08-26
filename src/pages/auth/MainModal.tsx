import React, { useEffect, useState } from "react";
import { Props, User } from "utils";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MainModal = (props: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

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

  const [formData, setFormData] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const collectFormData = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const login = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return setError("Provide both email and password!");
    }
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await res.json();
      if (!data.success) {
        setError(data.message);
      }
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError("Unexcepted error, Retry!");
    }
  };

  const submitData = async (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    try {
      if (!formData.username || !formData.email || !formData.password) {
        return setError("Provide username, email and password!");
      }

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/create`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (!data.success) {
        setError(data.message);
      }
      login(e);
    } catch (err) {
      setError("Unexcepted error, Retry!");
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center pt-[12vh] min-[876px]:mx-auto min-[876px]:w-[55rem]">
      <div className="hidden h-[40rem] w-1/2 bg-[url('../public/phone.png')] bg-cover bg-no-repeat min-[876px]:relative min-[876px]:flex">
        <img
          className="animate-out fade-out absolute right-[1.8rem] top-[1.5rem] h-[86%]"
          src={`slider_img_${imageIndex}.png`}
          alt=""
        />
      </div>
      <div className="flex h-[37rem] w-[95%] flex-col items-center gap-2 min-[370px]:w-[22rem]">
        <div className="flex w-full flex-col items-center gap-4 border pt-5">
          <span className="fade-in-5 cursor-pointer font-igfont text-[2.3rem] font-bold text-black duration-300">
            Banjogram
          </span>
          <form
            className="flex flex-col py-5"
            onSubmit={props.pageSource === "login" ? login : submitData}
            method="POST"
          >
            <div className="flex flex-col gap-2 pb-2">
              <input
                name="email"
                type="email"
                value={formData.email}
                placeholder="email"
                className="h-[2.3rem] text-ellipsis  border bg-[rgb(250,250,250)] px-2 text-xs outline-none placeholder:text-xs"
                onChange={collectFormData}
              />
              {props.displayUsernameInput && (
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  placeholder="Username"
                  className="h-[2.3rem] text-ellipsis  border bg-[rgb(250,250,250)] px-2 text-xs outline-none placeholder:text-xs"
                  onChange={collectFormData}
                />
              )}
              <input
                name="password"
                type="password"
                value={formData.password}
                placeholder="Password"
                className="h-[2.3rem] text-ellipsis border bg-[rgb(250,250,250)] px-2 text-[0.5rem] outline-none placeholder:text-xs"
                onChange={collectFormData}
              />
            </div>
            <div className="bg-[green flex flex-col items-center gap-4 py-2">
              <button className="w-full cursor-pointer rounded-lg bg-[rgb(0,149,246)] py-[0.4rem] text-sm font-semibold text-white">
                {props.pageSource === "login" ? "Login" : "Sign Up"}
              </button>
              <div className="flex items-center gap-6">
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
                <span className="text-xs font-semibold text-[gray]">OR</span>
                <div className="h-[1px] w-[5.7rem] bg-[rgb(219,219,219)]"></div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-4 py-3">
              <span className="flex items-center gap-2">
                <IoLogoFacebook fill="#385185" size={20} />
                <span className="cursor-pointer text-sm font-semibold text-[#385185]">
                  Log in with Facebook
                </span>
              </span>
              <span className="cursor-pointer text-xs text-[rgb(0,55,107)]">
                Forgot password?
              </span>
              <span className="text-sm leading-[18px] text-[rgb(273,73,86)]">
                {error}
              </span>
            </div>
          </form>
        </div>
        <div className="flex w-full justify-center gap-2 border px-4 py-5 text-sm">
          <span>
            {props.pageSource === "login"
              ? `Don't have an account?`
              : `Have an account?`}
          </span>
          <span
            className="cursor-pointer font-semibold text-[rgb(0,149,246)]"
            onClick={() => {
              props.pageSource === "login"
                ? navigate("/signup")
                : navigate("/login");
            }}
          >
            {props.pageSource === "login" ? `Sign up` : `Log in`}
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

export default MainModal;
