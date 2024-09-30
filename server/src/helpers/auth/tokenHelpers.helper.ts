import { Response, Request } from 'express'; // Doğru Response türünü içe aktarın
import { User } from '@user/schemas/user.schema';
import { generateJwtToken } from 'utils/jwt.utils';

export const sendJwtToClient = (user: User, res: Response) => {
  const token = generateJwtToken(user._id.toString(), user.fullName);
  const { JWT_COOKIE_EXPIRE } = process.env;

  return res
    .status(200)
    .cookie('access_token', token, {
      expires: new Date(Date.now() + parseInt(JWT_COOKIE_EXPIRE) * 60000),
      httpOnly: true,
      secure: false, // Yerel geliştirme için false
      sameSite: 'lax', // Genellikle cross-site istekler için güvenli ayar
    })
    .json({
      status: 'success',
      access_token: token,
      user,
    });
};

export const isTokenIncluded = (req: Request): boolean => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  );
};

export const getAccessTokenFromHeader = (req: Request): string => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];
    return token;
  }
  return null;
};
