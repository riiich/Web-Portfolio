/* eslint-disable react/prop-types */
import {
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalTrigger,
} from "../../@/components/ui/animated-modal";

const AnimatedModal = ({ content }) => {
	return (
		<Modal>
			<ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
				<span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
					Open Resume
				</span>

				<div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
					Open!
				</div>
			</ModalTrigger>

			<ModalBody>
				<ModalContent>
					<div className="flex justify-center items-center">
						<img
							src={content}
							alt="resume"
							width={550}
							height={700}
						/>
					</div>
				</ModalContent>
			</ModalBody>
		</Modal>
	);
};

export default AnimatedModal;
