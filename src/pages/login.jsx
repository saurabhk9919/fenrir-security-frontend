import { Link, useNavigate } from "react-router-dom";
import { FaApple, FaMeta } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-darkBg text-white">
      <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
        <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-semibold text-lg text-white">aps</span>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center gap-12 px-6 py-10 md:px-10 lg:gap-20 lg:px-14">
          <div className="hidden md:flex w-1/2 flex-col justify-center">
            <div>
          

          <h1 className="text-4xl font-bold leading-snug mb-24">
            Secure your digital world <br />
            in <span className="text-primary">hours</span>.
          </h1>

          <div className="space-y-4 text-gray-300">
            <p><span className="text-primary">✓</span> Enterprise-grade automated security scanning</p>
            <p><span className="text-primary">✓</span> Real-time vulnerability detection</p>
            <p><span className="text-primary">✓</span> Detailed, professional security reports</p>
          </div>

           <div className=" text-xs mt-24 text-gray-400">
            <span className="text-primary">★</span> 
            <span className="font-semibold text-sm">
            Trustpilot
            </span>
             <br />
            <span className="font-semibold text-xl">Rated 4.5/5.0</span> (100k+ reviews)
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center md:justify-end">
        <div className="w-full max-w-[500px] rounded-2xl bg-white p-8 text-gray-900 shadow-2xl md:p-9 lg:p-10">
          <h2 className="text-3xl font-bold mb-2 text-center">Log in</h2>
          <p className="text-base text-center text-gray-500 mb-6">
            Don’t have an account?{" "}
            <Link to="/signup"
              className="text-primary cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="email" placeholder="Email address"
            className="w-full border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary" />
            
             <input type="password"
              placeholder="Password"
            className="w-full border rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-primary"/>
            

            <div className="flex justify-between text-base text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-primary cursor-pointer hover:underline">
                Forgot password?
              </span>
            </div>

            <button type="submit" className="w-full bg-primary text-white py-3 
            rounded-full font-semibold hover:opacity-90 transition"> Log in
            </button>
            </form>

          <div className="flex justify-between gap-3 mt-7">
            <button className="w-1/3 bg-black text-white py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FaApple size={20} />
            </button>
            <button className="w-1/3 bg-gray-200 py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FcGoogle size={20} />
            </button>
            <button className="w-1/3 bg-blue-500 text-white py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FaMeta size={20} />
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );}
export default Login;