import cookie from "@fastify/cookie";
import websocket from "@fastify/websocket";
import fastify from "fastify";
import { config } from "../config/index.schema";
import { createPoll } from "./routes/create-poll";
import { getPoll } from "./routes/get-poll";
import { voteOnPoll } from "./routes/vote-on-poll";
import { pollResults } from "./websocket/poll-results";

const { PORT, COOKIE_SECRET } = config;

const app = fastify();

app.register(cookie, {
  secret: COOKIE_SECRET,
  hook: "onRequest",
});

app.register(websocket);

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.register(pollResults);

app.listen({ port: PORT }).then(() => {
  console.log("HTTP server running!");
});
