import AuthModal from "@c/modals/AuthModal/AuthModal"
import RegisterModal from "@c/modals/RegisterModal/RegisterModal"
import RemindModal from "@c/modals/RemindModal/RemindModal"

const ModalsList = () => {
	return (
		<>
			<AuthModal />
			<RegisterModal />
			<RemindModal />
		</>
	)
}

export default ModalsList
