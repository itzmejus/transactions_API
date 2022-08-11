import newSubLedgerModel from "../models/SubLedgerModel.js";

export const addSubLedgerController = async (req, res) => {
  try {
    const { ledger_code, subledger_code, subledger_name, category } = req.body;
    console.log(req.body);
    const LedgerData = new newSubLedgerModel({
      ledger_code,
      subledger_code,
      subledger_name,
      category,
    });
    await LedgerData.save();
    res.send("data saved");
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};

export const getAllSubLedgerControllers = async (req, res) => {
  newSubLedgerModel.find({}, (err, subledger) => {
    if (err) {
      res.send(err);
    }
    res.send(subledger);
  });
};
