import express from "express";
const app = express();
export default app;
 app.use(express.json())

// import employees from "#db/employees";

import employeesList from "#api/employees";
import employees from "#db/employees";
import router from "#api/employees";

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesList)//.get((req, res) => {
//   res.send(employees);
// });

// // Note: this middleware has to come first! Otherwise, Express will treat
// // "random" as the argument to the `id` parameter of /employees/:id.
// app.route("/employees/random").get((req, res) => {
//   const randomIndex = Math.floor(Math.random() * employees.length);
//   res.send(employees[randomIndex]);
// });

// router.route("/:id").get((req, res) => {
//   const { id } = req.params;

// //   // req.params are always strings, so we need to convert `id` into a number
// //   // before we can use it to find the employee
// //   const employee = employees.find((e) => e.id === +id);

//   if (isNaN (id)) {
//     return res.status(404).send("Employee not found");
//   }
//    if (id > employees.length  ) {
//     return res.status(400).send("Pick A smaller number")
//    }

//   res.send(employees[id - 1] );
// });
