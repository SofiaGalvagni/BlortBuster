import { verifyToken } from "../utils/token.js";

export const validateLogin = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error("sin autorización");
    const { payload } = verifyToken(token);
    req.user = payload;
    console.log(req.user)
    next()
  } catch (error) {
    res.status(400).send({ succces: false, message: error.message });
  }
};
