import mongoose from "mongoose";
const newSubLedgerSchema = new mongoose.Schema({
  ledger_code: {
    type: String,
    required: true,
  },
  subledger_code: {
    type: String,
    required: true,
  },
  subledger_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const newSubLedgerModel = mongoose.model("Subledger", newSubLedgerSchema);
export default newSubLedgerModel;
