// import { TfiEmail } from "react-icons/tfi";
import EmailForm from "../components/EmailForm";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div
			className="border-b border-slate-600 text-center text-4xl font-light mt-16 lg:mt-20"
			id="contact"
		>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ delay: 0.5, duration: 0.5 }}
				viewport={{ once: true }}
			>
				Contact Me!
			</motion.div>

			<motion.div
				initial={{ x: -100, opacity: 0 }}
				whileInView={{ x: 0, opacity: 1 }}
				transition={{ delay: 1, duration: 1, type: "spring" }}
				viewport={{ once: true }}
				className="flex justify-center"
			>
				<EmailForm />
			</motion.div>
		</div>
	);
};

export default Contact;
