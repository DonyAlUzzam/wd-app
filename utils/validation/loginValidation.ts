const loginValidation = (data: any, validate: (error: object) => void) => {
  const fields = data;
  const errors: any = {};
  let isValid: boolean = true;

  const notEmpy = "Can't be empty";

  if (!fields.username) {
    isValid = false;
    errors.username = notEmpy;
  }

  return isValid;
};

export default loginValidation;
