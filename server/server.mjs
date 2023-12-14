import express from "express";
import cors from "cors";
import { Scrape } from "./routes/Scrape.js"; 
const PORT = 5050;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/scrape', async (req, res) => {
  try {
    const courseInfo = await Scrape(); // Use the scrapeData function
    res.json(courseInfo); // Send structured data as JSON response
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
