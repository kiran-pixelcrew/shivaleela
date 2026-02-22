import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

dotenv.config();

const MONGO_URI = process.env.MONGODB_URI!;
const MEDIA_COLLECTION = "media";
const MEDIA_DOC_ID = "main";
const ADMIN_COLLECTION = "admin";
const ADMIN_DOC_ID = "main";

async function seed() {
  const email = process.env.ADMIN_EMAIL || "admin1@gmail.com";
  const password = process.env.ADMIN_PASSWORD || "Admin@123";

  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db();

  const adminCol = db.collection(ADMIN_COLLECTION);
  const existingAdmin = await adminCol.findOne({ _id: ADMIN_DOC_ID as any });

  const passwordHash = await bcrypt.hash(password, 12);

  if (existingAdmin) {
    console.log("Admin document exists. Updating credentials.");
    await adminCol.updateOne(
      { _id: ADMIN_DOC_ID as any },
      { $set: { admin: { email, passwordHash } } }
    );
  } else {
    await adminCol.insertOne({ _id: ADMIN_DOC_ID as any, admin: { email, passwordHash } });
    console.log("Created admin document.");
  }

  const mediaCol = db.collection(MEDIA_COLLECTION);
  const existingMedia = await mediaCol.findOne({ _id: MEDIA_DOC_ID as any });
  if (!existingMedia) {
    await mediaCol.insertOne({ _id: MEDIA_DOC_ID as any, mediaImages: [] });
    console.log("Created media document.");
  } else {
    console.log("Media document already exists.");
  }

  console.log("Admin email set to:", email);
  await client.close();
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});