import { FastifyInstance } from "fastify";
import { array, object, string } from "zod";
import { prisma } from "../../lib/prisma";

export async function createPoll(app: FastifyInstance) {
  app.post("/polls", async (request, reply) => {
    const createPollBody = object({
      title: string().trim(),
      options: array(string().trim()),
    });

    const { title, options } = createPollBody.parse(request.body);

    const poll = await prisma.poll.create({
      data: {
        title,
        options: {
          createMany: {
            data: options.map((option) => {
              return {
                title: option,
              };
            }),
          },
        },
      },
    });

    return reply.status(201).send({ pollId: poll.id });
  });
}
