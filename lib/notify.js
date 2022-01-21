import { toast } from "react-toastify";

export default function notify (msg, type = 'success') {
  toast[type](msg, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: false,
  })
}