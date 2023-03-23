const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (req, h) => {
      return "Halo dunia";
    },
  });

  await server.start();
  console.log(`Server on the url ${server.info.uri}`);
};

init();
