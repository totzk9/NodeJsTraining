const { Console } = require("console");
const mysql = require("mysql2/promise");

const connect = async () => {
  try {
    const con = await mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "password",
      database: "test",
    });

    con.beginTransaction();

    // when passing parameters, never do concatenation like
    // WHERE NAME = '${parameter}'
    // or
    // WHERE Name = '" + parameter + "'"
    // as this will greatly put your app in a vulnerable state that can allow
    // SQLInjections from attackers. Instead, pass an array of arguments.

    //insert query
    const insertedName = { name: "DO", info: "FUTUR" };

    const insertQuery = await con.query(
      `INSERT INTO EMPLOYEES (NAME, INFO) VALUES (?,?)`, [insertedName.name, insertedName.info]);
    console.log(insertQuery[0])

    // simple list query
    //
    const simpleQuery = await con.query("SELECT * FROM EMPLOYEES");
    console.table(simpleQuery[0]);

    // list where clause
    const name = "TYRONE";
    const whereClaus = await con.query(
      `SELECT * FROM EMPLOYEES WHERE NAME = ?`,
      [name]
    );
    console.table(whereClaus[0]);

    // // delete
    const deleteQuery = await con.query(`DELETE FROM EMPLOYEES WHERE NAME = ?`, [insertedName.name]);
    console.log(deleteQuery[0])

    const arr = ["TYRONE", "CHRIS", "JOHN"];
    // update
    const updateQuery = await con.query(
      `UPDATE EMPLOYEES SET NAME = CONCAT('DOCTOR ', NAME) WHERE NAME IN (?, ?, ?)`,
      [...arr]
    );
    const newName = "NEWNAME";
    const nameOLD = "TYLER";
    const updateQuery = await con.query(
      `UPDATE EMPLOYEES SET NAME = ? WHERE NAME IN (?)`,
      [newName, nameOLD]
    );
    console.log(updateQuery[0]);

    con.commit();

  } catch (e) {
    console.log(e);
  }
};

connect();
