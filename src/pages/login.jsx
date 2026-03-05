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
    <div className="min-h-screen w-screen overflow-x-hidden bg-darkBg text-white">
      <div className="relative min-h-screen overflow-hidden bg-gradient-hero">
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 sm:gap-3">
          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full"></div>
          </div>
          <span className="font-semibold text-base sm:text-lg text-white">aps</span>
        </div>

        <div className="relative z-10 mx-auto flex flex-col-reverse md:flex-row min-h-screen w-full max-w-7xl items-center gap-6 sm:gap-8 md:gap-12 px-4 sm:px-6 py-6 sm:py-10 md:px-10 lg:gap-20 lg:px-14">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div>
          

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mb-4 sm:mb-6 md:mb-24">
            Secure your digital world <br />
            in <span className="text-primary">hours</span>.
          </h1>

          <div className="space-y-2 sm:space-y-4 text-gray-300 hidden md:block">
            <p className="text-xs sm:text-sm"><span className="text-primary">✓</span> Enterprise-grade automated security scanning</p>
            <p className="text-xs sm:text-sm"><span className="text-primary">✓</span> Real-time vulnerability detection</p>
            <p className="text-xs sm:text-sm"><span className="text-primary">✓</span> Detailed, professional security reports</p>
          </div>

           <div className=" text-xs mt-8 sm:mt-12 md:mt-24 text-gray-400 hidden md:block">
            <span className="text-primary">★</span> 
            <span className="font-semibold text-sm">
            Trustpilot
            </span>
             <br />
            <span className="font-semibold text-xl">Rated 4.5/5.0</span> (100k+ reviews)
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-1/2 items-center justify-center md:justify-end mb-6 md:mb-0">
        <div className="w-full max-w-[500px] rounded-2xl bg-white p-6 sm:p-8 text-gray-900 shadow-2xl md:p-9 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Log in</h2>
          <p className="text-sm sm:text-base text-center text-gray-500 mb-4 sm:mb-6">
            Don’t have an account?{" "}
            <Link to="/signup"
              className="text-primary cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-5">
            <input
              type="email" placeholder="Email address"
            className="w-full border rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
            
             <input type="password"
              placeholder="Password"
            className="w-full border rounded-lg px-4 sm:px-5 py-2 sm:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"/>
            

            <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 text-xs sm:text-base text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember me
              </label>
              <span className="text-primary cursor-pointer hover:underline">
                Forgot password?
              </span>
           </div>

            <button type="submit" className="w-full bg-primary text-white py-2.5 sm:py-3 
            rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition"> Log in
            </button>
            </form>

          <div className="flex justify-between gap-2 sm:gap-3 mt-4 sm:mt-7">
            <button className="w-1/3 bg-black text-white py-2 sm:py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FaApple size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button className="w-1/3 bg-gray-200 py-2 sm:py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FcGoogle size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button className="w-1/3 bg-blue-500 text-white py-2 sm:py-2.5 rounded-full flex items-center justify-center hover:opacity-80 transition">
              <FaMeta size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );}
export default Login;