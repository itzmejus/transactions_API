import newAccoountModel from "../models/TransactionModel.js";
export const addNewTransactionController = async (req, res) => {
  try {
    const {
      date,
      transaction_code,
      cash_code,
      ledger_code,
      subLedger_code,
      type,
      amount,
    } = req.body;
    console.log(req.body);
    const transactionData = new newAccoountModel({
      date,
      transaction_code,
      cash_code,
      ledger_code,
      subLedger_code,
      type,
      amount,
    });
    await transactionData.save();
    res.send("data saved");
  } catch (error) {
    console.log(error);
    res.send({ message: error });
  }
};
