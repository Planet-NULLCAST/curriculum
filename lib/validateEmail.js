export default function validateEmail(email) {
  let emailAddress = email;
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    return true;
  } else if (!email) {
    return false;
  } else {
    return false;
  }
}
