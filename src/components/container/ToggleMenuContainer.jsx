import { useCallback, useEffect, useState } from "react";
import ToggleMenu from "../ui/ToggleMenu";

function ToggleMenuContainer({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = useCallback((e) => {
    e.stopPropagation();
    setIsOpen((nextIsOpen) => !nextIsOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = () => setIsOpen(false);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <ToggleMenu onToggleMenu={onToggleMenu} onClick={onClick} isOpen={isOpen} />
  );
}

export default ToggleMenuContainer;
