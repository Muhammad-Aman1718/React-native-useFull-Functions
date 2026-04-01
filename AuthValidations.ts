export const validateEmail = (e: string): string => {
  let error = '';
  const checkEmail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/.test(e);
  if (e === '') {
    error = 'Required!';
  } else if (e.includes(' ')) {
    error = 'Space is not allowed!';
  } else if (!checkEmail) {
    error = 'Email is not correct!';
  }

  return error;
};

// validatePassword
export const validatePassword = (e: string): string => {
  let error = '';
  const checkPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (e === '') {
    error = 'Required!';
  } else if (e.length < 8) {
    error = 'Must be at least 8 characters!';
  } else if (!checkPassword.test(e)) {
    error = 'Must have Upper,Lower case and special Character and Number';
  }
  return error;
};

// validateOTP
export const validateOTP = (e: string): string => {
  let error = '';
  if (e === '') {
    error = 'Required!';
  } else if (e.length < 6) {
    error = 'Code is not complete!';
  }
  return error;
};

// validateNewPassword
export const validateNewPassword = (e: string): string => {
  let error = '';
  if (e === '') {
    error = 'Required!';
  } else if (e.length < 8) {
    error = 'Must be at least 8 characters!';
  }
  return error;
};

// validateConfirmPassword
export const validateConfirmPassword = (e: string, f: string): string => {
  let error = '';
  if (e === '') {
    error = 'Required!';
  } else if (e !== '' && e.length < 8) {
    error = 'Must be at least 8 characters!';
  } else if (e !== f) {
    error = 'Password did not match';
  }
  return error;
};

// validateFirstName
export const validateFirstName = (e: string): string => {
  let error = '';
  const checkFirstName = `/^[A-Za-z0-9\s-!@#$%^&*()+={}[]:;"'<>,.?/\|]+$/.test(e)`;

  if (e === '') {
    error = 'Required!';
  } else if (!checkFirstName) {
    error = 'First Name is not correct!';
  } else if (e.length < 2) {
    error = 'Must be at least 2 characters!';
  }

  return error;
};

// validateLastName
export const validateLastName = (e: any): string => {
  let error = '';
  const checkLastName = `/^[A-Za-z0-9\s-!@#$%^&*()_+={}[]:;"'<>,.?/\|]+$/.test(e)`;

  if (e === '') {
    error = 'Required!';
  } else if (!checkLastName) {
    error = 'Last Name is not correct!';
  } else if (e.length < 2) {
    error = 'Must be at least 2 characters!';
  }
  return error;
};

// validatePhoneNumber
export const validatePhoneNumber = (e: string): string => {
  let error = '';
  const checkPhone =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  if (e === '') {
    error = 'Required!';
  } else if (!checkPhone.test(e)) {
    error = 'Phone Number is not correct';
  }
  return error;
};

// validatePhoneNumber
export const validateCompanyId = (e: any): string => {
  let error = '';
  if (e === '') {
    error = 'Required!';
  }
  return error;
};

export const validateCompanyName = (e: string): string => {
  let error = '';
  const checkLastName = `/^[A-Za-z0-9\s-!@#$%^&*()_+={}[]:;"'<>,.?/\|]+$/.test(e)`;

  if (e === '') {
    error = 'Required!';
  } else if (!checkLastName) {
    error = 'Company Name is not correct!';
  } else if (e.length < 2) {
    error = 'Must be at least 2 characters!';
  }
  return error;
};

export const validateDescription = (e: string): string => {
  let error = '';
  if (e === '') {
    error = 'Required!';
  } else if (e.length < 10) {
    error = 'Must be at least 10 characters!';
  }
  return error;
};

export const validateCompanyAddress = (e: string): string => {
  let error = '';
  const checkLastName = `/^[A-Za-z0-9\s-!@#$%^&*()_+={}[]:;"'<>,.?/\|]+$/.test(e)`;

  if (e === '') {
    error = 'Required!';
  } else if (!checkLastName) {
    error = 'Company Address is not correct!';
  } else if (e.length < 2) {
    error = 'Must be at least 2 characters!';
  }
  return error;
};
