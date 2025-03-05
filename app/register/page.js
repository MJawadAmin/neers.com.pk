<form autoComplete="off">
  {/* Dummy hidden inputs to prevent autofill */}
  <input type="text" name="fake-username" autoComplete="off" style={{ display: "none" }} />
  <input type="password" name="fake-password" autoComplete="new-password" style={{ display: "none" }} />

  {/* User Name Input */}
  <div className="mb-4">
    <label className="block">
      <span className="text-red-500">*</span> User Name
    </label>
    <input
      type="text"
      name="randomUserName"
      id="input-username"
      className="px-2 py-1 w-full focus:outline-none border border-gray-300 focus:border-red-400 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
      placeholder="Type User Name"
      value={formData.username}
      onChange={handleChange}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      inputMode="none"
      aria-autocomplete="none"
      readOnly
      onFocus={(e) => e.target.removeAttribute("readOnly")}
    />
    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
  </div>

  {/* Email Input */}
  <div className="mb-4">
    <label className="block">
      <span className="text-red-500">*</span> Email Address
    </label>
    <input
      type="email"
      name="randomEmail"
      id="input-email"
      className="px-2 py-1 w-full focus:outline-none border border-gray-300 focus:border-red-400 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
      placeholder="Example@gmail.com"
      value={formData.useremail}
      onChange={handleChange}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      inputMode="none"
      aria-autocomplete="none"
      readOnly
      onFocus={(e) => e.target.removeAttribute("readOnly")}
    />
    {errors.useremail && <p className="text-red-500 text-sm">{errors.useremail}</p>}
  </div>

  {/* Password Input */}
  <div className="mb-4 relative">
    <label className="block">
      <span className="text-red-500">*</span> Password
    </label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        name="randomPassword"
        id="input-password"
        className="px-2 py-1 w-full focus:outline-none border border-gray-300 rounded text-black placeholder:font-sans !placeholder:text-greyish-400"
        placeholder="Please use characters & symbols"
        value={formData.userpassword}
        onChange={handleChange}
        autoComplete="new-password"
        autoCorrect="off"
        spellCheck="false"
        readOnly
        onFocus={(e) => e.target.removeAttribute("readOnly")}
      />
      <button
        type="button"
        className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
        onClick={togglePassword}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
    {errors.userpassword && <p className="text-red-500 text-sm">{errors.userpassword}</p>}
  </div>
</form>
