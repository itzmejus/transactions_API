import mongoose from "mongoose";
const newAccount = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  transaction_code: {
    type: String,
    required: true,
  },
  cash_code: {
    type: String,
    required: true,
  },
  ledger_code: {
    type: String,
    required: true,
  },
  subLedger_code: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },

});

const newAccoountModel = mongoose.model("Bank", newAccount);
export default newAccoountModel;
