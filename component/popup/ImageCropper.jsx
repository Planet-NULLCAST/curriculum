import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "cropperjs/dist/cropper.css";

import Cropper from "react-cropper";
import { useState, } from "react";

/**
 * This imagecropper works with the react-popup component
 * requires an image, a trigger(html component) for the popup,
 * and handlers
 */
const ImageCropper = ({
    trigger,
    image,
    handleSubmit,
    closeTrigerred,
    aspectRatio,
})=>{
    const [cropper, setCropper] = useState();
    const getCropData = (close) => {
      if (typeof cropper !== "undefined") {
        cropper.getCroppedCanvas().toBlob(
          (blob) => {
            const file = new File([blob],'profile-pic.png')
            handleSubmit(file)
          })
          
        close();
      }
    };
    return (<Popup onClose={closeTrigerred} trigger={trigger} modal nested>
        {(close) => (
          <div className="modal m-auto rounded bg-white p-4 relative">
            <button
              className="close absolute top-0 right-0 w-5 h-5 mr-2 mt-2 text-2xl text-gray-600"
              onClick={close}
            >
              &times;
            </button>
              <div
                className={`content font-bold text-2xl text-center mt-3`}
              >
                Resize your photo
              </div>
              <Cropper
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            aspectRatio={aspectRatio}
            preview=".img-preview"
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
  
            <div className="w-full flex mt-4 justify-center mb-3">
              <button
                className={`w-24 mr-2 capitalize border font-bold border-black text-black hover:bg-white flex justify-center items-center h-10 duration-700 rounded text-sm outline-none`}
                type="button"
                onClick={() => {
                  getCropData(close);
                }}
              >
                Confirm
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
  )}
export default ImageCropper;
