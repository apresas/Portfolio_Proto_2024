import { motion } from "framer-motion";
import './modalBackDrop.css'

const ModalBackDrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="modal_backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};
export default ModalBackDrop;
