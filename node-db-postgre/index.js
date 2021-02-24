const { Client } = require("pg");

const client = new Client({
  user: "postgres",
  password: "password",
  host: "0.0.0.0",
  port: 5432,
  database: "test",
});


//promises
client
  .connect()
  .then(() => {
    console.log("Connecteduh succeszafuleeh");
  })
  .then(() => 
    client.query("INSERT INTO employees(name, position) VALUES ($1, $2);", ['Bruh', 'IT'])
  )
  .then(() => 
    client.query("select * from employees"))
  .then((results) => 
    console.table(results.rows)
  )
  .catch((e) => 
    console.log(e)
  )
  .finally(() => 
    client.end()
  );
