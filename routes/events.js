import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth.js';
import Event from '../models/Event.js';

// Create event
router.post('/', auth, async (req, res) => {
  const { title, description, date, location } = req.body;
  try {
    const newEvent = new Event({ title, description, date, location });
    const event = await newEvent.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all events
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get event by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
