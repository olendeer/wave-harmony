import AuthModal from "@c/modals/AuthModal/AuthModal"
import FinishAuthModal from "@c/modals/FinishAuthModal/FinishAuthModal"
import RegisterModal from "@c/modals/RegisterModal/RegisterModal"
import RemindModal from "@c/modals/RemindModal/RemindModal"

const ModalsList = () => {
	return (
		<>
			<AuthModal />
			<RegisterModal />
			<RemindModal />
			<FinishAuthModal />
		</>
	)
}

export default ModalsList
