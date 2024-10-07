import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://HemantKumar:HemantKumarS@foodcluster0.2ktae.mongodb.net/E-COMMERCE"
    )
    .then(() => {
      console.log("DB is conneccted Sucessfully");
    })
    .catch((error) => {
      console.log(err);
    });
};
