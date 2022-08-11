import mongoose from "mongoose";
const newLedgerSchema = new mongoose.Schema({
  
  ledger_code: {
    type: String,
    required: true,
  },
  ledger_name: {
    type: String,
    required: true,
  },
  

});

const newLedgerModel = mongoose.model("ledger", newLedgerSchema);
export default newLedgerModel;