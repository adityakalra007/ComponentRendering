import { useState } from "react";


export const SignUpPage = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const[userPassword,setUserPassword] = useState('');
  const[success,setSuccess] = useState(null);
    
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting...");
    console.log("Username:", userName);
    console.log("Email:", userEmail);
    
    if (
      userName.trim() !== "" &&
      userEmail.trim() !== "" &&
      userPassword.trim() !== ""
    ) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
    
  };
  function handleUserPassword(e){
    setUserPassword(e.target.value);
  }


  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black p-6">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500 mb-6">
          Sign Up Here
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            onChange={handleUserName}
            value={userName}
            placeholder="Enter your username"
            className="w-full px-4 py-3 rounded-lg border border-violet-400 bg-white/80 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="email"
            onChange={handleUserEmail}
            value={userEmail}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg border border-violet-400 bg-white/80 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <input
            type="password"
            onChange={handleUserPassword}
            value={userPassword}
            placeholder="Enter your Password"
            className="w-full px-4 py-3 rounded-lg border border-violet-400 bg-white/80 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="cursor-pointer w-1/2 mx-auto mt-4 bg-gradient-to-r from-violet-600 to-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
          >
            Sign Up
          </button>

         {success !== null && (
  <div className={`text-center text-white font-semibold p-4 rounded-xl ${success ? 'bg-green-500' : 'bg-red-500'}`}>
    {success ? "Sign Up Successful!" : "Sign Up Failed"}
  </div>
)}



        </form>
      </div>
    </div>
  );
};
