export const appVariables = () =>
  process.env.NODE_ENV === "production"
    ? { baseurl: "https://apis.touchandpay.me/coroclub/rashtellger" }
    : { baseurl: "http://localhost/rashtell/apis" };


export const header=()=>({
  "Content-Type": "application/json",
  Accept: "application/json",
})