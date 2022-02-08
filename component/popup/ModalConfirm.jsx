import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ModalConfirm = ({
  trigger,
  handleSubmit,
  purpose,
  text,
  secondaryText,
  heading,
  buttonColor
}) => {
  return (
    <Popup trigger={trigger} modal nested>
      {(close) => (
        <div className="modal m-auto rounded bg-white p-4 relative">
          <button
            className="close absolute top-0 right-0 w-5 h-5 mr-2 mt-2 text-2xl text-gray-600"
            onClick={close}
          >
            &times;
          </button>
          {heading && (
            <div
              className={`content font-bold text-2xl text-center mt-3 ${buttonColor === "red" && "text-red-500"
                } ${buttonColor === "green" && "text-green-500"}`}
            >
              {heading}
            </div>
          )}
          {text && (
            <div className={`content font-semibold mt-2  text-md text-center`}>
              {text}
            </div>
          )}
          {secondaryText && (
            <div className="content flex justify-center w-full  bg-gray-100 py-2 mt-2 font-semibold text-gray-500">
              {secondaryText}
            </div>
          )}

          <div className="w-full flex mt-4 justify-center mb-3">
            <button
              className={`w-24 mr-2 capitalize border font-bold text-white hover:bg-white flex justify-center items-center h-10 duration-700 rounded text-sm outline-none ${buttonColor === "red" &&
                "border-red-500 hover:text-red-500 bg-red-500"
                } ${buttonColor === "green" &&
                "border-green-500 hover:text-green-500 bg-green-500"
                }`}
              type="button"
              onClick={() => {
                handleSubmit();
                close();
              }}
            >
              {purpose}
            </button>
            <button
              className="w-24 ml-2 capitalize border border-black text-black hover:text-white bg-white font-bold hover:bg-black flex justify-center items-center h-10 duration-700 rounded text-sm outline-none"
              onClick={close}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalConfirm;
