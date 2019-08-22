import bcrypt from 'bcryptjs';

const BcryptService = () => {
  const hashPassword = (password: string) => {
    return bcrypt.hash(password, 10);
  };

  const comparePassword = (password: string, hash: string) => {
    return bcrypt.compare(password, hash);
  };

  return { hashPassword, comparePassword };
};

export default BcryptService;
