"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { BiCheckDouble } from "react-icons/bi";
import { gql, useMutation } from "@apollo/client";
import AuthContext from "@/app/context/Authcontext";

const CLIENT_LOGIN_MUTATION = gql`
  mutation ClientLogin($email: String!, $password: String!) {
    clientLogin(email: $email, password: $password) {
      id
      email
      token
      status
      success
      message
    }
  }
`;

const Login = () => {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    useremail_hidden_abc: "",
    userpassword_secret: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [clientLogin, { loading, error }] = useMutation(CLIENT_LOGIN_MUTATION);
  

  useEffect(() => {
    if (error) {
      setErrors({ submit: "Login failed. Please check your credentials and try again." });
    }
  }, [error]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFocus = (e) => {
    e.target.removeAttribute("readonly");
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
  
    if (!formData.useremail_hidden_abc || !formData.userpassword_secret) {
      setErrors({
        useremail_hidden_abc: !formData.useremail_hidden_abc ? "Email is required" : "",
        userpassword_secret: !formData.userpassword_secret ? "Password is required" : "",
      });
      return;
    }
  
    try {
      const { data } = await clientLogin({
        variables: {
          email: formData.useremail_hidden_abc,
          password: formData.userpassword_secret,
        },
      });
  
      if (data?.clientLogin?.success) {
        const token = data.clientLogin.token;
  
        if (token) {
          console.log("Before saving token:", token); // Debugging
  
          // ✅ Fix: Ensure localStorage is accessed on the client side
          if (typeof window !== "undefined") {
            localStorage.setItem("authToken", token);
            localStorage.setItem("userEmail", data.clientLogin.email);
            console.log("Token saved successfully:", localStorage.getItem("authToken"));
          }
  
          login(token);
  
          setTimeout(() => {
            router.push("/dashboard?section=protected&view=productsList");
          }, 100);
        } else {
          setErrors({ submit: "Login failed: No token received." });
        }
      } else {
        setErrors({ submit: `Login failed: ${data.clientLogin.message}` });
      }
    } catch (err) {
      console.error("Login Error:", err);
      setErrors({ submit: "An unexpected error occurred. Please try again." });
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full pt-[18.5px]">
      <h3 className="text-center text-[#F76300] font-semibold text-lg lg:text-[33.5px] leading-[27px] font-poppins mb-4">
        Login
      </h3>

      <div className="flex flex-col md:flex-row h-auto md:h-screen w-full max-w-[91.5vw] shadow-black shadow-2xl rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6">
          <div className="w-full max-w-md">
            <form autoComplete="off" onSubmit={handleSubmit}>
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
                {errors.useremail_hidden_abc && (
                  <p className="text-red-500 text-sm">{errors.useremail_hidden_abc}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="mb-4 relative">
                <label className="block">
                  <span className="text-red-500">*</span> Password
                </label>
                <div className="relative">
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
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                    onClick={togglePassword}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.userpassword_secret && (
                  <p className="text-red-500 text-sm">{errors.userpassword_secret}</p>
                )}
              </div>

              {/* Remember Me Checkbox */}
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
                  {checked && <BiCheckDouble size={14} className="text-white" />}
                </div>
                <span className="text-gray-700">Remember me</span>
              </label>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full mt-10 bg-orange-500 text-white py-2 cursor-pointer transition"
                disabled={loading}
              >
                {loading ? "Loading..." : "Login"}
              </button>
              {errors.submit && <p className="text-red-500 text-sm mt-2">{errors.submit}</p>}
            </form>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            src="/login.webp"
            alt="background"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
