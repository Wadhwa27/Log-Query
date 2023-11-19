import { createServer } from "http";
import { createLogger, transports as _transports } from "winston";
import ecsFormat from "@elastic/ecs-winston-format";

const logger = createLogger({
  level: "debug",
  format: ecsFormat({ convertReqRes: true }),
  transports: [
    //new winston.transports.Console(),
    new _transports.File({
      //path to log file
      filename: "logs/log.json",
      level: "debug",
    }),
  ],
});

const server = createServer(handler);
server.listen(3000, () => {
  logger.info("listening at http://localhost:3000");
});
function handler(req, res) {
  res.setHeader("Foo", "Bar");
  res.end("ok");
  logger.info("handled request", { req, res });
}
