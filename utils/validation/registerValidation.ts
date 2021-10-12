const registerValidation = (data: any, validate: (error: object) => void) => {
  const fields = data;
  const errors: any = {};
  let isValid: boolean = true;

  const notEmpy = "Can't be empty";

  if (!fields.name) {
    isValid = false;
    errors.name = notEmpy;
  }

  if (typeof fields.name !== "undefined") {
    if (!fields.name.match(/^[a-zA-Z ]+$/)) {
      isValid = false;
      errors.name = "Only letters";
    }
  }

  return isValid;
};

export default registerValidation;
