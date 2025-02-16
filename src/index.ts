import { Connection, PublicKey } from "@solana/web3.js";
import { Context, Hono } from "hono";
import { getSnapshot } from "./lib/get-snapshot";
import { getSnapshotsForAddress } from "./lib/get-snapshots-for-address";
import { snapshots } from "./snapshots";
import { cors } from "hono/cors";
import { env } from "hono/adapter";
import { getWalletAddress } from "./lib/get-wallet-address";

const app = new Hono();

function getEnv(c: Context) {
  return env<{ ALLOWED_ORIGINS: string, HELIUS_ENDPOINT: string }>(c);
}

function getOrigins(c: Context): string[] {
  const e = getEnv(c);
  const envOrigins: string[] = getEnv(c).ALLOWED_ORIGINS?.split(";") ?? [];

  return envOrigins
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0);
}

function getConnection(c: Context): Connection {
  const e = getEnv(c);
  const endpoint: string = getEnv(c).HELIUS_ENDPOINT;
  if(!endpoint.length) {
    throw new Error("HELIUS_ENDPOINT is not set");
  }

  return new Connection(endpoint);
}

app.use(
  cors({
    origin: (origin, c) => {
      return getOrigins(c)?.includes(origin) ? origin : null;
    },
  })
);

app.get("/config", (c) => {
  const config = {
    ALLOWED_ORIGINS: getOrigins(c),
  };
  return c.json(config);
});

app.get("/", (c) => {
  return c.text("Samui Collection Allocation API");
});

app.get("/snapshots", (c) => {
  return c.json(snapshots);
});

app.get("/snapshots/:id", async (c) => {
  const id = c.req.param("id");
  const snapshot = snapshots.find((snapshot) => snapshot.id === id);
  if (!snapshot) {
    return c.text("Snapshot not found");
  }
  return c.json({ ...snapshot, wallets: await getSnapshot(snapshot.id) });
});

app.get("/wallet/:address", async (c) => {
  const addressOrDomain = c.req.param("address");

  if (!addressOrDomain) {
    return c.text("Address not found");
  }
  const connection = getConnection(c);
  const address = await getWalletAddress(connection, addressOrDomain);

  if (!address) {
    c.status(400);
    return c.json({ error: "Invalid address" });
  }

  try {
    const result = await getSnapshotsForAddress(address);

    return c.json(result);
  } catch (error) {
    c.status(400);
    console.error(error);
    return c.json({ error: `Error fetching wallet` });
  }
});
export default app;

function isValidAddress(address: string) {
  try {
    new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
}