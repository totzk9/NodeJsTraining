const { Client } = require('pg')

const client = new Client({
  user: "postgres",
  password: "password",
  host: "0.0.0.0",
  port: 5432,
  database: "test",
})

client.query("BEGIN")

const execute = async () => {
  try {
    await client.connect()
    client.query("BEGIN")
  
    const {rows} = await client.query("SELECT * FROM employees")
    console.table(rows)
    client.query("COMMIT")
  } catch(ex) {
    client.query("ROLLBACK")
  }
  await client.end()
}

execute()
