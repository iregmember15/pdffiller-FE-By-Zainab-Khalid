import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth"; // Import login function from auth.ts

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "string",
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

    const result = await login(formData); // Call login function from auth.ts
    if (result.success) {
      navigate("/dashboard"); // Redirect after successful login
    } else {
      setLoginError(result.message);
    }
    setLoading(false);
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
          <Link to="" className="text-blue-500 hover:underline">
            Join us today and start your journey!
          </Link>
        </p>
      </div>
    </div>
  );
}
