import newSubLedgerModel from "../models/SubLedgerModel.js";

export const getAllExpenseControllers = async (req, res) => {
    newSubLedgerModel.find({ category: { $eq: "Expense" } }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
