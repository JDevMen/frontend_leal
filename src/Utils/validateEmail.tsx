function isValidEmail(email: string): boolean {
  const emailReg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
  console.log(email);
  console.log(emailReg.test(email));

  return emailReg.test(email);
}

export { isValidEmail };
