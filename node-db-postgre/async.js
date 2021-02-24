const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  password: "password",
  host: "0.0.0.0",
  port: 5432,
  database: "test",
})


const execute = async () => {
  try {
    await client.connect()
    console.log("ConnectedUH SucceszAHfuleeh")
    const results = await client.query("SELECT * FROM employees")
    console.table(results.rows)
  } catch(e) {
    console.log(e)
  }
  await client.end()
}

execute()
