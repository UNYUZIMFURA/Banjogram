import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [loading, setLoading] = useState(true);
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
          setLoading(false);
        }
      };
      verifyUser();
    }
  }, [token]);

return loading ? (<div className="h-screen w-screen p-4 bg-black text-white">Loading</div>): userAllowed ? (
  <Outlet />
): (
  <Navigate to="/login" />
)
};

export default Protect;
