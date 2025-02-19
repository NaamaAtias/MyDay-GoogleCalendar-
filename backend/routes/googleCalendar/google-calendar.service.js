async function getCalendarEvents(queryParams, accessToken) {
  const params = new URLSearchParams({
    timeMin: queryParams.timeMin,
    timeMax: queryParams.timeMax,
    orderBy: queryParams.orderBy,
    singleEvents: queryParams.singleEvents,
    maxResults: queryParams.maxResults,
    showDeleted: queryParams.showDeleted,
  });

  const response = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params}`,
    {
      method: "GET",
      headers: {
        Authorization: accessToken,
      },
    }
  );
  if (!response.ok) return res.status(500).json({ error: error.message });

  return response.json();
}

module.exports = {
  getCalendarEvents,
};
