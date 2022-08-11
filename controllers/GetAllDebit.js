import newAccoountModel from "../models/TransactionModel.js";

export const getAllDeditControllers = async (req, res) => {
  newAccoountModel.find({ type: { $eq: "Dr" } }, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
};
