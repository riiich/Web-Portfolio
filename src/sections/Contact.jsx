// import { TfiEmail } from "react-icons/tfi";
import EmailForm from "../components/EmailForm";

const Contact = () => {
	return (
		<div className="border-b border-slate-600 text-center text-4xl font-light mt-16 lg:mt-20" id="contact">
			<div className="">Contact Me!</div>

			<div className="flex justify-center">
				<EmailForm />
			</div>
		</div>
	);
};

export default Contact;
