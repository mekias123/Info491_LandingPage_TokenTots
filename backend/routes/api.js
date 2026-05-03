import { Router } from 'express'
// import Waitlist from '../models/Waitlist.js'  // uncomment when ready to activate waitlist

const router = Router()

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// ── Waitlist endpoint (scaffolded — uncomment to activate) ─────────────────
//
// router.post('/waitlist', async (req, res) => {
//   const { email, name } = req.body
//   if (!email) return res.status(400).json({ error: 'Email is required' })
//   try {
//     const entry = await Waitlist.create({ email, name })
//     res.status(201).json({ success: true, id: entry._id })
//   } catch (err) {
//     if (err.code === 11000) {
//       return res.status(409).json({ error: 'Email already registered' })
//     }
//     res.status(500).json({ error: 'Server error' })
//   }
// })
//
// ── Contact form endpoint (scaffolded — uncomment to activate) ─────────────
//
// router.post('/contact', async (req, res) => {
//   const { name, email, message } = req.body
//   if (!email || !message) return res.status(400).json({ error: 'Email and message are required' })
//   // TODO: wire up email service (SendGrid, Resend, etc.)
//   res.json({ success: true })
// })

export default router
