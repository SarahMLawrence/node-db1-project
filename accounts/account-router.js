const express = require("express");
const db = require("../data/dbConfig");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // SELECT * FROM accounts
    const account = await db.select("*").from("accounts");

    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const [account] = await db
      .select("*")
      .from("accounts")
      .where("id", req.params.id)
      .limit(1);

    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const [id] = await db
      .insert({
        name: req.body.name,
        budget: req.body.budget,
      })
      .into("accounts");

    const account = await db("accounts").where("id", id).first();

    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await db("accounts")
      .update({
        name: req.body.name,
        budget: req.body.budget,
      })
      .where("id", req.params.id);

    const account = await db("accounts").where("id", req.params.id).first();

    res.json(account);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await db("accounts").where("id", req.params.id).del();

    res.status(203).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
