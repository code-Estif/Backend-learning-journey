const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {

  const newuser = await prisma.user.create({
    data: {
      name: "Estifo",
      email: "estifo@example.com"
    },
  });
}

main();