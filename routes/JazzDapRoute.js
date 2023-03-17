const {Router} = require("express")
const {getJazzDap, saveJazzDap, updateJazzDap, deleteJazzDap} = require('../controllers/JazzDapController')
const router = Router()

// router.get('/',(req,res) => { res.json({message:"Hi there"})  })

router.get('/', getJazzDap )
router.post('/save', saveJazzDap)
router.post('/update', updateJazzDap)
router.post('/delete', deleteJazzDap)

module.exports = router;