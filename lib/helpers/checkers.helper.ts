import { users } from '../data/users.mocks';

export const checkEmail = (email: string) => {
  //* Checkeo de formato (Frontend)

  if (email.trim().split('@').length !== 2 || !email.split('@')[1]) {
    return false;
  }

  return true;
};

export const checkEmailExists = (email: string) => {
  //! Checkeo de que el email exista (BACKEND)
  if (!users.find((user) => user.email === email)) return false;
  return true;
};

export const checkCreatePassword = (password: string) => {
  //* Contraseña en formato correcto (FRONTEND)
  const lowerLetters: string[] = [];
  for (let i = 97; i < 123; i++) lowerLetters.push(String.fromCharCode(i));
  const upperLetters: string[] = lowerLetters.map((letter) =>
    letter.toUpperCase()
  );
  const numbers: string[] = [];
  for (let i = 0; i < 10; i++) numbers.push(`${i}`);
  let errorLowerLetter = true;
  let errorUpperLetter = true;
  let errorNumbers = true;
  let errorResult = true;
  for (const letter of password) {
    if (errorLowerLetter && lowerLetters.includes(letter))
      errorLowerLetter = false;
    if (errorUpperLetter && upperLetters.includes(letter))
      errorUpperLetter = false;
    if (errorNumbers && numbers.includes(letter)) errorNumbers = false;
    if (!errorLowerLetter && !errorUpperLetter && !errorNumbers) {
      errorResult = false;
      break;
    }
  }
  return !errorResult;
};

export const checkExistsPassword = (password: string) => {
  //! Contraseña correcta o incorrecta (BACKEND)
  if (password === users[0].password) return true;
  //
  return false;
};
