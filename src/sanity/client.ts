import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "3e4pis41",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: import.meta.env.VITE_SANITY_TOKEN,
});