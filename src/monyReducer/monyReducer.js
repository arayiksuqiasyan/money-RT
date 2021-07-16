import { createSlice } from "@reduxjs/toolkit";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.png";

const initialState = {
  cards: [
    {
      logo: logo1,
      title: "1. Register",
      text: "Sign up online or in our app free.",
    },
    {
      logo: logo2,
      title: "2. Choose an amount ",
      text: "How much you want to send.We'll show your our fees app front and tell you when uour money should arrive.",
    },
    {
      logo: logo3,
      title: "3. Add reciptient's bank",
      text: "Feel in the details of your reciptient's bank account",
    },
    {
      logo: logo4,
      title: "4. Verify your identty",
      text: "For some currencies,or for large transfers,we need a photo of ypur ID, This help us keep your money safe",
    },
    {
      logo: logo5,
      title: "5. Pay for your transfer",
      text: "Send your money with a bank transfer,or a debit or credit card",
    },
  ],
};
export const counterSlice = createSlice({
  name: "mony",
  initialState,

  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
