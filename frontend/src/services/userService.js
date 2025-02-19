export const userService = {
  login,
  getValidUser,
  checkAuth,
};

const path = "http://localhost:3000/";

import { googleSdkLoaded } from "vue3-google-login";
import { storageService } from "./storage.service";

async function login() {
  return new Promise((resolve, reject) => {
    googleSdkLoaded((google) => {
      google.accounts.oauth2
        .initCodeClient({
          client_id:
            "151508142169-2mc0r9sra0b7bjfi0otpgrh88ghumdsq.apps.googleusercontent.com",
          scope:
            "email profile openid https://www.googleapis.com/auth/calendar",
          callback: async (response) => {
            try {
              const tokenData = await fetch(`${path}api/auth/login`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ code: response.code }),
                credentials: "include",
              }).then((res) => res.json());

              const user = {
                access_token: tokenData.access_token,
                expires_in: Date.now() + tokenData.expires_in * 1000,
                userInfo: tokenData.userInfo,
              };

              storageService.save("User", user);
              resolve(user);
            } catch (err) {
              reject(err);
            }
          },
        })
        .requestCode();
    });
  });
}

async function getValidUser() {
  const user = storageService.load("User");
  if (!user) return null;

  if (user.expires_in - Date.now() < 300000) {
    try {
      // console.log("first user in getValidUser: ",user)
      const newTokenData = await fetch(path + "api/auth/refresh", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${user.access_token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: user.userInfo.email,
        }),
        credentials: "include",
      }).then((res) => res.json());

      const updatedUser = {
        ...user,
        access_token: newTokenData.access_token,
        expires_in: Date.now() + newTokenData.expires_in * 1000,
      };

      // console.log("updatedUser", updatedUser);
      storageService.save("User", updatedUser);
      return updatedUser;
    } catch (error) {
      console.error("Error refreshing token:", error);
      storageService.remove("User");
      return null;
    }
  }
  return user;
}

async function checkAuth() {
  const user = await getValidUser();
  if (!user) {
    await login();
  }
  return user;
}
