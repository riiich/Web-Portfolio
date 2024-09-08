/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "../../../src/utils/cn";

export const FloatingNav = ({ navItems, className }) => {
	const { scrollYProgress } = useScroll();
	const [visible, setVisible] = useState(false);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		if (typeof current === "number") {
			let direction = current - scrollYProgress.getPrevious();

			if (scrollYProgress.get() < 0.05) {
				setVisible(false);
			} else {
				setVisible(direction < 0);
			}
		}
	});

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 1, y: -100 }}
				animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
				transition={{ duration: 0.2 }}
				className={cn(
					"flex max-w-fit fixed top-4 left-1/2 transform -translate-x-1/2 border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
					className
				)}
			>
				{navItems.map((navItem, idx) => (
					<a
						key={`link-${idx}`}
						// to={navItem.link}
						href={navItem.link}
						className={cn(
							"relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 "
						)}
					>
						<span className="block hover:text-green-400 sm:hidden">{navItem.name}</span>
						{/* <span className="hidden sm:block text-sm">{navItem.name}</span> */}
					</a>
				))}
			</motion.div>
		</AnimatePresence>
	);
};
