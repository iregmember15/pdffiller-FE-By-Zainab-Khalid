import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiApi } from "api-client";
import { getApiConfiguration } from "../api/utils";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { userDetail } from "../store/slices/userSlice";

const getClient = () => {
  return new ApiApi(getApiConfiguration());
};

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    const client = getClient();
    const credentials = { email: formData.email, password: formData.password };

    try {
      const data = await client.apiAuthLoginCreate({ login: credentials });

      if (data.status === "success" && data.jwt) {
        dispatch(
          login({
            access: data.jwt.access,
            refresh: data.jwt.refresh,
          })
        ); // Save data to Redux
        dispatch(userDetail(data.jwt.user));
        navigate("/"); // Navigate to home page
      } else if (data.status === "otp_required" && data.tempOtpToken) {
        localStorage.setItem("tempOtpToken", data.tempOtpToken);
        navigate("/login/otp/"); // Navigate to OTP page
      } else {
        setLoginError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setLoginError("There was a problem logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-100 flex justify-center items-center">
      <div>
        <div className="w-96 px-4 py-4 bg-white shadow-lg rounded-lg">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Sign In
          </h2>
          <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="name@example.com"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            {loginError && (
              <p className="text-xs text-red-500 mt-2">{loginError}</p>
            )}
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center text-gray-600">
          New here?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Join us today and start your journey!
          </Link>
        </p>
      </div>
    </div>
  );
}
