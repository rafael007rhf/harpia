import { PrismaClient } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import bcrypt from "bcryptjs"
import "dotenv/config"

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! })
const prisma = new PrismaClient({ adapter })

async function main() {
  const org = await prisma.organization.upsert({
    where: { id: "org-harpia-demo" },
    update: {},
    create: {
      id: "org-harpia-demo",
      name: "Incorporadora Demo",
    },
  })

  const hashedPassword = await bcrypt.hash("harpia123", 12)

  await prisma.user.upsert({
    where: { email: "admin@harpia.com" },
    update: {},
    create: {
      email: "admin@harpia.com",
      password: hashedPassword,
      name: "Admin Harpia",
      organizationId: org.id,
    },
  })

  console.log("✅ Seed concluído — usuário: admin@harpia.com / harpia123")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
