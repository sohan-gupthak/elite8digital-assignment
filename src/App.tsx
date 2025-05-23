import { useEffect } from 'react';
import AppRoutes from './routes';
import AnimatedCursor from './components/ui/AnimatedCursor';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
	// Disable default cursor when custom cursor is active
	useEffect(() => {
		document.body.classList.add('custom-cursor');
		return () => {
			document.body.classList.remove('custom-cursor');
		};
	}, []);

	return (
		<>
			<AnimatedCursor />
			<AnimatePresence mode="wait">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<AppRoutes />
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default App;
