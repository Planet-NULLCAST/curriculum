const Modal = ({ children }) => {
  return (
    <div className="bg-gray-600 absolute top-0 bottom-0 left-0 right-0 z-50 h-full w-full flex justify-center items-center bg-opacity-25">
      <div className="bg-white">{children}</div>
    </div>
  );
};

export default Modal;
