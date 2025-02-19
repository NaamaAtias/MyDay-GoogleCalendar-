export const googleCalendarService = {
  getEvents,
};

import { userService } from "./userService";

const path = "http://localhost:3000/";

async function getEvents(start = new Date(), end = new Date()) {
  const user = await userService.checkAuth();
  if (!user) return;

  // console.log("user in getEvents: ", user);

  start.setHours(0, 0, 0, 0);
  const startDate = start.toISOString();

  end.setHours(23, 59, 59, 999);
  const endDate = end.toISOString();

  const params = new URLSearchParams({
    timeMin: startDate,
    timeMax: endDate,
    orderBy: "startTime",
    singleEvents: "true",
    maxResults: "50",
    showDeleted: "false",
  });

  try {
    const response = await fetch(`${path}api/calendar/events?${params}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.access_token,
      },
      credentials: "include",
    }).then((res)=>res.json())

    return response.events;

  } catch (err) {
    console.log("error in fetch events", err);
    throw err;
  }
}
