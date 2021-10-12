const contactValidation = (data: any, validate: (error: object) => void) => {
  const fields = data;
  const errors: any = {};
  let isValid: boolean = true;

  const notEmpy = "Can't be empty";

  // Name
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

  // Phone
  if (!fields.phone) {
    isValid = false;
    errors.phone = notEmpy;
  }

  if (typeof fields.phone !== "undefined") {
    if (!fields.phone.match(/^[+ 0-9]+$/)) {
      isValid = false;
      errors.phone = "Only number";
    }
  }

  // Email
  if (!fields.email) {
    isValid = false;
    errors.email = notEmpy;
  }

  if (typeof fields.email !== "undefined") {
    const lastAtPos = fields.email.lastIndexOf("@");
    const lastDotPos = fields.email.lastIndexOf(".");

    if (
      !(
        lastAtPos < lastDotPos
          && lastAtPos > 0
          && fields.email.indexOf("@@") === -1
          && lastDotPos > 2
          && fields.email.length - lastDotPos > 2
      )
    ) {
      isValid = false;
      errors.email = "Email is not valid";
    }
  }

  validate(errors);

  return isValid;
};

export default contactValidation;
