export const appVariables = () =>
  process.env.NODE_ENV === "production"
    ? { baseurl: "https://apis.rashtell.com" }
    : { baseurl: "http://localhost/rashtell/apis" };


export const header=()=>({
  "Content-Type": "application/json",
  Accepts: "application/json",
})