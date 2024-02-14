const { tokenVerification } = require("./token");

const checkRole = (sysRole) => {
  return (req, res, next) => {
    const { token } = req.headers;
    if (!token) throw new Error("Token is required");
    const { data } = tokenVerification(token);
    const isValid = sysRole.some((role) => data.role.includes(role));
    if (!isValid) throw new Error("Permission Denied ");
    next();
  };
};

module.exports = { checkRole };
