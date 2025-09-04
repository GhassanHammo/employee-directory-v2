import express from "express";
const router = express.Router();
export default router;

import employees from "#db/employees";

router
  .route("/")
  .get((req, res) => {
    res.send(employees);
  })
  .post((req, res) => {
    const { name } = req.body;
    // if (!req.body) {
    //   return res.status(400).send("name is not correctly provided.");
    // } else {
    //   const newEmployee= addNote(newEmployee);
    //   return res.status(201).send(newEmployee);
    // }
    const newEmployee = employees[employees.length - 1];
    let id = newEmployee.id;
    id++;
    const obj = {
      id,
      name,
    };
    employees.push(obj);
    res.send(obj);
   });

router.route("/:id").get((req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(404).send("Employee not found");
  }
  if (id > employees.length) {
    return res.status(400).send("Pick A smaller number");
  }

  res.send(employees[id - 1]);
});
