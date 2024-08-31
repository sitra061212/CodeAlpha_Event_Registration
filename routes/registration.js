import { Router } from 'express';
const router = Router();
import auth from '../middleware/auth.js';
import Event from '../models/Event.js';

// Register for an event
router.post('/:id/register', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    if (event.participants.includes(req.user.id)) {
      return res.status(400).json({ msg: 'Already registered' });
    }

    event.participants.push(req.user.id);
    await event.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Unregister from an event
router.post('/:id/unregister', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ msg: 'Event not found' });

    event.participants = event.participants.filter(id => id.toString() !== req.user.id);
    await event.save();
    res.json(event);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// View registered events
router.get('/my-events', auth, async (req, res) => {
  try {
    const events = await Event.find({ participants: req.user.id });
    res.json(events);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;
