import express from "express";
const app = express();
const PORT = 5200;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});
