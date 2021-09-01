const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export const validateEmail = (email) => {
  if (!email) {
    return false;
  }
  return emailRegex.test(email);
};
