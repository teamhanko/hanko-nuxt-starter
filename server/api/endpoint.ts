export default defineEventHandler(async (event) => {
    const hanko = event.context.hanko;
    if (!hanko || !hanko.sub) {
      return {
        status: 401,
        body: {
          message: "Unauthorized",
        },
      };
    }
    // Do something with the Hanko user
    return {
      hanko: event.context.hanko,
    };
  });