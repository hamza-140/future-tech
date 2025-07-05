import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, rememberMe }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Login failed.");
      }

      toast.success("Logged in successfully!", {
        theme: "dark",
        style: {
          background: "#1A1A1A",
          color: "#FFD11A",
        },
      });

    } catch (err) {
      toast.error(`${err.message}`, {
        theme: "dark",
        style: {
          background: "#1A1A1A",
          color: "#FFD11A",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[#141414] flex items-center justify-center px-4">
      <ToastContainer />
      <div className="bg-[#1A1A1A] border border-gray-700 rounded-2xl p-10 w-full max-w-2xl shadow-lg">
        <h1 className="text-white text-4xl font-semibold text-center mb-4">
          Welcome Back
        </h1>
        <p className="text-gray-400 text-center mb-10 text-base">
          Log in to continue exploring the future with{" "}
          <span className="text-white font-medium">FutureTech</span>.
        </p>

        <form onSubmit={handleLogin} className="space-y-6 px-4 md:px-8">
          <div>
            <label className="block text-gray-300 mb-2 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD11A] text-sm"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 bg-[#1F1F1F] border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#FFD11A] text-sm"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="remember"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 mr-2 text-[#FFD11A] bg-[#1F1F1F] border-gray-600 rounded focus:ring-[#FFD11A]"
            />
            <label htmlFor="remember" className="text-gray-400 text-sm">
              Remember me
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFD11A] text-black font-semibold py-3 rounded-lg hover:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="text-center mt-8 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-[#FFD11A] hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
