const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccount = require("./serviceKey.json");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const uri = `mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@cluster0.zyoungn.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

//middleware here
const verifyFirebaseToken = async (req, res, next) => {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).send({
      message: "Unauthorized: No token provided",
    });
  }
  const token = authorization.split(" ")[1];

  try {
    await admin.auth().verifyIdToken(token);
    next();
  } catch (error) {
    res.status(401).send({
      message: "Unauthorized: No token provided",
    });
  }
};

async function run() {
  try {
    // await client.connect();
    const db = client.db("Book-db");
    const booksCollecton = db.collection("books");

    //find allbooks from mongodb
    app.get("/books", async (req, res) => {
      const result = await booksCollecton.find().toArray();
      res.send(result);
    });

    //post: Add Books
    app.post("/books", async (req, res) => {
      const data = req.body;
      // console.log(data);
      const result = await booksCollecton.insertOne(data);
      res.send({
        success: true,
        result,
      });
    });

    //Get: view BopkDetails By Id
    app.get("/books/:id", async (req, res) => {
      const { id } = req.params;
      const objectId = new ObjectId(id);
      const result = await booksCollecton.findOne({ _id: objectId });
      res.send({
        success: true,
        result,
      });
    });

    //Put: update bookss
    app.put("/books/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const objectId = new ObjectId(id);
      const filter = { _id: objectId };
      const update = {
        $set: data,
      };
      const result = await booksCollecton.updateOne(filter, update);
      res.send({
        success: true,
        result,
      });
    });

    //Get: latest-book show home page
    app.get("/latest-books", async (req, res) => {
      const result = await booksCollecton
        .find()
        .sort({ _id: "asc" })
        .limit(6)
        .toArray();
      res.send(result);
    });

    //Get: Search Book Name
    app.get("/search", async (req, res) => {
      const search_title = req.query.search;
      const result = await booksCollecton
        .find({ title: { $regex: search_title, $options: "i" } })
        .toArray();
      res.send(result);
    });

    //Delete: delete selected book
    app.delete("/books/:id", async (req, res) => {
      const { id } = req.params;
      const objectId = new ObjectId(id);
      const filter = { _id: objectId };
      const result = await booksCollecton.deleteOne(filter);
      res.send({
        success: true,
        result,
      });
    });

    //Get: My-Books collection API
    app.get("/my-book", async (req, res) => {
      const email = req.query.email;
      const result = await booksCollecton.find({ userEmail: email }).toArray();
      res.send(result);
    });

    // Get: All books sorted by rating (Desc default) not work
    app.get("/booksSort/sort", async (req, res) => {
      try {
        const order = req.query.order === "asc" ? 1 : -1;
        const result = await booksCollecton
          .find()
          .sort({ rating: order })
          .toArray();
        res.json(result);
      } catch (err) {
        console.error("Sort error:", err);
        res.status(500).json({ success: false, message: "Server Error" });
      }
    });

    // await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Serve is running fine!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});