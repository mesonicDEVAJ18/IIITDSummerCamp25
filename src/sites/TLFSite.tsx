import React, { useEffect } from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import { TLFCarousel } from '../components/TLFSubjects';
import ScheduleCard from '../components/ScheduleCard'
import { Goals } from '../components/Goals';
import MeetTheTeam from "../components/MeetTheTeam";
import { TLFFooter } from '../components/TLFFooter';

type Activity = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  weeks: {
    title: string;
    description: string;
  }[];
};

export const TLFSite: React.FC = () => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }, []);
  
  const Activities: Activity[] = [
    {
      id: 11,
      name: "Maths",
      shortDescription: "Interactive math activities that connect numbers to the real world!",
      description: "Interactive math activities that connect numbers to the real world.",
      image: "/Activities/Maths.png",
      weeks: [
        {
          title: "Week 1: Real-Life Data Modelling",
          description: "Students collect and analyze local data, such as a school survey on favorite subjects or snacks. They create charts and graphs to visualize trends and patterns, learning how to interpret data meaningfully."
        },
        {
          title: "Week 2: Math Escape Room",
          description: "An engaging puzzle-based activity where students solve geometry and algebra problems to \"unlock\" successive clues and escape a themed classroom scenario, promoting teamwork and critical thinking."
        },
        {
          title: "Week 3: Finance Simulation",
          description: "Students participate in a mock investment game where they calculate interest, compare returns on investment (ROI), and understand basic financial principles through role-play scenarios."
        },
        {
          title: "Week 4: Statistical Storytelling",
          description: "Using real data from their college or community, students create compelling narratives through charts and statistical analysis, presenting insights in a creative and accessible way."
        }
      ]
    },
    {
      id: 12,
      name: "Physics",
      shortDescription: "Make physics tangible with creative and hands-on demonstrations!",
      description: "Make physics tangible with creative and hands-on demonstrations.",
      image: "/Activities/Physics.png",
      weeks: [
        {
          title: "Week 1: Build a Basic Circuit",
          description: "Students use batteries, wires, bulbs, and switches to construct simple electrical circuits. This hands-on activity demonstrates concepts of current, voltage, and resistance in an interactive manner."
        },
        {
          title: "Week 2: Projectile Motion Demo",
          description: "By launching paper planes at different angles, students explore the physics of projectile motion, learning about the relationship between launch angle and distance traveled."
        },
        {
          title: "Week 3: DIY Newton's Cradle",
          description: "Divided into groups, students build their own Newton's Cradle using balls or marbles to understand momentum, energy conservation, and Newton's Laws of Motion practically."
        },
        {
          title: "Week 4: Energy Hunt",
          description: "Students identify and document examples of energy transformation (kinetic, potential, thermal, etc.) around the school campus, fostering observational skills and applying physics concepts to everyday life."
        }
      ]
    },
    {
      id: 13,
      name: "English",
      shortDescription: "An immersive dive into the world of language and self-expression!",
      description: "An immersive dive into the world of language, ideas, and self-expression.",
      image: "/Activities/English.png",
      weeks: [
        {
          title: "Week 1: Story Remix",
          description: "Students rewrite a classic short story by adding a modern twist or alternative ending, encouraging creativity and narrative skills."
        },
        {
          title: "Week 2: Dialogue Writing",
          description: "In groups, students select a setting (e.g., coffee shop, courtroom, haunted house) and write a short dialogue-based scene (1-2 pages), focusing on character interaction and dialogue flow."
        },
        {
          title: "Week 3: Editorial Writing",
          description: "Students compose opinion pieces on relevant topics such as technology in education or youth activism, developing persuasive writing and argumentation skills."
        },
        {
          title: "Week 4: Book Talk Showcase",
          description: "Each student presents their favorite novel or poem, either through a self-made video or live presentation, sharing insights and encouraging literary appreciation."
        }
      ]
    },
    {
      id: 14,
      name: "Computer Science",
      shortDescription: "Experience the foundation of digital creativity and coding!",
      description: "Experience the foundation of digital creativity and coding.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      weeks: [
        {
          title: "Week 1: HTML Profile Page",
          description: "Students create a basic personal webpage using HTML and CSS, learning foundational web development skills."
        },
        {
          title: "Week 2: Binary Code Bookmark",
          description: "Students convert their initials into binary code and design color-coded bookmarks representing the binary digits, linking computer science concepts with art."
        },
        {
          title: "Week 3: App Design Sketch",
          description: "In groups, students plan an app interface addressing a social issue like mental health or recycling, focusing on usability and design thinking."
        },
        {
          title: "Week 4: Tech Talk",
          description: "Students deliver short presentations (6-7 minutes) on tech concepts such as Artificial Intelligence, blockchain, or open-source software, enhancing research and public speaking skills."
        }
      ]
    },
    {
      id: 15,
      name: "General Testing & Aptitude",
      shortDescription: "Strengthen reasoning and problem-solving through challenges!",
      description: "Strengthen reasoning, problem-solving, and analysis through challenges.",
      image: "/Activities/GeneralTest.png",
      weeks: [
        {
          title: "Week 1: Logic Puzzle Hour",
          description: "Students solve a variety of pattern recognition, coding-decoding, and sequence puzzles designed to boost reasoning abilities."
        },
        {
          title: "Week 2: Case Study Analysis",
          description: "Working in groups, students analyze ethical or logic dilemmas (e.g., disaster response scenarios) and present their solutions, fostering collaborative problem-solving."
        },
        {
          title: "Week 3: Logic Grid Tournament",
          description: "Competitive games where students use verbal clues to solve logic grid puzzles, developing deduction and inference skills."
        },
        {
          title: "Week 4: Mastermind Quiz",
          description: "Teams engage in a rapid-fire quiz covering aptitude, reasoning, and general knowledge to test and reinforce their learning."
        }
      ]
    },
    {
      id: 16,
      name: "Design & Fashion",
      shortDescription: "Channel your style and sustainability sense into tangible creations!",
      description: "Channel your style and sustainability sense into tangible creations.",
      image: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg",
      weeks: [
        {
          title: "Week 1: Mood Board Making",
          description: "Students create mood boards based on assigned fashion themes like \"Eco-future,\" exploring colors, textures, and concepts."
        },
        {
          title: "Week 2: Upcycling Design Sprint",
          description: "Students bring old T-shirts from home and transform them into useful accessories like bags or wallets, promoting sustainability and creativity."
        },
        {
          title: "Week 3: Style a Lookbook",
          description: "Using sketches or digital tools like Canva, students design a three-outfit collection showcasing their fashion ideas."
        },
        {
          title: "Week 4: Fashion Exhibition",
          description: "A showcase where students display their mood boards, sketches, and upcycled products, explaining the inspiration and process behind each creation."
        }
      ]
    },
    {
      id: 17,
      name: "Shark Tank",
      shortDescription: "A startup simulator that teaches ideation and business pitching!",
      description: "A startup simulator that teaches ideation, planning, and business pitching.",
      image: "/Activities/SharkTank.png",
      weeks: [
        {
          title: "Week 1: Introduction and Problem-Solution Ideation",
          description: "Students identify real-world problems and brainstorm potential startup solutions, learning the basics of entrepreneurship."
        },
        {
          title: "Week 2: Business Model Canvas",
          description: "Students develop simple business plans covering target audience, costs, revenue, and promotion strategies."
        },
        {
          title: "Week 3: Pitch Practice",
          description: "Students deliver 1-minute elevator pitches to peers and receive constructive feedback to improve their communication."
        },
        {
          title: "Week 4: Investor Meet Day",
          description: "Final business pitches are presented to a panel of volunteers acting as investors, providing a simulated real-world experience."
        }
      ]
    },
    {
      id: 18,
      name: "Theatre and Dance",
      shortDescription: "Unleash your expressive side with performance and storytelling!",
      description: "Unleash your expressive side with performance, storytelling, and rhythm.",
      image: "/Activities/Dramatics.png",
      weeks: [
        {
          title: "Week 1: Introduction to Dance Forms & Techniques",
          description: "Students learn basics of different dance styles, followed by freestyle dancing to songs of their choice for 2–2.5 minutes."
        },
        {
          title: "Week 2: Skit Performance",
          description: "Divided into groups, students rehearse and perform skits on assigned topics, developing teamwork and stage presence."
        },
        {
          title: "Week 3: Western Choreography",
          description: "Students learn a western dance routine and then form groups to showcase the choreography."
        },
        {
          title: "Week 4: Character Creation",
          description: "Groups perform improv acting based on stories from the storytelling circle or original scenes, focusing on character development and expression."
        }
      ]
    },
    {
      id: 19,
      name: "Mystery Labs",
      shortDescription: "Investigate and solve mysteries with STEM-based challenges!",
      description: "Investigate, experiment, and solve mysteries with STEM-based challenges.",
      image: "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
      weeks: [
        {
          title: "Week 1: Mini Mystery Box",
          description: "Students use sensory clues to guess unknown objects inside boxes, practicing observation and hypothesis formulation."
        },
        {
          title: "Week 2: Forensic Basics",
          description: "Students analyze handwriting samples and fingerprints in a staged case file to learn forensic science fundamentals."
        },
        {
          title: "Week 3: STEM Challenge",
          description: "Groups build towers or bridges using straws and tape, then test their structural strength."
        },
        {
          title: "Week 4: Crime Lab Wrap-Up",
          description: "A final group challenge combining all learned forensic and STEM skills to solve a mock crime mystery."
        }
      ]
    },
    {
      id: 20,
      name: "Indoor Sports",
      shortDescription: "A mix of recreational and skill-based indoor games!",
      description: "A mix of recreational and skill-based indoor games fostering discipline and friendly competition.",
      image: "/Activities/IndoorSports.png",
      weeks: [
        {
          title: "Week 1: Table Tennis",
          description: "Students learn basic table tennis rules and participate in friendly matches."
        },
        {
          title: "Week 2: Foosball",
          description: "A fun tabletop game that teaches reflexes, coordination, and teamwork."
        },
        {
          title: "Week 3: Chess & Carrom",
          description: "Mental and strategic games that develop critical thinking and patience."
        },
        {
          title: "Week 4: Yoga",
          description: "Introduction to yoga postures, breathing exercises, and mindfulness to promote physical and mental wellness."
        }
      ]
    }
  ];

const goals: {
  icon: "target" | "award" | "star";
  title: string;
  description: string;
}[] = [
  {
    icon: 'star',
    title: 'Inspiration',
    description: 'Ignite passion and curiosity to drive meaningful learning journeys'
  },
  {
    icon: 'target',
    title: 'Aspiration',
    description: 'Cultivate ambition and set purposeful personal and professional goals'
  },
  {
    icon: 'award',
    title: 'Confidence',
    description: 'Build self-assurance through growth, feedback, and achievement'
  },
  {
    icon: 'target',
    title: 'Broadening Possibilities',
    description: 'Open doors to diverse career paths and future opportunities'
  },
  {
    icon: 'star',
    title: 'Improving Communication Skills',
    description: 'Enhance clarity, expression, and collaboration in every interaction'
  },
  {
    icon: 'star',
    title: 'Creativity',
    description: 'Encourage original thinking and innovation in every endeavor'
  },
  {
    icon: 'award',
    title: 'Unleashing Potential',
    description: 'Empower individuals to realize and reach their full capabilities'
  },
  {
    icon: 'target',
    title: 'Problem Solving',
    description: 'Develop critical thinking to tackle real-world challenges effectively'
  },
  {
    icon: 'star',
    title: 'Expanding Imagination',
    description: 'Stimulate visionary thinking and explore beyond the conventional'
  }
];

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-blue-600/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-blue-600/20 to-transparent" />
        
        {/* Decorative Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600 rounded-full opacity-20 animate-float" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-yellow-400 rounded-full opacity-20 animate-float" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 tlf-outline opacity-20 animate-float" />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="tlf-card bg-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img src = "TLFLogo.svg" className="h-10 w-10 text-blue-600" />
              <span className="text-2xl font-black">
                <span className="text-blue-600">TEACH LIKE A</span>
                <span className="text-yellow-400">FRIEND</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">About</a>
              <a href="#subjects" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Subjects</a>
              <a href="#schedule" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Schedule</a>
              {/* <a href="#gallery" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Gallery</a> */}
              <a href="#goals" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Goals</a>
              <a href="#team" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">The Team</a>
              <a href="https://shorturl.at/XUKlf">
                <button className="tlf-button">
                  Join Program <ArrowRight className="inline-block ml-2" />
                </button>
              </a>
              <button 
                onClick={() => window.location.reload()} 
                className="tlf-button bg-gray-200 text-blue-600 hover:bg-yellow-400 hover:text-white transition-colors"
                >
                Back
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tlf-card bg-white p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-6xl md:text-7xl font-black mb-6">
                  <span className="text-blue-600 bold-shadow">TEACH</span>
                  <br />
                  <span className="text-gray-800 bold-shadow">LIKE A</span>
                  <br />
                  <span className="text-yellow-400 bold-shadow">FRIEND</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                  <span className="font-semibold text-blue-600 block">
                    Only for Delhi Government School Students
                  </span>
                  <span className="text-lg md:text-xl text-gray-800">
                    Summer Camp is scheduled from{" "}
                    <span className="font-extrabold text-yellow-500">
                      June 2, 2025 to June 27, 2025
                    </span>
                  </span>
                </p>
                <p className="text-xl text-blue-600 mb-8">
                  Join our innovative peer-to-peer teaching program
                </p>
                <div className="flex gap-4">
                  <a href="https://shorturl.at/XUKlf">
                    <button className="tlf-button">
                      Join Program <ArrowRight className="inline-block ml-2" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="tlf-outline p-2">
                  <img 
                    src="/TLFLogo.svg"
                    alt="Teaching"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6">
                  <div className="tlf-card bg-white p-4">
                    <Heart className="h-12 w-12 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-16 px-6" id="about">
        <div className="max-w-7xl mx-auto">
          <div className="tlf-card bg-white p-8 md:p-12">
            <AboutSection theme = "tlf" />
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="relative py-16 px-6" id="subjects">
        <div className="max-w-7xl mx-auto">
          <div className="summer-card bg-white p-8 md:p-12">
            <TLFCarousel activities={Activities}/>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative py-16 px-6" id="schedule">
        <div className="max-w-7xl mx-auto">
          <div className="tlf-card bg-white p-8 md:p-12">
            <ScheduleCard image={"/TLFSchedule.png"} title={"TLF Schedule"} description={"Looking forward to meeting you"} />
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="tlf-card bg-white p-8 md:p-12">
            <Goals goals={goals} theme="tlf" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-6" id = "team">
        <div className="max-w-7xl mx-auto">
          <div
            className= "tlf-card bg-white p-8 md:p-12"
          >
            <MeetTheTeam theme="tlf" />
          </div>
        </div>
      </section>

      <TLFFooter />
    </div>
  );
};