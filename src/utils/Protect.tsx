import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [token, setToken] = useState<string | null>("");
  const [userAllowed, setUserAllowed] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("token");
    setToken(storage);
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
        }
      };
      verifyUser();
    }
  }, [token]);

  if (!userAllowed) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default Protect;
