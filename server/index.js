import express from "express";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const app = express();
app.use(cors());
app.use(express.json());

app.post("/upload/pdf", upload.single("pdf"), (req, res) => {
  const pdfFile = req.file;
  if (!pdfFile) {
    return res.status(400).json({ error: "No PDF file uploaded" });
  }

  return res.status(200).json({ message: "PDF uploaded successfully" });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
