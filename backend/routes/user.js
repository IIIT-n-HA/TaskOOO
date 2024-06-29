const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// signin route
router.post("/signin", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const chkUser = await User.findOne({ username: username });
    const chkEmail = await User.findOne({ email: email });
    if (chkUser) {
      return res.status(400).json({ message: "Username already exists." });
    } else if (username.length < 3) {
      return res
        .status(400)
        .json({ message: "Username should have atleast 4 characters." });
    }

    if (chkEmail) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const hashPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      username: username,
      email: email,
      password: hashPass,
    });

    await newUser.save();

    return res.status(200).json({ message: "SignIn successfull" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// login route
router.get("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const chkUser = await User.findOne({ username: username });
    if (!chkUser) {
      return res.status(400).json({ message: "Incorrect details provided." });
    }

    bcrypt.compare(password, chkUser.password, (err, data) => {
      if (data) {
        const authClaims = [
          { name: username },
          { jti: jwt.sign({}, "taskOOO") },
        ];
        const token = jwt.sign({ authClaims }, "taskOOO", { expiresIn: "2d" });
        res.status(200).json({ id: chkUser._id, token: token });
      } else {
        return res.status(400).json({ message: "Invalid details provided." });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});
module.exports = router;
