import React, { useState } from 'react';
import { Mail } from 'lucide-react';

function Home() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Frontend Developer",
      shortDesc: "Specialist in React.js and modern UI development with Tailwind CSS",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: [
        "React.js Development",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Implementation",
        "Frontend Architecture",
        "State Management",
        "Component Design",
        "Performance Optimization"
      ]
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      shortDesc: "Python & Django expert, building robust server-side solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: [
        "Python Development",
        "Django Framework",
        "RESTful APIs",
        "Database Design",
        "Django ORM",
        "Authentication & Security",
        "API Integration",
        "Server Configuration",
        "Backend Architecture"
      ]
    },
    {
      name: "Emily Rodriguez",
      role: "Project Manager",
      shortDesc: "Agile methodologies expert",
      image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=400",
      skills: [
        "Project planning",
        "Client communication",
        "Resource management",
        "Quality assurance",
        "Agile/Scrum",
        "Risk management",
        "Stakeholder management",
        "Budget planning",
        "Team leadership"
      ]
    }
  ];

  return (
    <div className='min-h-screen bg-slate-50'>
      <section className='py-12 sm:py-16 md:py-20 bg-cyan-900 text-white'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4'>
            <div className='text-center md:text-left w-full md:w-auto'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4'>A&N Corps</h1>
              <p className='text-base sm:text-lg md:text-xl mb-4 sm:mb-6 px-4 sm:px-0'>
                Crafting modern web experiences with precision and passion
              </p>
              <div
                className='inline-flex items-center gap-2 bg-white text-cyan-900 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold
                          hover:bg-cyan-50 transition-colors duration-200 shadow-lg text-sm sm:text-base'
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className='break-all'>anwebco@gmail.com</span>
              </div>
            </div>
            <div className='relative'>
              <div className='w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 sm:border-8 border-cyan-50'>
                <div className='flex flex-col items-center'>
                  <div className='text-4xl sm:text-5xl font-black tracking-tighter'>
                    <span className='text-cyan-900'>A</span>
                    <span className='text-cyan-500 font-thin'>+</span>
                    <span className='text-cyan-900'>N</span>
                  </div>
                  <div className='text-[0.6rem] sm:text-xs tracking-[0.3em] text-cyan-600 font-semibold mt-1'>
                    DIGITAL CORPS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-8 sm:py-12 md:py-16'>
        <div className='container mx-auto px-4 sm:px-6'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center md:text-left'>Our Team</h2>
        </div>
      </section>

      {teamMembers.map((member, index) => (
        <section key={index} className='py-8 sm:py-12 md:py-16 border-b last:border-b-0'>
          <div className='container mx-auto px-4 sm:px-6'>
            <div className='flex flex-col items-center gap-6 sm:gap-8'>
              <div className='w-full flex justify-center'>
                <img
                  src={member.image}
                  alt={member.name}
                  className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover shadow-lg'
                />
              </div>
              <div className='w-full text-center md:text-left'>
                <h2 className='text-2xl sm:text-3xl font-bold mb-3 sm:mb-4'>{member.name}</h2>
                <h3 className='text-lg sm:text-xl text-cyan-700 mb-3 sm:mb-4'>{member.role}</h3>
                <p className='text-base sm:text-lg mb-4 sm:mb-6 px-2 sm:px-0'>{member.shortDesc}</p>
                <div className='bg-gray-50 p-4 sm:p-6 rounded-lg'>
                  <h4 className='font-bold text-lg sm:text-xl mb-3 sm:mb-4'>Skills & Expertise:</h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left'>
                    {member.skills.map((skill, idx) => (
                      <div key={idx} className='flex items-center'>
                        <div className='w-2 h-2 bg-cyan-700 rounded-full mr-2 flex-shrink-0'></div>
                        <span className='text-sm sm:text-base'>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Home;
