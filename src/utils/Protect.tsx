import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        }
      };
      verifyUser();
    }
  }, [token]);

  if (loading) {
    return <div className="h-screen w-screen bg-black p-4 text-white">Loading....</div>;
  } else if (!userAllowed) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Protect;
