const express = require("express");
const { connectToMongoDB } = require("./db/connect");
const urlRoute = require("./routes/url");
const URL = require("./models/url");
const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://localhost:27017/trimly").then(() =>
   console.log("MongoDB connected")
);

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
   const shortId = req.params.shortId;
   const entry = await URL.findOneAndUpdate(
      {
         shortId,
      },
      {
         $push: {
            visitHistory: {
               timestamp: Date.now(),
            },
         },
      }
   );
   res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server running at PORT: ${PORT}`));
