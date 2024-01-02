import express from 'express'

const app = express()
const router = express.Router()

app.use(express.static('public'))

router.get('/', (req,res) => {
    res.sendFile('index.html', {root: 'public'})
  });

app.use(router)
const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))