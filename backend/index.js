const cors = require("cors");
const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const corsOptions = {
  origin: ["http://localhost:3000","http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.options("*", cors(corsOptions)); 

// app.post("/test", (req, res) => {
//   console.log("Test route hit", req.body);
//   res.json({ message: "Test successful" });
// });

// app.get("/", function (req, res) {
//   console.log("OK");
//   res.send("hiiiiiiii !!!!123");
// });

const authRoutes = require("./routes/googleAuth/google-auth.routes");
app.use("/api/auth", authRoutes);

const calendarRoutes = require("./routes/googleCalendar/google-calendar.routes");
app.use("/api/calendar", calendarRoutes);


app.listen(PORT, () => console.log(`running on http://localhost:${PORT}`));
