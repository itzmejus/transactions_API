import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { addNewTransactionController } from "./controllers/TransactionController.js";
import { getAllTransactionDetailControllers } from "./controllers/GetAllTransactionController.js";
import { getAllCreditControllers } from "./controllers/GetSingleTransaction.js";
import { getAllDeditControllers } from "./controllers/GetAllDebit.js";
import {
  addLedgerController,
  getAllLedgerControllers,
} from "./controllers/LedgerController.js";
import {
  addSubLedgerController,
  getAllSubLedgerControllers,
} from "./controllers/AddSubLedger.js";
import { getAllExpenseControllers } from "./controllers/GetExpense.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;
const dburl =
  "mongodb+srv://justin:justinbro@cluster0.9f9un.mongodb.net/BankData?retryWrites=true&w=majority";
const connectionParams = {
  useNewUrlParser: true,
};
mongoose
  .connect(dburl, connectionParams)
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("error:", e);
  });
// add new transaction
app.post("/addtransaction", addNewTransactionController);
// get all transaction
app.get("/transaction", getAllTransactionDetailControllers);
// add new ledger
app.post("/addLedger", addLedgerController);
// Get All Credits
app.get("/credit", getAllCreditControllers);
// Get All Debits
app.get("/debit", getAllDeditControllers);
// get all Ledger
app.get("/ledger", getAllLedgerControllers);
// get all sub ledger
app.get("/subledger", getAllSubLedgerControllers);
// add new subLedger
app.post("/addSubledger", addSubLedgerController);
// get expenses
app.get("/expenses", getAllExpenseControllers);

app.get("/", (req, res) => {
  res.send("hello connected");
});

app.listen(5000, () => console.log(`server is runnig at ${PORT}`));
