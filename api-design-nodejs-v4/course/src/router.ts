import { Router } from 'express';

const router = Router();

/**
 * Product
 */
router.get('/product', (req, res) => {
    res.json({ message: 'hello' })
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/update/:id', () => {})

/**
 * Update
 */
 router.get('/update', (req, res) => {
    res.json({ message: 'hello' })
 })
 router.get('/update/:id', () => {})
 router.put('/update/:id', () => {})
 router.post('/update', () => {})
 router.delete('/update/:id', () => {})

 /**
  * Update Point
  */
  router.get('/updatepoint', () => {})
  router.get('/updatepoint/:id', () => {})
  router.put('/updatepoint/:id', () => {})
  router.post('/updatepoint/:id', () => {})
  router.delete('/updatepoint/:id', () => {})

  export default router;