import React, { useEffect } from 'react';
import { Star, ArrowRight } from 'lucide-react';
import AboutSection from '../components/AboutSection';
import { SummerCampCarousel } from '../components/SummerActivities';
import ScheduleCard from '../components/ScheduleCard';
import { Goals } from '../components/Goals';
import MeetTheTeam from '../components/MeetTheTeam';
import { SummerFooter } from '../components/SummerFooter';

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

export const SummerCampSite: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  const activities: Activity[] = [
    {
      id: 1,
      name: "AstroGeo",
      shortDescription: "A thrilling expedition through space and ancient worlds!",
      description: "A thrilling expedition through space and ancient worlds! This module blends astronomy with geography, taking students on a multidimensional learning journey.",
      image: "https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg",
      weeks: [
        {
          title: "Week 1: Fun Facts Flip Cards & AstroGeo Buzz Quiz",
          description: "Students write surprising or fun facts about space or world geography on flashcards, then test classmates by flipping the card to guess if it's true or false. The week culminates in a high-energy \"AstroGeo Buzz Quiz\" where teams compete in answering astronomy and geography trivia questions with buzzers."
        },
        {
          title: "Week 2: Ancient Geography Activities",
          description: "Students research ancient civilizations and create interactive board games tracing famous trade routes like the Silk Road. Then, they write fictional diary entries from the perspective of explorers like Aryabhata or Megasthenes, describing their imagined discoveries."
        },
        {
          title: "Week 3: Sun Telescope Session",
          description: "Using certified solar telescopes and safety filters, students observe sunspots and solar flares. Volunteers and facilitators guide them through the science of solar energy and space weather."
        },
        {
          title: "Week 4: Movie Screening – Interstellar",
          description: "Students enjoy a screening of Interstellar, followed by a guided discussion linking the film's scientific elements (black holes, time dilation, space travel) to real astrophysics concepts."
        }
      ]
    },
    {
      id: 2,
      name: "Product Development & Selling",
      shortDescription: "A crash course in innovation and entrepreneurship!",
      description: "A crash course in innovation and entrepreneurship where students turn ideas into tangible prototypes and pitch them like real startup founders.",
      image: "/Activities/ProductDev.png",
      weeks: [
        {
          title: "Week 1: Product Creation",
          description: "Students are introduced to the concept of entrepreneurship through real-world examples. They brainstorm innovative solutions to everyday problems, focusing on user needs and ethical design."
        },
        {
          title: "Week 2: Prototype Sketching",
          description: "Working in teams, students create rough lo-fi sketches of their product designs, label features, and present their idea using storytelling techniques and peer feedback."
        },
        {
          title: "Week 3: Clay Modelling",
          description: "Each team builds a 3D prototype using clay, encouraging hands-on exploration of shape, scale, and functionality."
        },
        {
          title: "Week 4: Product Pitching",
          description: "Teams present their business idea, sketch, and clay model to a mock panel of \"investors\" (volunteers or teachers) in a simulated Shark Tank-style event. Emphasis is placed on clarity, confidence, and persuasive communication."
        }
      ]
    },
    {
      id: 3,
      name: "Experimental Sciences",
      shortDescription: "Discover science the fun way through simple experiments!",
      description: "Discover science the fun way through simple experiments that demonstrate fascinating natural phenomena.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg",
      weeks: [
        {
          title: "Week 1: Traveling Water Experiment",
          description: "Students use glasses, colored water, and tissue paper to explore capillary action and water movement. This visually appealing experiment sparks discussions on plant biology and fluid dynamics."
        },
        {
          title: "Week 2: Chromatography with Ink",
          description: "Using filter paper, markers, and water, students separate ink into its color components. This activity introduces them to scientific observation, solubility, and chemical properties."
        },
        {
          title: "Week 3: Slime & Oobleck",
          description: "Students create gooey slime and non-Newtonian fluids like oobleck, then test their properties through touch, bounce, and pressure. They compare the differences between solids and liquids in a tactile way."
        },
        {
          title: "Week 4: DIY Pinhole Camera",
          description: "By crafting simple pinhole cameras with cardboard, students observe the basics of light and lens behavior, learning how images are projected and inverted."
        }
      ]
    },
    {
      id: 4,
      name: "Critical Reasoning",
      shortDescription: "Stimulating activities that strengthen logical thinking!",
      description: "Stimulating activities that strengthen logical thinking, numerical skills, and general knowledge.",
      image: "/Activities/CriticalReasoning.png",
      weeks: [
        {
          title: "Week 1: General Knowledge & Current Affairs",
          description: "Daily warm-up includes \"Who Am I?\" where students guess Indian personalities using clues. Activities include labelling Indian maps and an interactive Kahoot quiz to test what they've learned."
        },
        {
          title: "Week 2: Numerical Ability & Mental Math",
          description: "Students use a pretend ₹200 budget and a canteen menu to solve real-world math problems. They also conduct and chart surveys to practice statistical thinking."
        },
        {
          title: "Week 3: Quantitative Reasoning",
          description: "A classroom treasure hunt where clues involve solving algebraic equations (e.g., \"2x + 3 = 9\") to move to the next stage."
        },
        {
          title: "Week 4: Logical & Analytical Reasoning",
          description: "Students physically act out seating arrangement puzzles and crack secret messages using logical codes, fostering problem-solving in an interactive way."
        }
      ]
    },
    {
      id: 5,
      name: "Introduction to AI",
      shortDescription: "Dive into the exciting world of Artificial Intelligence!",
      description: "Dive into the exciting world of Artificial Intelligence, exploring how tools like ChatGPT work and how AI impacts our daily lives.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      weeks: [
        {
          title: "Week 1: How ChatGPT Works",
          description: "Students are introduced to the basics of Artificial Intelligence, including how chatbots understand and respond to language. They learn about large language models, natural language processing, and their real-world applications."
        },
        {
          title: "Week 2: Problem Solving with ChatGPT",
          description: "Students interact with ChatGPT to brainstorm ideas, answer creative questions, and solve puzzles or write stories. They understand how AI can be a helpful assistant in day-to-day tasks."
        },
        {
          title: "Week 3: Image Generation & Debugging",
          description: "Using AI tools such as DALL·E or similar, students generate images from text prompts and discuss the logic behind them. They also explore basic debugging in chatbot interactions."
        },
        {
          title: "Week 4: Fun Things with ChatGPT",
          description: "Students use AI to create jokes, write poems, plan imaginary trips, or simulate conversations with historical characters. The week focuses on creativity and imagination with AI tools."
        }
      ]
    },
    {
      id: 6,
      name: "Dramatics",
      shortDescription: "An expressive space to develop creativity and confidence!",
      description: "An expressive space to develop creativity, performance confidence, and team storytelling.",
      image: "/Activities/Dramatics.png",
      weeks: [
        {
          title: "Week 1: Improv Acting",
          description: "Students are given spontaneous prompts and must act out scenes for 8–9 minutes. This activity boosts confidence, imagination, and on-the-spot thinking."
        },
        {
          title: "Week 2: Skit Presentation",
          description: "Students form groups and work together to rehearse and perform short skits based on themes provided earlier, like social messages or humorous situations."
        },
        {
          title: "Week 3: Character Creation",
          description: "Using props and storytelling prompts, students develop unique characters and act them out within improvised or semi-structured stories."
        },
        {
          title: "Week 4: Nukkad Naatak",
          description: "Each group performs a short street play in front of peers. Topics range from environmental awareness to social justice, giving students the chance to perform meaningfully in public."
        }
      ]
    },
    {
      id: 7,
      name: "Playzone",
      shortDescription: "A high-energy zone designed to build teamwork and coordination!",
      description: "A high-energy zone designed to build teamwork, coordination, and pure joy through classic games.",
      image: "/Activities/Playzone.png",
      weeks: [
        {
          title: "Week 1: Newspaper Game",
          description: "A game that involves tearing and folding newspapers to create shapes, letters, or solve puzzles while enhancing coordination."
        },
        {
          title: "Week 2: Twister",
          description: "Students play the classic game of Twister which improves flexibility and balance."
        },
        {
          title: "Week 3: Simon Says",
          description: "A fast-paced, fun game focusing on listening and reflexes."
        },
        {
          title: "Week 4: Fire in the Mountain",
          description: "A large group game that encourages alertness and movement, played in open areas."
        }
      ]
    },
    {
      id: 8,
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
    },
    {
      id: 9,
      name: "Public Speaking",
      shortDescription: "Build articulation and self-confidence!",
      description: "Build articulation and self-confidence with structured speaking and listening activities.",
      image: "/Activities/PublicSpeaking.png",
      weeks: [
        {
          title: "Week 1: Self-Introduction",
          description: "Students introduce themselves to the class and talk about their hobbies, goals, and interests for 5 minutes."
        },
        {
          title: "Week 2: Show & Tell",
          description: "Students bring a personal item from home and explain its story or significance."
        },
        {
          title: "Week 3: Storytelling Circle",
          description: "A chain storytelling activity where each student continues the story from where the last one left off."
        },
        {
          title: "Week 4: Debate",
          description: "Students are divided into groups and debate friendly topics with the help of volunteers, encouraging structured argument and confidence."
        }
      ]
    },
    {
      id: 10,
      name: "Arts and Crafts",
      shortDescription: "A colorful hands-on space for artistic expression!",
      description: "A colorful hands-on space for artistic expression and crafting innovation.",
      image: "https://images.pexels.com/photos/159644/art-supplies-brushes-rulers-scissors-159644.jpeg",
      weeks: [
        {
          title: "Week 1: Paper Plate Art",
          description: "Students use paper plates, scissors, and colors to make creative masks or animal faces."
        },
        {
          title: "Week 2: Origami",
          description: "Introduction to two fun origami designs with hands-on creation of paper planes, animals, or flowers."
        },
        {
          title: "Week 3: Greeting Cards",
          description: "Students design handmade greeting cards using craft paper, sketch pens, and glitter for someone they admire."
        },
        {
          title: "Week 4: Toothpick, Popsicle or Clay Art",
          description: "Students create miniature structures or abstract art using sticks and clay, then present their art in class."
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
    <div className="min-h-screen bg-yellow-50">
        {/* Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 pattern-grid opacity-20" />
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-yellow-400/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-yellow-400/20 to-transparent" />

          {/* Decorative Shapes */}
          <div className="absolute top-20 left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-400 rounded-xl rotate-12 opacity-20 animate-float" />
          <div className="absolute bottom-20 right-20 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600 rounded-xl -rotate-12 opacity-20 animate-float" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 summer-outline opacity-20 animate-float" />
        </div>

        {/* Header */}
        <header className="fixed top-0 w-full z-50 px-4 sm:px-6 py-4 bg-yellow-50/70 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="summer-card bg-white p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
              <div className="flex items-center gap-4">
                <img src="/SummerCampLogo.svg" className="h-12 w-12 md:h-16 md:w-16 text-yellow-400" />
                <span className="text-xl md:text-2xl font-black text-blue-600">
                  SUMMER CAMP 2025
                </span>
              </div>
              <nav className="hidden md:flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6 text-sm sm:text-base">
                <a href="#about" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">About</a>
                <a href="#activities" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Activities</a>
                <a href="#schedule" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Schedule</a>
                {/* <a href="#gallery" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Gallery</a> */}
                <a href="#goals" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">Goals</a>
                <a href="#team" className="text-blue-600 font-bold hover:text-yellow-400 transition-colors">The Team</a>
                <a href="https://shorturl.at/XUKlf">
                  <button className="summer-button">
                    Register Now <ArrowRight className="inline-block ml-2" />
                  </button>
                </a>
                <button 
                  onClick={() => window.location.reload()} 
                  className="summer-button bg-gray-200 text-blue-600 hover:bg-yellow-400 hover:text-white transition-colors"
                  >
                  Back
              </button>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative pt-40 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="summer-card bg-white p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <img 
                    src="/SummerCamp2025.png" 
                    alt="Summer Camp 2025" 
                    className="mx-auto h-40 sm:h-56 w-auto mb-6"
                  />
                  
                  <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
                    <span className="text-yellow-400 bold-shadow block">KINDLE YOUR CURIOSITY,</span>
                    <span className="text-blue-600 bold-shadow block">CODE YOUR</span>
                    <span className="text-blue-600 bold-shadow block">FUTURE!!</span>
                  </h1>

                  <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                    <span className="font-semibold text-blue-600 block mb-2">
                      Only for Delhi Government School Students
                    </span>
                    <span className="text-base sm:text-lg text-gray-800">
                      Summer Camp is scheduled from{" "}
                      <span className="font-extrabold text-yellow-500">
                        June 2, 2025 to June 27, 2025
                      </span>
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center sm:justify-start gap-4">
                    <a href="https://shorturl.at/XUKlf">
                      <button className="summer-button w-full sm:w-auto">
                        Register Now <ArrowRight className="inline-block ml-2" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="summer-outline p-2 max-w-sm mx-auto">
                    <img 
                      src="/SummerCampLogo.svg"
                      alt="Summer Camp"
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6">
                    <div className="summer-card bg-white p-4">
                      <Star className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400" />
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
          <div className="summer-card bg-white p-8 md:p-12">
            <AboutSection theme = "summer" />
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="relative py-16 px-6" id="activities">
        <div className="max-w-7xl mx-auto">
          <div className="summer-card bg-white p-8 md:p-12">
            <SummerCampCarousel activities={activities}/>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="relative py-16 px-6" id="schedule">
        <div className="max-w-7xl mx-auto">
          <div className="summer-card bg-white p-8 md:p-12">
            <ScheduleCard image={"/SummerSchedule.png"} title={"Summer Camp Schedule"} description={"Looking forward to meeting you"} />
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="summer-card bg-white p-8 md:p-12">
            <Goals goals={goals} theme="summer" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-16 px-6" id = "team">
        <div className="max-w-7xl mx-auto">
          <div
            className= "summer-card bg-white p-8 md:p-12"
          >
            <MeetTheTeam theme="summer" />
          </div>
        </div>
      </section>

      <SummerFooter />
    </div>
  );
};