import express from "express";
import cors from "cors";
import axios from "axios";
import cheerio from "cheerio";
import { Scrape } from "./routes/Scrape.js";

const PORT = 5050;

const app = express();

app.use(express.json());
app.use(cors());

const degreeLinks = {
  'biochem': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/biochemistry-bs/',
  'chemistry': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/chemistry-biochemistry/chemistry-bs/',
  'compsci': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/',
  'civil': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/civil-engineering-bs/',
  'electricalcs': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-computer-specialization-bs/',
  'electricalmn': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/electrical-engineering-micro-nano-devices-systems-specialization-bs/',
  'industrial': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/industrial-engineering-bs/',
  'manufact': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/manufacturing-engineering-general-concentration-bs/',
  'mechanical': 'http://mycatalog.txstate.edu/undergraduate/science-engineering/ingram-school/mechanical-bs/',

}

app.get('/scrape/:majorCode', async (req, res) => {
  try {
    const majorCode = req.params.majorCode;
    const url = degreeLinks[majorCode];

    if (!url) {
      throw new Error('Invalid major code');
    }

    const courseInfo = await Scrape(url);
    res.json(courseInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/scrape', async (req, res) => {
  try {
    const courseInfo = await Scrape('http://mycatalog.txstate.edu/undergraduate/science-engineering/computer/computer-science-bs/');
    res.json(courseInfo);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});