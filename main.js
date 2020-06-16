const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const main = async () => {
  console.log(await prisma.queryRaw('select 1'))
}

main().finally(() => prisma.disconnect()).catch(e => {
  console.error(e)
  process.exit(2)
})
