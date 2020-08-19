const server = require("./api/server.js");
const accountRouter = require("./accounts/account-router");
const welcomeRouter = require("./welcome/welcome-router");

const PORT = process.env.PORT || 5000;

server.use("/", welcomeRouter)
server.use("/accounts", accountRouter)


server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
