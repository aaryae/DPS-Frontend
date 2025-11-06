import {
  faArrowTrendUp,
  faEye,
  faEyeSlash,
  faGear,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTime } from "@hooks/useTime";
import { useState } from "react";

const BalanceSection = () => {
  const { time, greeting } = useTime();
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-950 rounded-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full translate-y-36 -translate-x-36"></div>

        <div className="relative p-8 text-white">
          <div className="flex justify-between items-start mb-8">
            <div>
              <p className="text-white/80 text-sm font-medium mb-2">
                Good {greeting}
              </p>
              <h2 className="text-3xl font-bold mb-1">Welcome back, Aaryae! </h2>
              <p className="text-white/90 text-sm">
                {time.toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all duration-300">
                <FontAwesomeIcon icon={faGear} size="lg" />
              </button>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FontAwesomeIcon icon={faUser} size="lg" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <p className="text-white/90 text-lg font-medium">
                  Total Balance
                </p>
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="p-2 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-300"
                >
                  <FontAwesomeIcon
                    icon={showBalance ? faEyeSlash : faEye}
                    size="sm"
                  />
                </button>
              </div>
              <h1 className="text-5xl font-bold mb-4">
                {showBalance ? "₹ 2,45,670" : "₹ ••••••"}
              </h1>
              <p className="text-white/80 mb-6">Account: ****4829 • Savings</p>

              <div className="flex gap-4">
                <button
                  
                  className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/90 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faArrowTrendUp} size="sm" />
                  Send Money
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white/30 hover:-translate-y-1 transition-all duration-300">
                  Add Funds
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/90 text-sm">Monthly Spending</span>
                  <FontAwesomeIcon
                    icon={faArrowTrendUp}
                    className="text-emerald-400"
                    size="sm"
                  />
                </div>
                <p className="text-2xl font-bold">₹ 45,230</p>
                <p className="text-emerald-400 text-sm">
                  ↗ 12% from last month
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white/90 text-sm">Savings Goal</span>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-yellow-400"
                    size="sm"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 bg-white/20 rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-sm font-semibold">75%</span>
                </div>
                <p className="text-yellow-400 text-sm mt-1">
                  ₹75,000 of ₹100,000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSection;
