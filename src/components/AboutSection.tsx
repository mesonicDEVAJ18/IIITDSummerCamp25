import React from "react";

interface AboutSectionProps {
  theme: "summer" | "tlf";
}

const AboutSection: React.FC<AboutSectionProps> = ({ theme }) => {
  // Define colors based on theme
  const primaryTextColor = theme === "summer" ? "text-yellow-500" : "text-blue-600";
  const secondaryTextColor = theme === "summer" ? "text-blue-700" : "text-yellow-400";
  const backgroundColor = theme === "summer" ? "bg-yellow-50" : "bg-blue-50";

  return (
    <section className={`${backgroundColor} py-16 px-6 md:px-20`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Accent Bar */}
        <div className={`hidden md:block w-1 rounded-full h-48 self-start ${secondaryTextColor}`}></div>

        {/* Text Content */}
        <div className="space-y-8">
          <h2 className={`text-5xl font-extrabold leading-tight ${primaryTextColor}`}>
            About Summer Camp IIITD
          </h2>

          <div>
            <h3 className={`text-2xl font-semibold mb-2 ${secondaryTextColor}`}>
              A Unique Initiative
            </h3>
            <p className={`text-lg leading-relaxed ${primaryTextColor}`}>
              Summer Camp IIITD is a wonderful initiative by the students of the
              Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi),
              offering a unique blend of education and entertainment for students
              from government schools.
            </p>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-2 ${secondaryTextColor}`}>
              Our Aim
            </h3>
            <p className={`text-lg leading-relaxed ${primaryTextColor}`}>
              The camp provides an environment for learning, exploration, and fun,
              fostering confidence, aspirations, and skills in various fields.
            </p>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-2 ${secondaryTextColor}`}>
              Engaging Activities
            </h3>
            <p className={`text-lg leading-relaxed ${primaryTextColor}`}>
              Through a range of activities, workshops, and sessions, we instill
              curiosity and a love for learning in young minds.
            </p>
          </div>

          <div>
            <h3 className={`text-2xl font-semibold mb-2 ${secondaryTextColor}`}>
              Empowering the Future
            </h3>
            <p className={`text-lg leading-relaxed ${primaryTextColor}`}>
              Helping students grow into well-rounded individuals equipped to face
              challenges with confidence and enthusiasm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;