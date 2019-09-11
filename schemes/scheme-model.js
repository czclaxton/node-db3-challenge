const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .select("steps.id", "steps.step_number", "steps.instructions", "schemes.id")
    .where({ scheme_id: id });
}

function add(schemeData) {
  return db("schemes")
    .insert(schemeData)
    .then(ids => {
      return findById(ids[0]);
    });
}

function addStep(stepData, id) {}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
