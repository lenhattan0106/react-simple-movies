import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 page-container">
      <div className="mb-8">
        <h1 className="text-[200px] font-bold leading-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          404
        </h1>
      </div>
      <div className="mb-4 text-center">
        <h2 className="mb-3 text-4xl font-bold text-white">
          Oops! Page Not Found
        </h2>
        <p className="max-w-md text-lg text-slate-400">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
      </div>
      <div className="flex items-center gap-3 my-8">
        <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
        <div className="w-3 h-3 delay-100 rounded-full bg-secondary animate-bounce"></div>
        <div className="w-3 h-3 delay-200 rounded-full bg-primary animate-bounce"></div>
      </div>
      <div className="flex gap-4 mt-6">
        <Button onClick={() => navigate("/")} bgColor="primary">
          Back to Home
        </Button>
        <Button onClick={() => navigate("/movies")} bgColor="secondary">
          Browse Movies
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
