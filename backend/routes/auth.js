const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  // 1. Extract authorization token from headers
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  // 2. Check if token is present and in correct format
  if (!token) {
    return res
      .sendStatus(401)
      .json({ message: "Authentication token required." }); // Unauthorized
  }

  // 3. Verify the token using JWT secret
  jwt.verify(token, "taskOOO", (err, user) => {
    if (err) {
      return req.status(403).json(err); // Forbidden (invalid token)
    }
    req.user = user; // Attach decoded user data to request object
    next(); // 4. If token is valid, proceed to the next middleware
  });
};

module.exports = authenticateToken;
