import pkg from 'jsonwebtoken';
const { verify } = pkg;

export default function (req, res, next) {
  // Extract token from Authorization header
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1]; // Extract token by removing "Bearer" prefix

  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  try {
    const decoded = verify(token, 'your_jwt_secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
