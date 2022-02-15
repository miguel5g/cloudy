import { motion } from 'framer-motion';
import { useRef } from 'react';

export interface ModalContainerProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onRequestClose,
  children,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  function handleCloseModal(event: React.MouseEvent<HTMLDivElement>) {
    if (overlayRef.current && overlayRef.current === event.target) onRequestClose();
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black/60"
      ref={overlayRef}
      initial={{ opacity: 0, pointerEvents: 'none' }}
      animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? 'auto' : 'none' }}
      onClick={handleCloseModal}
    >
      <motion.div
        className="flex flex-col w-full max-w-md p-12 bg-white rounded-lg shadow-lg"
        initial={{ y: '50%', opacity: 0 }}
        animate={{ y: isOpen ? '0%' : '50%', opacity: isOpen ? 1 : 0 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
