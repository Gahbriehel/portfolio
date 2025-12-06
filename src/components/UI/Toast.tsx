import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

interface ToastProps {
    message: string;
    type: 'success' | 'error';
    isVisible: boolean;
    onClose: () => void;
}

const Toast = ({ message, type, isVisible, onClose }: ToastProps) => {
    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible, onClose]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className={`fixed top-20 right-20 z-50 flex items-center gap-3 px-10 py-6 rounded-lg shadow-lg border ${type === 'success'
                        ? 'bg-green-100 border-green-200 text-green-800'
                        : 'bg-red-100 border-red-200 text-red-800'
                        }`}
                >
                    {type === 'success' ? (
                        <FaCheckCircle className="text-2xl" />
                    ) : (
                        <FaExclamationCircle className="text-2xl" />
                    )}
                    <span className="font-medium text-base">{message}</span>
                    <button
                        onClick={onClose}
                        className={`ml-2 p-1 rounded-full hover:bg-black/5 transition-colors border border-gray-200 hover:scale-110`}
                    >
                        <FaTimes />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Toast;
