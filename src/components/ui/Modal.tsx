import React, { useEffect, useRef } from 'react';
interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger';
}
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'default',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div
        ref={modalRef}
        className="w-full max-w-md bg-white dark:bg-[#0F2922] border border-gray-200 dark:border-[#369672]/30 shadow-2xl rounded-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 border-b border-gray-200 dark:border-[#369672]/20 flex justify-between items-center bg-gray-50 dark:bg-[#05100B]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-[#E8F5EE]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:text-[#8AA698] dark:hover:text-[#E8F5EE] transition-colors focus:outline-none focus:ring-2 focus:ring-[#369672] rounded"
          >
            <span className="sr-only">Close</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-4 text-gray-600 dark:text-[#8AA698]">
          {children}
        </div>
        <div className="px-6 py-4 bg-gray-50 dark:bg-[#05100B] flex justify-end gap-3 border-t border-gray-200 dark:border-[#369672]/20">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#369672] dark:bg-[#0F2922] dark:text-[#E8F5EE] dark:border-[#369672]/50 dark:hover:bg-[#369672]/20"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${variant === 'danger'
                ? 'bg-red-600 hover:bg-red-700 focus:ring-red-500 dark:bg-[#be185d] dark:hover:bg-[#9d174d]'
                : 'bg-[#369672] hover:bg-[#059669] focus:ring-[#369672]'
              }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} aria-hidden="true" />
    </div>
  );
};
