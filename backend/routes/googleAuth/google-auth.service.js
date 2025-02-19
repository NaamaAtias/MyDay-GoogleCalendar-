const googleConfig = require("../../config/google.config");

async function getGoogleTokens(code) {
  const formData = new URLSearchParams({
    code,
    client_id: googleConfig.client_id,
    client_secret: googleConfig.client_secret,
    redirect_uri: googleConfig.redirect_uri,
    grant_type: "authorization_code",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  return response.json();
}

async function getUserInfo(accessToken) {
  const response = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  return response.json();
}

async function refreshGoogleToken(refreshToken) {
  const formData = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: googleConfig.client_id,
    client_secret: googleConfig.client_secret,
    grant_type: "refresh_token",
  });

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });

  return response.json();
}

module.exports = {
  getGoogleTokens,
  getUserInfo,
  refreshGoogleToken,
};
