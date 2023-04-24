import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const DropdownMenu = ({ setRegion }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalDisplay = {
    display: modalOpen ? "block" : "none",
  };

  const toggleModalDisplay = () => {
    setModalOpen((prevState) => !prevState);
  };

  const handleSearchRegion = (e) => {
    setRegion(e.target.dataset.region);
    setModalOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={toggleModalDisplay}>
        Filter by Region <BsChevronDown />
      </button>

      <AnimatePresence>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <ul className="dropdown-modal" style={modalDisplay}>
            <li data-region="africa" onClick={handleSearchRegion}>
              Africa
            </li>
            <li data-region="americas" onClick={handleSearchRegion}>
              America
            </li>
            <li data-region="asia" onClick={handleSearchRegion}>
              Asia
            </li>
            <li data-region="europe" onClick={handleSearchRegion}>
              Europe
            </li>
            <li data-region="oceania" onClick={handleSearchRegion}>
              Oceania
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
