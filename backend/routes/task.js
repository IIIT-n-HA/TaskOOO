const router = require("express").Router();
const Task = require("../models/task");
const user = require("../models/user");
const authenticateToken = require("./auth");

// create task route
router.post("/create", authenticateToken, async (req, res) => {
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

// get all tasks route
router.get("/allTasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await user
      .findById(id)
      .populate({ path: "tasks", options: { sort: { createdAt: -1 } } });
    res.status(200).json({ data: userData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// get important tasks route
router.get("/allImpTasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { important: true },
      options: { sort: { createdAt: -1 } },
    });
    const ImpTaskData = Data.tasks;
    res.status(200).json({ data: ImpTaskData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// get complete tasks route
router.get("/allComplTasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { complete: true },
      options: { sort: { createdAt: -1 } },
    });
    const ComplTaskData = Data.tasks;
    res.status(200).json({ data: ComplTaskData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// get incomplete tasks route
router.get("/allInComplTasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { complete: false },
      options: { sort: { createdAt: -1 } },
    });
    const InComplTaskData = Data.tasks;
    res.status(200).json({ data: InComplTaskData });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// delete tasks route
router.delete("/deleteTasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Task.findByIdAndDelete(id);
    await user.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// update tasks route
router.put("/updateTasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Task.findByIdAndUpdate(id, { title: title, desc: desc });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// update important tasks route
router.put("/updateImpTasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const impTask = TaskData.important;
    await Task.findByIdAndUpdate(id, { important: !impTask });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

// update completed tasks route
router.put("/updateComplTasks/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const complTask = TaskData.complete;
    await Task.findByIdAndUpdate(id, { important: !complTask });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Server error" });
  }
});

module.exports = router;
