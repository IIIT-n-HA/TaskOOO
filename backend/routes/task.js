const router = require("express").Router();
const Task = require("../models/task");
const user = require("../models/user");

// create task route
router.post("create", async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;
    const newTask = new Task({
      title: title,
      desc: desc,
    });
    const saved = await newTask.save();
    const sid = saved._id;
    await user.findByIdAndUpdate(id, { $push: { tasks: sid._id } });
    res.status(200).json({ message: "Task created." });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

module.exports = router;
