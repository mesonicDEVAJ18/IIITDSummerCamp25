import React from "react";

interface TeamMember {
  name: string;
  role: string;
  quote?: string;
  photo: string;
}

interface MeetTheTeamProps {
  theme: "summer" | "tlf";
}

const MeetTheTeam: React.FC<MeetTheTeamProps> = ({ theme }) => {
  const teamMembers: TeamMember[] = [
    { name: "Ranjan Bose", role: "IIIT Delhi Director", photo: "/People/RanjanBose.jpg" },
    { name: "Pankaj Jalote", role: "Faculty Coordinator", photo: "/People/PankajJalote.jpg" },
    { name: "Ravi Bhasin", role: "Academic Manager", photo: "/People/RaviBhasin.jpg" },
    { name: "Raju Biswas", role: "Academic Representative", photo: "/People/RajuBiswas.jpg" },
    {
      name: "Rahul Goel",
      role: "Mentor",
      quote: "Time doesn't stop for anyone, so enjoy every second to your fullest",
      photo: "/People/RahulGoel.jpg",
    },
    {
      name: "Dheeraj Arora",
      role: "Student Coordinator",
      quote:
        "The only thing standing between you and your goal is the story you keep telling yourself.",
      photo: "/People/DheerajArora.png",
    },
    {
      name: "Adamya Rangi",
      role: "Student Coordinator",
      quote:
        "The people who are crazy enough to think they can change the world are the ones who do.",
      photo: "/People/AdamyaRangi.png",
    },
    {
      name: "Tanish Goel",
      role: "Student Coordinator",
      quote: "It always seems impossible until it is done.",
      photo: "/People/TanishGoel.webp",
    },
    {
      name: "Anoushka Malik",
      role: "Student Coordinator",
      quote:
        "Growth doesn’t always come from textbooks — sometimes it comes from teamwork, trial, and a little mess.",
      photo: "/People/AnoushkaMalik.jpg",
    },
    {
      name: "Mayank Singh",
      role: "Student Coordinator",
      quote:
        "You don’t need to be perfect — just passionate. Try, explore, laugh, and learn.",
      photo: "/People/MayankSingh.jpg",
    },
  ];

  const faculty = teamMembers.slice(0, 4);
  const students = teamMembers.slice(4);

  const primaryColor = theme === "summer" ? "text-yellow-400" : "text-blue-600";
  const secondaryColor = theme === "summer" ? "text-blue-600" : "text-yellow-400";
  const bgColor = theme === "summer" ? "bg-yellow-50" : "bg-blue-50";

  const renderGrid = (members: TeamMember[]) => (
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {members.map(({ name, role, quote, photo }, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
        >
          <img
            src={photo}
            alt={name}
            className={`w-34 h-34 object-cover rounded-full mx-auto mb-6 border-4 ${primaryColor}`}
            loading="lazy"
          />
          <div>
            <h3 className={`text-xl font-semibold ${secondaryColor}`}>{name}</h3>
            <p className={`font-medium mb-4 ${primaryColor}`}>{role}</p>
          </div>
          {quote && (
            <blockquote
              className={`text-sm italic border-l-4 pl-4 ${primaryColor} border-current`}
            >
              “{quote}”
            </blockquote>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className={`${bgColor} py-16 px-6 md:px-12`} id="team">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className={`text-4xl font-extrabold mb-2 ${primaryColor}`}>
          Meet The Team
        </h2>
        <p className={`text-lg max-w-3xl mx-auto ${secondaryColor}`}>
          The dedicated people behind Summer Camp IIITD.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        <div>
          <h3 className={`text-2xl font-bold text-center mb-10 underline underline-offset-8 ${primaryColor}`}>
            Faculty & Academic Staff
          </h3>
          {renderGrid(faculty)}
        </div>

        <div>
          <h3 className={`text-2xl font-bold text-center mt-16 mb-10 underline underline-offset-8 ${secondaryColor}`}>
            Student Team
          </h3>
          {renderGrid(students)}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;