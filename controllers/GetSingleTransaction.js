import newAccoountModel from "../models/TransactionModel.js";

export const getAllCreditControllers = async (req, res) => {
  newAccoountModel.find({ type: { $eq: "Cr" } }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
