import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EmailForm = () => {
	const form = useRef();
	const [emailContent, setEmailContent] = useState({
		name: "",
		email: "",
		message: "",
	});

	const submitEmail = async (e) => {
		e.preventDefault(); // prevent from refreshing browser

		try {
			if (!emailContent.email || !emailContent.name || !emailContent.message) {
				toast.error("Please fill in the missing field!");
				return;
			}

			const response = await emailjs.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				{
					publicKey: import.meta.env.VITE_PUBLIC_KEY,
				}
			);

			if (response.status === 200) {
				toast.success("Email sent successfully!");

				console.log("Email sent successfully!");
			}
		} catch (err) {
			toast.error("There was an error sending the email.");
			console.log(err);
		}

		console.log("Email sent!");
	};

	const handleName = (e) => {
		setEmailContent((prev) => ({ ...prev, name: e.target.value }));
	};

	const handleEmail = (e) => {
		setEmailContent((prev) => ({ ...prev, email: e.target.value }));
	};

	const handleMessage = (e) => {
		setEmailContent((prev) => ({ ...prev, message: e.target.value }));
	};

	return (
		<form ref={form} onSubmit={submitEmail} className="flex flex-col text-xl my-16 lg:mt-20 ">
			<label className="flex text-2xl text-white font-semibold my-1">Your name:</label>
			<input
				type="text"
				id="user_name"
				name="user_name"
				onChange={handleName}
				placeholder="Enter your name..."
				className="rounded-lg bg-green-200 text-xl text-black font-medium p-2 mb-5"
			/>

			<label className="flex text-2xl text-white font-semibold my-1">Your email:</label>
			<input
				type="email"
				id="user_email"
				name="user_email"
				onChange={handleEmail}
				placeholder="Enter your email..."
				className="rounded-lg bg-green-200 text-xl text-black font-medium p-2 mb-5"
			/>

			<label className="flex text-2xl text-white font-semibold my-1">Type your message here:</label>
			<textarea
				type="text"
				id="message"
				name="message"
				onChange={handleMessage}
				placeholder="Enter your email..."
				className="rounded-lg bg-green-200 text-xl text-black font-medium p-3 mb-5 lg:w-96"
			/>

			<input
				type="submit"
				value="Submit"
				className="border-2 w-fit p-3 rounded-xl bg-green-800 text-slate-200 duration-75 hover:cursor-pointer active:scale-90"
			/>

			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				theme="light"
				transition:Bounce
			/>
		</form>
	);
};

export default EmailForm;
