import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-darkBg text-white">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-darkBg via-darkCard to-darkBg"></div>
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-primary/35 blur-3xl"></div>
        <div className="absolute top-20 right-1/3 h-72 w-72 rounded-full bg-primary/15 blur-3xl"></div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 md:px-10 lg:px-14">
          <div className="hidden md:flex w-1/2 flex-col justify-center">
            <div className="mb-10">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-4 h-4 bg-primary rounded-full"></div>
            <span className="font-semibold text-lg">aps</span>
          </div>

          <h1 className="text-4xl font-bold leading-snug mb-6">
            Expert level Cybersecurity <br />
            in <span className="text-primary">hours</span> not weeks.
          </h1>
            <div className="space-y-4 text-gray-300 mb-2 font-semibold text-lg">
          What's Included
            </div>
          <div className="space-y-4 text-gray-300">
            <p>✔ Effortlessly spider and map targets to uncover hidden security flaws</p>
            <p>✔ Deliver high-quality, validated findings in hours, not weeks.</p>
            <p>✔ Generate professional, enterprise-grade security reports automatically.</p>
          </div>

          <div className="mt-12 text-sm text-gray-400">
            ⭐ Trustpilot <br />
            Rated 4.5/5.0 (100k+ reviews)
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center">
        <div className="w-full max-w-[430px] rounded-2xl bg-white p-6 text-gray-900 shadow-2xl md:p-7">
          <h2 className="text-2xl font-bold mb-2 text-center">Sign up</h2>
          <p className="text-sm text-center text-gray-500 mb-5">
            Already have an account? <Link to="/login" className="text-primary cursor-pointer">Log in</Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <input
              type="text"
              placeholder="First name"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="text"
              placeholder="Last name"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <input
              type="password"
              placeholder="Password (8+ characters)"
              className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input type="checkbox" />
              <p>
                I agree to Terms & Conditions and acknowledge the Privacy Policy
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-2.5 rounded-full font-semibold hover:opacity-90 transition"
            >
              Create account
            </button>
          </form>

          <div className="flex justify-between gap-3 mt-6">
            <button className="w-1/3 bg-black text-white py-2 rounded-full">
              Apple
            </button>
            <button className="w-1/3 bg-gray-200 py-2 rounded-full">
              Google
            </button>
            <button className="w-1/3 bg-blue-500 text-white py-2 rounded-full">
              Meta
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;