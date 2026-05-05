import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/db";
import { users } from "@/db/schema";

export async function SyncUser() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  // Safety check in case DB isn't configured yet so it doesn't crash the whole app immediately
  if (!process.env.DATABASE_URL) {
    console.warn("DATABASE_URL is missing. SyncUser aborted.");
    return null;
  }

  try {
    await db.insert(users).values({
      id: user.id,
      email: user.emailAddresses[0]?.emailAddress ?? "",
      firstName: user.firstName,
      lastName: user.lastName,
      imageUrl: user.imageUrl,
    }).onConflictDoUpdate({
      target: users.id,
      set: {
        email: user.emailAddresses[0]?.emailAddress ?? "",
        firstName: user.firstName,
        lastName: user.lastName,
        imageUrl: user.imageUrl,
      }
    });
  } catch (error) {
    console.error("Failed to sync user to database:", error);
  }

  // This is a logic component, it renders nothing
  return null;
}
