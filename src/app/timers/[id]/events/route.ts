const clients = new Set<ReadableStreamDefaultController<Uint8Array>>();

const addClient = (controller: ReadableStreamDefaultController<Uint8Array>) => {
  clients.add(controller);
};

const removeClient = (
  controller: ReadableStreamDefaultController<Uint8Array>,
) => {
  clients.delete(controller);
};

const broadcast = (data: Record<string, unknown>) => {
  const encodedData = new TextEncoder().encode(
    `data: ${JSON.stringify(data)}\n\n`,
  );
  for (const controller of clients) {
    controller.enqueue(encodedData);
  }
};

export const GET = async (request: Request) => {
  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      addClient(controller);

      const closeStream = () => {
        removeClient(controller);
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
    broadcast(data);
    return new Response(null, { status: 204 }); // No Content
  } catch (_error) {
    return new Response("Error processing PATCH request", { status: 500 });
  }
};
