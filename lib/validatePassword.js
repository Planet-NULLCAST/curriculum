export default function handlePassword(password) {
  const regexPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;

  if (password.length === 0) {
    return "empty";
  } else if (password.length < 8) {
    return "length";
  } else if (password.match(regexPassword)) {
    return "valid";
  } else {
    return "characters";
  }
}
