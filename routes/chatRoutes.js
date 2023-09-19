const express = require("express");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  addToGroup,
  removeFromGroup,
} = require("../controllers/chatControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Only logged in user can access the below routes
router.route("/").post(protect, accessChat).get(protect, fetchChats); // Both requests work on same route
router.route("/group").post(protect, createGroupChat); // Create group chat
router.route("/rename").put(protect, renameGroup); // Rename group chat
router.route("/groupadd").put(protect, addToGroup); // Add someone to the group
router.route("/groupremove").put(protect, removeFromGroup); // Remove someone or leave the group

module.exports = router;
