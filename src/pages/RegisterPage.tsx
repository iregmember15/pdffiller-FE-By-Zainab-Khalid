import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getApiConfiguration } from "../api/utils";
import { ApiApi } from "api-client";

const getClient = () => {
  return new ApiApi(getApiConfiguration());
};

interface FormData {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

interface FieldErrors {
  [key: string]: string[];
}

export default function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [generalErrors, setGeneralErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});
    setGeneralErrors([]);

    if (formData.password1 !== formData.password2) {
      setGeneralErrors(["Passwords do not match."]);
      setLoading(false);
      return;
    }

    const client = getClient();

    try {
      await client.apiAuthRegisterCreate({ register: formData });
      const data = await client.apiAuthLoginCreate({
        login: { email: formData.email, password: formData.password1 },
      });

      if (data.status === "success" && data.jwt) {
        localStorage.setItem("jwt", String(data.jwt)); // Store JWT in local storage
        navigate("/");
      } else if (data.status === "otp_required" && data.tempOtpToken) {
        localStorage.setItem("tempOtpToken", data.tempOtpToken);
        navigate("/login/otp/");
      }
    } catch (error: any) {
      console.error("Error during signup/login:", error);
      if (error.response) {
        error.response
          .json()
          .then((errorData: any) => {
            const newFieldErrors: FieldErrors = {};
            const newGeneralErrors: string[] = [];

            if (typeof errorData === "string") {
              newGeneralErrors.push(errorData);
            } else {
              Object.entries(errorData).forEach(([key, errors]) => {
                const errorList = Array.isArray(errors) ? errors : [errors];
                if (key === "email" || key === "password1") {
                  newFieldErrors[key] = errorList.map((err) => `${err}`);
                } else {
                  errorList.forEach((err) => {
                    newGeneralErrors.push(`${err}`);
                  });
                }
              });
            }

            setFieldErrors(newFieldErrors);
            setGeneralErrors(newGeneralErrors);
          })
          .catch(() => {
            setGeneralErrors([
              "There was a problem signing up. Please try again.",
            ]);
          });
      } else {
        setGeneralErrors([
          "Network error. Please check your connection and try again.",
        ]);
      }
    }

    setLoading(false);
  }

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
                className={`input input-bordered w-full ${
                  fieldErrors.username ? "input-error" : ""
                }`}
                placeholder="Your name..."
                required
                onChange={handleChange}
                value={formData.username}
              />
              {fieldErrors.username && (
                <div className="text-xs text-red-500 mt-1">
                  {fieldErrors.username.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`input input-bordered w-full ${
                  fieldErrors.email ? "input-error" : ""
                }`}
                placeholder="name@example.com"
                required
                onChange={handleChange}
                value={formData.email}
              />
              {fieldErrors.email && (
                <div className="text-xs text-red-500 mt-1">
                  {fieldErrors.email.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="password1">
                Password
              </label>
              <input
                type="password"
                id="password1"
                name="password1"
                className={`input input-bordered w-full ${
                  fieldErrors.password1 ? "input-error" : ""
                }`}
                required
                onChange={handleChange}
                value={formData.password1}
              />
              {fieldErrors.password1 && (
                <div className="text-xs text-red-500 mt-1">
                  {fieldErrors.password1.map((error, index) => (
                    <div key={index}>{error}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label font-bold" htmlFor="password2">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                name="password2"
                className={`input input-bordered w-full ${
                  fieldErrors.password2 ? "input-error" : ""
                }`}
                required
                onChange={handleChange}
                value={formData.password2}
              />
            </div>
            {generalErrors.length > 0 && (
              <div className="text-xs text-red-500 mt-2">
                {generalErrors.map((error, index) => (
                  <div key={index}>{error}</div>
                ))}
              </div>
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
