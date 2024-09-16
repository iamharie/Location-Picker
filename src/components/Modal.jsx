import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, open, onClose }) {
  const dia = useRef();
  useEffect(() => {
    if (open) {
      dia.current.showModal();
    } else {
      dia.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dia} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}
