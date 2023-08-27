import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const Protect = () => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [userAllowed, setUserAllowed] = useState(false);

  useEffect(() => {
    const storage = localStorage.getItem("token");
    setToken(storage);
  }, []);

  useEffect(() => {
    if (token) {
      console.log('a change')
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
        } else {
          console.log('did not succeed')
          setLoading(false);
        }
      };
      verifyUser();
    }
    else {
      console.log("undefined token")
    }
  }, [token]);

  return userAllowed ? (
    <Outlet />
  ) : loading ? (
    <div className="h-screen w-screen bg-black p-4 text-white">Loading...</div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Protect;
