import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import logo from '../../assets/images/elite8digital-logo.png';

interface CurtainAnimationProps {
  onComplete: () => void;
}

const CurtainAnimation = ({ onComplete }: CurtainAnimationProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);
  const curtainControls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if the animation has been seen before
  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem('hasSeenCurtainAnimation');
    if (hasSeenAnimation === 'true') {
      // Skip animation if already seen
      onComplete();
    }
    
    // Generate particles for the background
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 5
      });
    }
    setParticles(newParticles);
  }, [onComplete]);

  const handleCurtainClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setHasInteracted(true);
      
      // Store that user has seen the animation
      localStorage.setItem('hasSeenCurtainAnimation', 'true');
      
      // Animate the curtains
      curtainControls.start({
        opacity: [1, 0],
        transition: { duration: 0.5, delay: 1.5 }
      });
      
      // Wait for animation to complete before calling onComplete
      setTimeout(() => {
        onComplete();
      }, 2500); // Match this with the animation duration
    }
  };

  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      animate={curtainControls}
    >
      {/* Particles */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
      {/* Left Curtain */}
      <motion.div 
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-red-900 to-red-700"
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '-100%' : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-20 h-full bg-gradient-to-b from-red-500/20 to-red-400/20 absolute right-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`left-${i}`}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Right Curtain */}
      <motion.div 
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-gradient-to-l from-red-900 to-red-700"
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '100%' : 0 }}
        transition={{ 
          duration: 1.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2
        }}
      >
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-20 h-full bg-gradient-to-b from-red-500/20 to-red-400/20 absolute left-0"></div>
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={`right-${i}`}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Center Logo and Call to Action */}
      <motion.div 
        className="relative z-10 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <motion.div className="relative">
          <motion.div
            className="text-2xl font-bold text-white mb-4 tracking-widest"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-300 uppercase">Grand Opening</span>
          </motion.div>
          <motion.div 
            className="absolute -inset-10 rounded-full bg-gradient-to-r from-red-600/20 to-red-500/20 blur-xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.img 
            src={logo} 
            alt="Elite8 Digital Logo" 
            className="h-32 mx-auto mb-8 relative"
            animate={{ 
              y: [0, -10, 0],
              filter: ["drop-shadow(0 0 0px rgba(220, 38, 38, 0))", "drop-shadow(0 0 15px rgba(220, 38, 38, 0.8))", "drop-shadow(0 0 0px rgba(220, 38, 38, 0))"]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>
        
        <motion.button
          className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCurtainClick}
        >
          <span className="relative z-10">Click to Reveal</span>
          <motion.span 
            className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <motion.span 
            className="absolute -inset-1 rounded-full blur-md bg-gradient-to-r from-red-500/50 to-red-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
        
        {isOpening && (
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 3] }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-6xl text-white font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-400">WELCOME</div>
            
            {/* Particle burst effect */}
            {Array.from({ length: 20 }).map((_, i) => {
              const angle = (i / 20) * Math.PI * 2;
              return (
                <motion.div
                  key={`burst-${i}`}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-red-400"
                  style={{ 
                    left: '50%',
                    top: '50%',
                  }}
                  initial={{ 
                    x: 0,
                    y: 0,
                    scale: 0,
                    opacity: 1
                  }}
                  animate={{ 
                    x: Math.cos(angle) * 100,
                    y: Math.sin(angle) * 100,
                    scale: [0, 1, 0],
                    opacity: [1, 0.8, 0]
                  }}
                  transition={{ 
                    duration: 1,
                    delay: 0.2
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CurtainAnimation;
