import * as jwt from 'jsonwebtoken';

export const generateJwtToken = (userId: string, fullName: string): string => {
    const { JWT_SECRET_KEY, JWT_EXPIRE } = process.env;

    const payload = {
        id: userId,
        full_name: fullName,
    };

    const token = jwt.sign(payload, JWT_SECRET_KEY, {
        expiresIn: JWT_EXPIRE,
    });

    return token;
};
