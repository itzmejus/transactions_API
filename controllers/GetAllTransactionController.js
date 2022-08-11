import newAccoountModel from "../models/TransactionModel.js";

export const getAllTransactionDetailControllers = async (req, res) => {
    newAccoountModel.find({}, (err, transactionData) => {
    if (err) {
      res.send(err);
    }
    res.send(transactionData);
  });
};
