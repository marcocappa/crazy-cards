export const checkForm = ({
  firstname,
  lastname,
  title,
  dateOfBirth,
  employmentStatus,
  annualIncome,
  houseNumber,
  postcode,
}) =>
  !firstname ||
  !lastname ||
  !title ||
  !dateOfBirth ||
  !employmentStatus ||
  !annualIncome ||
  !houseNumber ||
  !postcode;

export const getToday = () => new Date();
