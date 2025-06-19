import { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Temporarily commenting out 3D components to fix errors
// import HeroScene from '../components/3d/HeroScene';
// import FloatingCube from '../components/3d/FloatingCube';
import AnimatedButton from '../components/ui/AnimatedButton';
import AnimatedCard from '../components/ui/AnimatedCard';
import GlowingText from '../components/3d/GlowingText';
import FloatingElements from '../components/ui/FloatingElements';
import GradientButton from '../components/ui/GradientButton';
import TextReveal from '../components/ui/TextReveal';

// Import images
import heroBg from '../assets/images/hero-bg.svg';
import abstractShape1 from '../assets/images/abstract-shape-1.svg';
import abstractShape2 from '../assets/images/abstract-shape-2.svg';
import project1 from '../assets/images/project-1.svg';
import project2 from '../assets/images/project-2.svg';
import project3 from '../assets/images/project-3.svg';
import project4 from '../assets/images/project-4.svg';
import avatar1 from '../assets/images/avatar-1.svg';
import avatar2 from '../assets/images/avatar-2.svg';
import avatar3 from '../assets/images/avatar-3.svg';

// We are using Remix icons for tech stack

const Home = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Services data
  const services = [
    {
      title: 'Custom Website Design, Development & Maintenance',
      description: 'We create tailored websites with modern design, robust development, and ongoing maintenance to keep your online presence running smoothly.',
      icon: 'ri-code-s-slash-line',
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'Software & App Development',
      description: 'Custom software solutions and applications designed to streamline your business processes and enhance user experience.',
      icon: 'ri-apps-2-line',
      color: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Mobile-Friendly Websites & Apps',
      description: 'Responsive designs that work flawlessly across all devices, ensuring your customers have a seamless experience wherever they are.',
      icon: 'ri-smartphone-line',
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment processing, inventory management, and user-friendly shopping experiences.',
      icon: 'ri-shopping-cart-2-line',
      color: 'from-green-500 to-yellow-500'
    }
  ];

  // Featured projects data
  const projects = [
    {
      title: 'Quantum Finance',
      category: 'Web Development',
      image: project1,
      description: 'A modern fintech platform with real-time analytics and secure payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Nebula Social',
      category: 'UI/UX Design',
      image: project2,
      description: 'A next-generation social media platform with innovative user experience design.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping']
    },
    {
      title: 'Cosmos VR Experience',
      category: '3D Visualization',
      image: project3,
      description: 'An immersive virtual reality experience exploring the wonders of the universe.',
      technologies: ['Three.js', 'WebGL', 'React Three Fiber']
    },
    {
      title: 'Pulse Marketing',
      category: 'Digital Marketing',
      image: project4,
      description: 'A comprehensive digital marketing campaign that increased client conversions by 200%.',
      technologies: ['SEO', 'Content Strategy', 'Analytics']
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechVision',
      content: 'Elite8Digital transformed our online presence with a stunning website that perfectly captures our brand identity. Their attention to detail and creative approach exceeded our expectations.',
      image: avatar1
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, Innovate Inc',
      content: 'Working with Elite8Digital was a game-changer for our company. Their strategic approach to digital marketing helped us reach new audiences and significantly increase our conversion rates.',
      image: avatar2
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager, Nexus',
      content: 'The 3D visualizations created by Elite8Digital brought our product to life in ways we never imagined. The immersive experience has been a key factor in our successful product launch.',
      image: avatar3
    }
  ];

  // Process data
  const process = [
    {
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience to define the project scope.',
    },
    {
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap to achieve your business objectives.',
    },
    {
      title: 'Design & Development',
      description: 'Our team creates stunning designs and builds robust, scalable solutions.',
    },
    {
      title: 'Launch & Support',
      description: 'We ensure a smooth launch and provide ongoing support to help you succeed.',
    },
  ];

  // Tech stack data
  const techStack = [
    { name: 'React', icon: 'ri-reactjs-fill', color: '#61DAFB' },
    { name: 'Three.js', icon: 'ri-code-box-fill', color: '#FFFFFF' },
    { name: 'Node.js', icon: 'ri-server-fill', color: '#8CC84B' },
    { name: 'MongoDB', icon: 'ri-database-2-fill', color: '#4DB33D' },
    { name: 'TypeScript', icon: 'ri-code-s-slash-fill', color: '#3178C6' },
    { name: 'Figma', icon: 'ri-pencil-ruler-2-fill', color: '#F24E1E' },
    { name: 'Tailwind CSS', icon: 'ri-layout-4-fill', color: '#38BDF8' },
    { name: 'AWS', icon: 'ri-cloud-fill', color: '#FF9900' }
  ];

  return (
    <MainLayout>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10"></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.15)_0,rgba(0,0,0,0)_70%)] z-20"></div>
          
          <FloatingElements count={20} className="z-10" />
        </div>

        <div className="container relative z-10 px-4 py-20 md:py-28 lg:py-32 mx-auto flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block py-2 px-4 mb-6 border border-purple-500/30 rounded-full text-sm font-medium text-purple-400"
            >
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></span>
                Innovative Digital Agency
              </span>
            </motion.div>
            
            <div className="mb-6">
              <TextReveal 
                text="Crafting Digital" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight gradient-text" 
                animationType="slide" 
                delay={0.3}
              />
              <TextReveal 
                text="Experiences That Inspire" 
                className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white mt-2" 
                animationType="slide" 
                delay={0.4}
              />
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-white/70 mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We blend creativity with cutting-edge technology to build immersive digital experiences that captivate audiences and drive exceptional results.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
               {/* href="#work" */}
              {/* <GradientButton href="#" gradient="purple-blue" size="lg" hoverEffect="both" className="w-full"> 
                Explore Our Work
              </GradientButton> */}
              <GradientButton href="#contact" gradient="blue-teal" size="lg" hoverEffect="both" className="w-full">
                <span className="lg:pl-12 md:pl-24 sm:pl-24">Get in Touch</span>
              </GradientButton>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[600px] flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.img 
                  src={abstractShape1} 
                  alt="Abstract Shape" 
                  className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 top-5 left-5 sm:top-10 sm:left-10 z-10" 
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                <motion.img 
                  src={abstractShape2} 
                  alt="Abstract Shape" 
                  className="absolute w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bottom-0 right-0 z-0" 
                  animate={{ 
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <GlowingText 
                    text="ELITE8" 
                    size="2xl" 
                    glowColor="rgba(139, 92, 246, 0.8)" 
                    className="mb-4" 
                  />
                </div>
                
                <div className="absolute bottom-20 right-20 w-8 h-8 rounded-full bg-purple-500/80 blur-sm animate-pulse"></div>
                <div className="absolute top-20 right-40 w-4 h-4 rounded-full bg-blue-500/80 blur-sm animate-pulse delay-1000"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-4 md:bottom-8 left-0 right-0 mx-auto w-full flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <span className="text-white/50 text-sm mb-2 text-center">Scroll to explore</span>
          <motion.div 
            className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1"
            initial={{ y: 0 }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          >
            <div className="w-1 h-1 bg-white/50 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-black/5 z-0"></div>
          <div className="absolute inset-0 overflow-hidden">
            <FloatingElements count={10} minSize={5} maxSize={20} className="opacity-30 z-0" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlowingText 
              text="Our Services" 
              size="xl" 
              className="mb-3 md:mb-4" 
              glowColor="rgba(139, 92, 246, 0.6)" 
            />
            <TextReveal
              text="We offer a comprehensive range of digital services to help your business thrive in the digital landscape."
              className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto"
              animationType="fade"
              delay={0.3}
            />
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard className="p-5 sm:p-6 md:p-8 h-full" glowColor={service.color.includes('purple') ? 'rgba(139, 92, 246, 0.3)' : 
                                                   service.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                                                   service.color.includes('teal') ? 'rgba(20, 184, 166, 0.3)' : 
                                                   service.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' : 
                                                   'rgba(249, 115, 22, 0.3)'}>
                  <div className="mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-3 md:mb-4 transform transition-transform hover:scale-110 duration-300`}>
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{service.title}</h3>
                    <p className="text-sm sm:text-base text-white/70">{service.description}</p>
                  </div>
                  <GradientButton 
                    href="#contact" 
                    size="sm" 
                    gradient={service.color.includes('purple') ? 'purple-blue' : 
                              service.color.includes('blue') ? 'blue-teal' : 
                              service.color.includes('teal') ? 'green-blue' : 
                              service.color.includes('green') ? 'green-blue' : 
                              'orange-red'}
                    className="mt-4"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </GradientButton>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section goes here */}

      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
              <span className="gradient-text">Our Process</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              We follow a structured approach to deliver exceptional results for every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative">
                    <span className="text-primary font-bold text-xl">{index + 1}</span>
                    {index < process.length - 1 && (
                      <div className="absolute top-1/2 left-full w-full h-0.5 bg-primary/10 hidden md:block"></div>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/10 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Client Testimonials</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Hear what our clients have to say about their experience working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AnimatedCard className="p-8 h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-bold">{testimonial.name}</h3>
                      <p className="text-white/70 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-white/80 italic mb-4">"{testimonial.content}"</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack section */}

      {/* <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Tech Stack</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              We use cutting-edge technologies to build powerful, scalable, and beautiful digital experiences.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  className="w-20 h-20 rounded-full glass flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  style={{ background: `rgba(30, 30, 40, 0.8)`, boxShadow: `0 0 15px ${tech.color}40` }}
                >
                  <i className={`${tech.icon} text-3xl`} style={{ color: tech.color }}></i>
                </motion.div>
                <h3 className="text-lg font-medium">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform</span> Your Digital Presence?
              </h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Let's collaborate to create a stunning digital experience that captivates your audience and drives results.
              </p>
              <AnimatedButton href="#contact" variant="primary" size="lg">
                Get Started Today
              </AnimatedButton>
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
