export default function validateEmail(email) {
  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email) {
    return false;
  } else if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
