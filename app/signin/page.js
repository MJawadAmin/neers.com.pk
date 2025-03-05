"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { BiCheckDouble } from "react-icons/bi";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    useremail_hidden_abc: "",
    userpassword_secret: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.querySelectorAll("input").forEach((input) => {
      input.setAttribute("autocomplete", "off");
      input.setAttribute("autocorrect", "off");
      input.setAttribute("spellcheck", "false");
      input.setAttribute("autocapitalize", "none");
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFocus = (e) => {
    setTimeout(() => e.target.removeAttribute("readOnly"), 50);
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Login
      </h3>

      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] shadow-black shadow-2xl rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
          <div className="w-full max-w-md">
            {/* Hidden Dummy Fields to Prevent Autofill */}
            <input type="text" name="fake-user" autoComplete="off" style={{ display: "none" }} />
            <input type="password" name="fake-pass" autoComplete="off" style={{ display: "none" }} />

            <form autoComplete="off">
              {/* Email Input */}
              <div className="mb-4">
                <label className="block">
                  <span className="text-red-500">*</span> Email Address
                </label>
                <input
                  type="email"
                  name="useremail_hidden_abc"
                  className="px-2 py-1.5 w-full focus:outline-none border border-gray-300 focus:border-red-400 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
                  placeholder="Example@gmail.com"
                  value={formData.useremail_hidden_abc}
                  onChange={handleChange}
                  autoComplete="new-password"
                  readOnly
                  onFocus={handleFocus}
                />
                {errors.useremail_hidden_abc && <p className="text-red-500 text-sm">{errors.useremail_hidden_abc}</p>}
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block">
                  <span className="text-red-500">*</span> Password
                </label>
                <div className="relative">
                  <input type="text" name="fake-password" autoComplete="off" style={{ display: "none" }} />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="userpassword_secret"
                    className="px-2 py-1.5 w-full focus:outline-none border border-gray-300 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
                    placeholder="Enter your password"
                    value={formData.userpassword_secret}
                    onChange={handleChange}
                    autoComplete="new-password"
                    readOnly
                    onFocus={handleFocus}
                  />
                  <button type="button" className="absolute right-3 top-3 text-gray-500 hover:text-gray-700" onClick={togglePassword}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.userpassword_secret && <p className="text-red-500 text-sm">{errors.userpassword_secret}</p>}
              </div>
              <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        id="rememberMe"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className="hidden"
      />
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded ${
          checked ? "bg-orange-500 border-orange-500" : "border-gray-400"
        }`}
      >
        {checked &&  <BiCheckDouble size={14} className="text-white"  />}
       
      </div>
      <span className="text-gray-700">Remember me</span>
    </label>
              <button type="submit" className="w-full mt-10 bg-orange-500 text-white py-2 cursor-pointer transition">
                Login
              </button>
            </form>

            {/* Navigation Buttons */}
            <div className="mt-4 flex flex-row justify-between items-center">
             
              <button
                className="  text-sm mb-2"
                onClick={() => router.push("/register")}
              >
                Don’t have an account? <span className="hover:underline text-orange-600"> Sign Up</span>
              </button>
              <button
                className="text-orange-600 hover:underline text-sm mb-2"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </button>
              
            </div>
            <div className="text-center mt-2">
                <p className="text-gray-700 text-sm" onClick={() => window.location.href = "tel:0512272649"}>In case of any problem, contact us at: <span className="text-orange-600 hover:underline text-sm"> (051) 2272649</span></p>
                
              </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image src="/login.webp" alt="background" className="w-full h-full object-cover" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Login;
