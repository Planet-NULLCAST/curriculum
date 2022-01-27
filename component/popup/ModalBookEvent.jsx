import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "./ModalBookEvent.module.scss";
const ModalBookEvent = ({
  open,
  setOpen,
  onClose,
}) => {
  return (
    <Popup open={open} modal nested>
      {(close) => (
        <div className="modal flex justify-center items-center rounded-xl bg-white relative">
          <div className={styles.card}>
            <div className={styles.close}>
              <i className="fas fa-times"></i>
            </div>
            <div className={styles.body}>
              <img src="/images/svgs/bookSuccess.svg" className={styles.image} alt="" />
              <div className={styles.text1}>You’re registered for the event</div>
              <div className={styles.text2}>You can check your email for further information </div>
              <div className={styles.btnbox}>
                <button className={styles.submit_btn} onClick={() => {
                  setOpen(false);
                  if (onClose) {
                    onClose();
                  }
                }
                }>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default ModalBookEvent;
