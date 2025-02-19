const authService = require("./google-auth.service");

var refreshTokens = {};

async function login(req, res) {
  try {
    const { code } = req.body;

    const tokenResponse = await authService.getGoogleTokens(code);

    const userInfo = await authService.getUserInfo(tokenResponse.access_token);
    const userEmail = userInfo.email;
    refreshTokens[userEmail] = tokenResponse.refresh_token;

    res.json({
      access_token: tokenResponse.access_token,
      expires_in: tokenResponse.expires_in,
      userInfo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function refresh(req, res) {
  try {
    const { userEmail } = req.body;
    //   const refreshToken = req.refreshToken; // Get from secure session/DB // TO FIX LATER!!
    const refreshToken = refreshTokens[userEmail];

    const newTokens = await authService.refreshGoogleToken(refreshToken);

    res.json({
      access_token: newTokens.access_token,
      expires_in: newTokens.expires_in,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  login,
  refresh,
};
