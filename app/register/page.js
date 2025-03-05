"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username_random_123: "",
    useremail_hidden_abc: "",
    userpassword_secret: "",
    userconfirmPassword_hidden: "",
    userphone_number_987: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, userphone_number_987: value });
  };

  const handleFocus = (e) => {
    setTimeout(() => e.target.removeAttribute("readOnly"), 50);
  };

  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full p-4">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[30px] leading-[27px] font-poppins mb-4">
        Sign Up
      </h3>
      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] shadow-black shadow-2xl rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
          <div className="w-full max-w-md">
            {/* Hidden Dummy Fields */}
            <input type="text" name="fake-user" autoComplete="off" style={{ display: "none" }} />
            <input type="password" name="fake-pass" autoComplete="off" style={{ display: "none" }} />

            <form autoComplete="off">
              {[
                { label: "User Name", name: "username_random_123", type: "text", placeholder: "Type User Name" },
                { label: "Email Address", name: "useremail_hidden_abc", type: "email", placeholder: "Example@gmail.com" },
              ].map(({ label, name, type, placeholder }) => (
                <div key={name} className="mb-4">
                  <label className="block">
                    <span className="text-red-500">*</span> {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    id={`input-${name}`}
                    className="px-2 py-1 w-full focus:outline-none border border-gray-300 focus:border-red-400 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    autoComplete="new-password"
                    readOnly
                    onFocus={handleFocus}
                  />
                  {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                </div>
              ))}

              {/* Phone Number Input */}
              <div className="mb-4">
                <label className="block">
                  <span className="text-red-500">*</span> Phone Number
                </label>
                <PhoneInput
                  country="pk"
                  value={formData.userphone_number_987}
                  onChange={handlePhoneChange}
                  containerClass="w-full"
                  inputClass="!w-full !pl-14 !px-4 !py-2 !border !border-gray-300 !rounded !focus:outline-none !focus:ring-2 !focus:ring-orange-500"
                  autoComplete="new-password"
                />
                {errors.userphone_number_987 && <p className="text-red-500 text-sm">{errors.userphone_number_987}</p>}
              </div>

              {/* Password & Confirm Password Fields */}
              {[
                { name: "userpassword_secret", label: "Password", state: showPassword, toggle: togglePassword },
                { name: "userconfirmPassword_hidden", label: "Confirm Password", state: showConfirmPassword, toggle: toggleConfirmPassword },
              ].map(({ name, label, state, toggle }) => (
                <div key={name} className="mb-4 relative">
                  <label className="block">
                    <span className="text-red-500">*</span> {label}
                  </label>
                  <div className="relative">
                    {/* Hidden input to prevent autofill */}
                    <input type="text" name="fake-password" autoComplete="off" style={{ display: "none" }} />

                    <input
                      type={state ? "text" : "password"}
                      name={name}
                      id={`input-${name}`}
                      className="px-2 py-1 w-full focus:outline-none border border-gray-300 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
                      placeholder="Please use characters & symbols"
                      value={formData[name]}
                      onChange={handleChange}
                      autoComplete="new-password"
                      readOnly
                      onFocus={handleFocus}
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                      onClick={toggle}
                    >
                      {state ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
                </div>
              ))}

              <button type="submit" className="w-full bg-orange-600 text-white py-2 cursor-pointer transition">
                Next
              </button>
            </form>
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

export default Register;
