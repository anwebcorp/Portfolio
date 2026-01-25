import React, { useState } from 'react';
import { Mail, Code, Briefcase, Users, ArrowRight, CheckCircle, Menu, X, Phone, MessageCircle, Zap } from 'lucide-react';

function Home() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const teamMembers = [
    {
      name: "Arslan Khan",
      role: "Frontend Developer",
      shortDesc: "Expert in modern frontend frameworks and responsive UI design",
      image: "/WhatsApp Image 2025-11-05 at 05.38.17_f9aca8a0.jpg",
      skills: [
        "React.js Development",
        "Vue.js Framework",
        "Next.js & SSR",
        "JavaScript (ES6+)",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "State Management (Redux, Vuex)",
        "UI/UX Implementation",
        "Component Architecture",
        "Performance Optimization"
      ]
    },
    {
      name: "Muhammad Naveed",
      role: "Backend Developer & Automation Specialist",
      shortDesc: "Python expert specializing in API development, workflow automation, and AI integration",
      image: "/WhatsApp Image 2025-11-05 at 05.38.17_4c0b2242.jpg",
      skills: [
        "Python Development",
        "Django REST Framework (DRF)",
        "FastAPI Framework",
        "N8N Workflow Automation",
        "LangChain & AI Integration",
        "RESTful APIs",
        "Database Design",
        "Authentication & Security",
        "API Integration",
        "Automation Scripts",
        "Backend Architecture"
      ]
    },
    {
      name: "Abdul Rehman",
      role: "Backend Developer & Database Architect",
      shortDesc: "Specialized in building scalable backends with Django, FastAPI, and complex database solutions",
      image: "https://i.pinimg.com/736x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg",
      skills: [
        "Django Framework",
        "FastAPI Development",
        "SQL Databases",
        "PostgreSQL & MySQL",
        "Database Design & Optimization",
        "ORM (Django ORM, SQLAlchemy)",
        "API Development",
        "Server Configuration",
        "Data Modeling",
        "Query Optimization",
        "Backend Security"
      ]
    }
  ];

  const projects = [
    {
      name: "Employee Management System",
      description: "A comprehensive HR solution for managing employee data, attendance, and payroll",
      details: [
        "Employee information management with detailed profiles",
        "Attendance tracking with real-time dashboard",
        "Leave management system with approval workflows",
        "Payroll processing and salary slip generation",
        "Performance evaluation module",
        "Department and role-based access control",
        "Monthly and annual reports generation"
      ],
      technologies: ["React.js/Vue.js", "FastAPI/DRF", "PostgreSQL", "Tailwind CSS"],
      color: "from-blue-50 to-indigo-50",
      accent: "bg-blue-600"
    },
    {
      name: "Accounts Management System",
      description: "Complete accounting solution for financial management and reporting",
      details: [
        "Chart of Accounts with hierarchical structure",
        "Journal entry and ledger management",
        "Automated debit/credit calculations",
        "Income statement and balance sheet generation",
        "Expense tracking and categorization",
        "Bank reconciliation module",
        "Financial reports and analytics",
        "Multi-currency support"
      ],
      technologies: ["Next.js", "FastAPI", "MySQL", "Charts.js"],
      color: "from-emerald-50 to-green-50",
      accent: "bg-emerald-600"
    },
    {
      name: "Workflow Automation Solutions",
      description: "Custom automation workflows using N8N integration",
      details: [
        "Email and notification automation",
        "Data synchronization between systems",
        "Scheduled task automation",
        "API-based workflow orchestration",
        "Error handling and retry mechanisms",
        "Custom webhook implementations",
        "Real-time event processing"
      ],
      technologies: ["N8N", "FastAPI", "LangChain", "Python"],
      color: "from-purple-50 to-indigo-50",
      accent: "bg-purple-600"
    }
  ];

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Business Automation",
      description: "N8N-based automation for streamlined workflows",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Enterprise Solutions",
      description: "Scalable backend systems and database design",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      {/* Fixed Navigation Header */}
      <nav className='fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800'>
        <div className='container mx-auto px-4 sm:px-6'>
          <div className='flex items-center justify-between h-16 sm:h-20'>
            {/* Logo */}
            <div className='flex items-center gap-2 cursor-pointer' onClick={() => scrollToSection('home')}>
              <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center'>
                <span className='text-white font-bold text-sm sm:text-base'>PY</span>
              </div>
              <span className='hidden sm:block text-white font-bold text-sm sm:text-base'>PyCode Solutions</span>
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-1'>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Contact Info */}
            <div className='hidden lg:flex items-center gap-3'>
              <a href='mailto:pycodesolutions14@gmail.com' className='text-gray-300 hover:text-white transition-colors flex items-center gap-1'>
                <Mail className="w-4 h-4" />
                <span className='text-sm'>pycodesolutions14@gmail.com</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className='md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors'
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className='md:hidden pb-4 border-t border-slate-800'>
              <div className='flex flex-col gap-2 pt-4'>
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 text-left ${
                      activeSection === item.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className='relative pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-20 md:pb-28 overflow-hidden px-3 sm:px-6'>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob'></div>
          <div className='absolute -bottom-8 left-0 sm:left-20 w-64 h-64 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        </div>

        <div className='container mx-auto px-0 sm:px-6 relative z-10'>
          <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-8'>
            <div className='w-full lg:w-1/2 text-center lg:text-left'>
              <div className='inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/30 rounded-full'>
                <span className='text-blue-400 text-xs sm:text-sm font-semibold'>Welcome to PyCode Solutions</span>
              </div>
              <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 text-white leading-tight px-3 sm:px-0'>
                PyCode <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>Solutions</span>
              </h1>
              <p className='text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl px-3 sm:px-0 leading-relaxed'>
                Delivering excellence in web development and business automation. Transform your ideas into powerful digital solutions with our expert team.
              </p>
              <div className='flex flex-col gap-3 sm:gap-4 justify-center lg:justify-start px-3 sm:px-0'>
                <button 
                  onClick={() => scrollToSection('services')}
                  className='w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base'>
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Get in Touch</span>
                </button>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className='w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base'>
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span>Contact Us</span>
                </button>
              </div>
            </div>

            <div className='w-full lg:w-1/2 flex justify-center px-3 sm:px-0'>
              <div className='relative'>
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30'></div>
                <div className='relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl flex items-center justify-center border border-gray-200'>
                  <div className='flex flex-col items-center'>
                    <div className='text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter mb-2'>
                      <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>PY</span>
                    </div>
                    <div className='text-xs tracking-widest text-gray-600 font-bold'>
                      CODE SOLUTIONS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-16 sm:py-24 md:py-28 border-b border-slate-800 px-3 sm:px-0'>
        <div className='container mx-auto px-0 sm:px-6'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4'>Our Services</h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-3 sm:px-0'>
              Comprehensive solutions tailored to elevate your business
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 px-3 sm:px-0'>
            {services.map((service, idx) => (
              <div key={idx} className='group relative h-full'>
                <div className='absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 hover:border-slate-600 rounded-2xl p-6 sm:p-8 transition-all duration-300 h-full flex flex-col'>
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} p-2.5 sm:p-3 mb-4 sm:mb-6 text-white shadow-lg flex-shrink-0`}>
                    {service.icon}
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3'>{service.title}</h3>
                  <p className='text-gray-400 leading-relaxed text-sm sm:text-base'>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-16 sm:py-24 md:py-28 border-b border-slate-800 px-3 sm:px-0'>
        <div className='container mx-auto px-0 sm:px-6'>
          <div className='text-center mb-12 sm:mb-16'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4'>Our Projects</h2>
            <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-3 sm:px-0'>
              Cutting-edge solutions delivered with precision
            </p>
          </div>

          <div className='space-y-6 sm:space-y-8 px-3 sm:px-0'>
            {projects.map((project, idx) => (
              <div key={idx} className='group'>
                <div className={`bg-gradient-to-br ${project.color} border border-gray-200/20 rounded-2xl p-6 sm:p-8 md:p-10 hover:border-gray-200/40 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className='mb-4 sm:mb-6'>
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3'>{project.name}</h3>
                    <p className='text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed'>{project.description}</p>
                  </div>

                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-300/30'>
                    <div>
                      <h4 className='font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4 flex items-center'>
                        <CheckCircle className='w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-700' />
                        Key Features
                      </h4>
                      <ul className='space-y-2 sm:space-y-3'>
                        {project.details.map((detail, i) => (
                          <li key={i} className='flex items-start text-gray-800 text-xs sm:text-sm md:text-base'>
                            <span className={`${project.accent} rounded-full p-1 mr-2 sm:mr-3 mt-0.5 flex-shrink-0`}>
                              <svg className='w-2.5 h-2.5 sm:w-3 sm:h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd'></path>
                              </svg>
                            </span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className='font-bold text-base sm:text-lg text-gray-900 mb-3 sm:mb-4 flex items-center'>
                        <Code className='w-4 h-4 sm:w-5 sm:h-5 mr-2' />
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {project.technologies.map((tech, i) => (
                          <span key={i} className={`${project.accent} text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold shadow-md`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Header */}
      <section id='team' className='py-12 sm:py-20 md:py-24 border-b border-slate-800'>
        <div className='container mx-auto px-4 sm:px-6 text-center'>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4'>Meet Our Team</h2>
          <p className='text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto'>
            Expert developers dedicated to your success
          </p>
        </div>
      </section>

      {/* Team Members */}
      {teamMembers.map((member, index) => (
        <section key={index} className='py-12 sm:py-20 md:py-24 border-b border-slate-800 px-3 sm:px-0'>
          <div className='container mx-auto px-0 sm:px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center'>
              <div className='flex justify-center order-2 lg:order-1'>
                <div className='relative w-full max-w-xs'>
                  <div className='absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20'></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='relative w-full h-auto rounded-3xl object-cover shadow-2xl border-4 border-slate-700'
                  />
                </div>
              </div>

              <div className='order-1 lg:order-2'>
                <div className='inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full mb-3 sm:mb-4'>
                  <span className='text-blue-400 text-xs font-semibold uppercase tracking-wider'>Team Member</span>
                </div>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2'>{member.name}</h2>
                <h3 className='text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-4 sm:mb-6'>{member.role}</h3>
                <p className='text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed'>{member.shortDesc}</p>

                <div className='bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-5 sm:p-8'>
                  <h4 className='font-bold text-base sm:text-lg text-white mb-4 sm:mb-6'>Skills & Expertise</h4>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                    {member.skills.map((skill, idx) => (
                      <div key={idx} className='flex items-center'>
                        <div className='w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mr-2 sm:mr-3 flex-shrink-0'></div>
                        <span className='text-gray-300 text-xs sm:text-sm'>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section id='contact' className='py-12 sm:py-20 md:py-24 px-3 sm:px-0'>
        <div className='container mx-auto px-0 sm:px-6'>
          <div className='bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden'>
            <div className='absolute inset-0 opacity-10'>
              <div className='absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl'></div>
              <div className='absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl'></div>
              <div className='absolute bottom-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl'></div>
              <div className='absolute bottom-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl'></div>
            </div>

            <div className='relative z-10'>
              <div className='inline-block mb-3 sm:mb-4 px-3 py-1 bg-white/20 border border-white/30 rounded-full'>
                <span className='text-white text-xs sm:text-sm font-semibold flex items-center gap-1'>
                  <Zap className='w-3 h-3 sm:w-4 sm:h-4' />
                  Let's Connect
                </span>
              </div>
              <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4'>
                Ready to Start Your Project?
              </h2>
              <p className='text-sm sm:text-base md:text-lg text-gray-100 sm:text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed'>
                Contact us today and let's discuss how we can help you achieve your business goals with our expert solutions.
              </p>
              
              <div className='flex flex-col gap-3 sm:gap-4 mb-4 sm:mb-6'>
                {/* Email */}
                <a href='mailto:pycodesolutions14@gmail.com' className='inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full text-sm sm:text-base'>
                  <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  <span className='truncate'>pycodesolutions14@gmail.com</span>
                </a>
              </div>

              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
                {/* WhatsApp Number 1 */}
                <a href='https://wa.me/923058982841' className='inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-1/2 text-sm sm:text-base'>
                  <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span className='truncate'>WhatsApp: 03058982841</span>
                </a>

                {/* WhatsApp Number 2 */}
                <a href='https://wa.me/923085203338' className='inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-1/2 text-sm sm:text-base'>
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  <span className='truncate'>WhatsApp: 03085203338</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='py-6 sm:py-8 md:py-10 border-t border-slate-800 px-3 sm:px-0'>
        <div className='container mx-auto px-0 sm:px-6'>
          <div className='flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 sm:gap-6'>
            <div className='flex-shrink-0'>
              <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>PY</span>
              </div>
            </div>
            <div className='flex-1'>
              <p className='text-xs sm:text-sm text-gray-400'>
                &copy; 2025 PyCode Solutions. All rights reserved.
              </p>
            </div>
            <div className='flex gap-4 justify-center sm:justify-end'>
              <a href='#' className='text-gray-400 hover:text-white transition-colors text-xs sm:text-sm'>
                Privacy Policy
              </a>
              <a href='#' className='text-gray-400 hover:text-white transition-colors text-xs sm:text-sm'>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default Home;
