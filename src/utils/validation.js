export const validateStudents = (student) => {
  const errors = {};

  if (!student.name.trim()) {
    errors.name = "Name is required";
  }
  if (!student.email.match(/^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/)) {
    errors.email = "Invalid email format";
  }
  if (!student.age || isNaN(student.age)) {
    errors.age = "Age must be a number";
  }
  if (!student.avatar.trim()) {
    errors.avatar = "Avatar URL is required";
  }
  return errors;
};
