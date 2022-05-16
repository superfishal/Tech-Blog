// Import modules
const router = require("express").Router();
const userRoutes = require("./user-routes");

// Routes
router.use("/users", userRoutes);

module.exports = router;
