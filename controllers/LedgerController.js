import newLedgerModel from "../models/LedgerModel.js";

export const addLedgerController = async (req, res) => {
    try {
      const {
        ledger_code,
        ledger_name,
      } = req.body;
      console.log(req.body);
      const LedgerData = new newLedgerModel({
        ledger_code,
        ledger_name,
      });
      await LedgerData.save();
      res.send("data saved");
    } catch (error) {
      console.log(error);
      res.send({ message: error });
    }
  };

  export const getAllLedgerControllers = async (req, res) => {
    newLedgerModel.find({}, (err, ledger) => {
    if (err) {
      res.send(err);
    }
    res.send(ledger);
  });
};
  