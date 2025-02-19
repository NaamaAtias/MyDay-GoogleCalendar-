const calendarService = require("./google-calendar.service");

async function getEvents(req, res) {
  try {
    const params = req.query;
    const accessToken = req.headers.authorization;

    const events = await calendarService.getCalendarEvents(params, accessToken);

    res.json({
      events: events.items,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getEvents,
};
