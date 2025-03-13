import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userDetail } from "../store/slices/userSlice";
import { register } from "../api/auth";
import { RegisterFormData } from "../@types/auth";
import Cookies from "js-cookie";
export default function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState<RegisterFormData>({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [registerError, setRegisterError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setRegisterError("");

    if (formData.password1 !== formData.password2) {
      setRegisterError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await register(formData);

      if (response.success && response.user) {
        dispatch(userDetail(response.user)); // Save user details to Redux
        navigate("/dashboard"); // Redirect to home page after successful registration
      } else {
        setRegisterError(response.message || "Registration failed.");
      }
    } catch (error) {
      setRegisterError("There was a problem signing up. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (token) {
      navigate("/dashboard"); // Redirect to dashboard if token exists
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div className="w-96 px-4 py-4 bg-white shadow-lg rounded-lg">
          <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
            Sign Up
          </h2>
          <form className="max-w-sm mx-auto" onSubmit={onSubmit}>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="input input-bordered w-full"
                placeholder="Your name..."
                required
                onChange={handleChange}
                value={formData.username}
              />
            </div>
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
              <label className="label font-bold" htmlFor="password1">
                Password
              </label>
              <input
                type="password"
                id="password1"
                name="password1"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
                value={formData.password1}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="password2">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className="input input-bordered w-full"
                required
                onChange={handleChange}
                value={formData.password2}
              />
            </div>
            {registerError && (
              <p className="text-xs text-red-500 mt-2">{registerError}</p>
            )}
            <div className="mt-2">
              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
