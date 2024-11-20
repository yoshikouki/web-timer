// At the module level, maintain an Array of connected clients
const clients: ReadableStreamController<string>[] = [];

export const GET = async (request: Request) => {
  const stream = new ReadableStream({
    start(controller) {
      clients.push(controller);

      const closeStream = () => {
        const index = clients.indexOf(controller);
        if (0 <= index) {
          clients.splice(index, 1);
        }
        controller.close();
      };
      request.signal.addEventListener("abort", closeStream);
    },
  });

  const streamHeaders: HeadersInit = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  };

  return new Response(stream, {
    status: 200,
    headers: streamHeaders,
  });
};

export const PATCH = async (_request: Request) => {
  try {
    const data = { time: new Date().toISOString() };
    for (const controller of clients) {
      controller.enqueue(`data: ${JSON.stringify(data)}\n\n`);
    }
    return new Response(null, { status: 204 }); // No Content
  } catch (_error) {
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
