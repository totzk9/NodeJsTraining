const express = require('express')
const { sequelize } = require('./models')
const user = require('./models/user')
const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  const { name, email, role } = req.body

  try {
    const user = await user.create({ name, email, role })
    return res.json(user)
  } catch(ex) {
    console.log(ex)
    return res.status(500)
  }
})
async function main() {
  await sequelize.sync({ force: true })
}

main()