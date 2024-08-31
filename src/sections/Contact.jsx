import { TfiEmail } from "react-icons/tfi";

const Contact = () => {
	return (
		<div className="text-center text-4xl font-light mt-16 lg:mt-20">
			<div className="">Contact Me!</div>

			<div className="flex justify-center m-10">
				<div className="flex items-center text-2xl w-fit border rounded-lg m-5 p-1">
					<TfiEmail />
					<a href="mailto:horich66@gmail.com">Let&apos;s get in touch!</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
