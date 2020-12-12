import { UsernamePasswordInput } from '../resolvers/UsernamePasswordInput';

export const validateRegister = (options: UsernamePasswordInput) => {
  if (options.username.length <= 2) {
    return [{ field: "username", message: "lenght must be greater thant 2" }];
  }

  if (!options.email.includes("@")) {
    return [{ field: "email", message: "invalid email" }];
  }

  if (options.username.includes("@")) {
    return [{ field: "username", message: "cannot include an @" }];
  }

  if (options.password.length <= 2) {
    return [{ field: "password", message: "lenght must be greater thant 2" }];
  }

  return null;
};
