const mongoose = require("mongoose");
const { Schema } = mongoose;

const MONGO_URL = "mongodb://127.0.0.1:27017/relationship";

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log("MongoDB is connected");
}

main().catch((err) => console.log(err));

// Create Orders Schema
const orderSchema = new Schema({
  item: String,
  price: Number,
});

// Create Customers Schema
const customerSchema = new Schema({
  name: String,
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
})


//Mongoose Pre Middleware
// customerSchema.pre("findOneAndDelete",async()=>{
// console.log("pre Middleware triggered");
// })

 //Mongoose Post Middleware
customerSchema.post("findOneAndDelete", async (customer) => {
  if (customer.orders.length > 0) {
    let res = await Order.deleteMany({ _id: { $in: customer.orders } });
    console.log(res);
  }
});

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);


const addCust = async () => {
  let newcust = new Customer({ name: "karan Arjun" });

  let neworder = new Order({
    item: "Burger",
    price: 250,
  });

  newcust.orders.push(neworder);
  await neworder.save();
  await newcust.save();
};

// addCust();

const findCustomer = async () => {
  let res = await Customer.find({}).populate("orders");
  console.log(res);
};

// findCustomer();

const delCust = async () => {
  const del = await Customer.findByIdAndDelete("67c99662ca10cdebf883ba63");
  console.log(del);
};
delCust();


// const addOrders=async()=>{
//   let res=  await Order.insertMany([
//         {item:"Samosa",price:15},
//         {item:"Chips",price:10},
//         {item:"Chocolate",price:80},
//     ]);
//     console.log(res);
// }

// addOrders();

// const addCustomer = async () => {
//     let cust1 = new Customer({ name: "Rahul Kumar" });

//     let order1 = await Order.findOne({ item: "Chips" });
//     let order2 = await Order.findOne({ item: "Chocolate" });

//     if (order1) cust1.orders.push(order1);
//     if (order2) cust1.orders.push(order2);

//     let res = await cust1.save();
//     console.log("Customer added:", res);
// };

// addCustomer();
