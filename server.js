const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

const app = express();


// ===============================
// DATABASE
// ===============================

connectDB();


// ===============================
// MIDDLEWARE
// ===============================

app.use(
  cors({
    origin: "http://localhost:5173"
  })
);

app.use(express.json());


// ===============================
// ROUTES
// ===============================

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const moodRoutes = require("./routes/moodRoutes");
const journalRoutes = require("./routes/journalRoutes");
const therapistRoutes = require("./routes/therapistRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const exerciseRoutes = require("./routes/exerciseRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/therapists", therapistRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/exercises", exerciseRoutes);


// ===============================
// TEST ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Mannova Backend API is running"
  });
});




// ===============================
// SERVER PORT
// ===============================

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Mannova Backend running on http://localhost:${PORT}`);
});