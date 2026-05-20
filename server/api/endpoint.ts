export default defineEventHandler(async (event) => {
  const hanko = event.context.hanko;

  // Returning `{ status: 401, body: ... }` from a handler does NOT set the
  // HTTP status code — the client receives a 200 with that JSON as the body.
  // Use createError() so the response is a real 401.
  if (!hanko?.sub) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized',
    });
  }

  return {
    userId: hanko.sub,
    email: hanko.email?.address ?? null,
    sessionExpiresAt: hanko.exp,
  };
});
