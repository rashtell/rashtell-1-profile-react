import { appVariables, header } from "./base";

export const sendMessage = (messageObj) => {
  const url = appVariables().baseurl;

  return fetch(`${url}/v1/message/create/message`, {
    headers: header(),
    method: "POST",
    body: JSON.stringify({data : messageObj}),
  })
    .then((res) => res.json)
    .then((resJson) => {
      if (resJson.error) {
        throw resJson.error;
      }

      return window.alert("Message succeessfully sent. Thanks.");
    })
    .catch((error) => {
      return window.alert("Message failed. Thanks.");
    });
};
