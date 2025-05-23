import React from "react";
import { Target, Award, Star } from "lucide-react";

interface Goal {
  icon: "target" | "award" | "star";
  title: string;
  description: string;
}

interface GoalsProps {
  goals: Goal[];
  theme: "summer" | "tlf";
}

export const Goals: React.FC<GoalsProps> = ({ goals, theme }) => {
  const isSummer = theme === "summer";

  const primaryColor = isSummer ? "text-yellow-400" : "text-blue-600";
  const secondaryColor = isSummer ? "text-yellow-700" : "text-blue-800";
  const bgColor = isSummer ? "bg-yellow-50" : "bg-blue-50";
  const cardBgGradient = isSummer
    ? "bg-gradient-to-tr from-yellow-50 via-yellow-100 to-yellow-50"
    : "bg-gradient-to-tr from-blue-50 via-blue-100 to-blue-50";
  const iconBgGradient = isSummer
    ? "bg-gradient-to-tr from-yellow-400 to-yellow-500"
    : "bg-gradient-to-tr from-blue-600 to-blue-700";
  const shadowColor = isSummer
    ? "shadow-yellow-300/40"
    : "shadow-blue-400/30";

  const getIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case "target":
        return <Target className={className} />;
      case "award":
        return <Award className={className} />;
      case "star":
        return <Star className={className} />;
      default:
        return <Target className={className} />;
    }
  };

  return (
    <section className={`${bgColor} py-12`}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 mb-2">
            <Target className={`w-8 h-8 ${primaryColor} opacity-90`} />
            <h2 className={`text-3xl font-extrabold tracking-tight ${secondaryColor}`}>
              Our Goals
            </h2>
          </div>
          <p className="text-md md:text-lg text-gray-700 font-medium">
            What we aim to achieve together
          </p>
          <div
            className={`mt-2 w-16 mx-auto h-1 rounded-full ${primaryColor} opacity-80`}
          />
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {goals.map((goal, i) => (
            <div
              key={i}
              tabIndex={0}
              aria-label={`Goal: ${goal.title}`}
              className={`relative rounded-2xl p-6 ${cardBgGradient} shadow-lg ${shadowColor} cursor-pointer
                transform transition-transform duration-300 ease-out
                hover:scale-[1.05] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2
                focus:ring-${isSummer ? "yellow-400" : "blue-600"}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6
                  text-white text-2xl ${iconBgGradient} drop-shadow-lg`}
              >
                {getIcon(goal.icon, "w-8 h-8")}
              </div>
              <h3
                className={`text-xl font-semibold text-center mb-2 ${secondaryColor} relative`}
              >
                {goal.title}
                <span
                  className={`block h-1 w-12 bg-gradient-to-r
                    ${primaryColor} rounded-full mx-auto mt-1`}
                />
              </h3>
              <p className="text-gray-700 text-center leading-relaxed text-sm md:text-sm">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};