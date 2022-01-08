import styles from "./Sidebar.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { BiLeftArrowAlt } from "react-icons/bi";
interface SidebarProps {
  isOpen: boolean;
  close: () => void;
}
const Sidebar = ({ isOpen, close }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.Sidebar}
          initial={{ left: "-100%" }}
          animate={{ left: 0 }}
          exit={{ left: "-100%" }}
          transition={{ type: "tween", ease: "easeIn", duration: 0.2 }}
        >
          <div className={styles.top}>
            <div className={styles.arrowContainer} onClick={close}>
              <BiLeftArrowAlt fontSize={30} />
            </div>
            <div className={styles.head}>New chat</div>
          </div>
          <div className={styles.rest}></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Sidebar;
