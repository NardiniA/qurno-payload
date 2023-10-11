import payload from "payload";
import { MongoClient } from "mongodb";
import { demoEditor, demoUser } from "./data/users";
import { demoServer } from "./data/api";

async function dropDB() {
  const client = await MongoClient.connect(process.env.DATABASE_URI);
  const db = client.db(new URL(process.env.DATABASE_URI).pathname.substring(1));
  await db.dropDatabase();
}

async function seedData() {
  // Users and Api Access
  const { id: demoUserId } = await payload.create({
    collection: "users",
    data: demoUser,
  });

  const { id: demoEditorId } = await payload.create({
    collection: "users",
    data: demoEditor,
  });

  const { id: demoServerId } = await payload.create({
    collection: "api-access",
    data: demoServer,
  });

  // Add data for other collcetions...
}

export async function reset() {
  try {
    payload.logger.info("Seeding database...");

    await dropDB();
    await seedData();

    payload.logger.info("Seeding complete.");
  } catch (error) {
    console.error(error);
    payload.logger.error("Error resetting database.");
  }
}
