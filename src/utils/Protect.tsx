import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [token, setToken] = useState("");
  const [hasVerified, setHasVerified] = useState(false);
  const [userAllowed, setUserAllowed] = useState(false);

  useEffect(() => {
    const getCookie = (name) => {
      const cookies = document.cookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split("=");
        if (cookie[0] === name) {
          return decodeURIComponent(cookie[1]);
        }
      }
      return "";
    };
    setToken(getCookie("accessToken"));
  }, []);

  useEffect(() => {
    if (token) {
      const verifyUser = async () => {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/auth/verify`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        if (data.success === true) {
          setUserAllowed(true);
          setHasVerified(true);
        } else {
          setUserAllowed(false);
          setHasVerified(true);
        }
      };
      verifyUser();
    }
  }, [token]);

  return userAllowed ? (
    <Outlet />
  ) : hasVerified ? (
    <Navigate to="/login" />
  ) : (
    <div className="h-screen w-screen bg-black p-4 text-white">Loading...</div>
  );
};

export default Protect;
