import { handlers } from "@/auth"

export async function GET(req: Request) {
  try {
    return await handlers.GET(req)
  } catch (error) {
    console.error("AUTH GET ERROR:", error)
    throw error
  }
}

export async function POST(req: Request) {
  try {
    return await handlers.POST(req)
  } catch (error) {
    console.error("AUTH POST ERROR:", error)
    throw error
  }
}