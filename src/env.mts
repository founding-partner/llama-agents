import { z } from "zod";

const envSchema = z.object({
  DB_URI: z.string().regex(new RegExp("mysql://.*")),
});

const DB_URI = `${process.env.DB_URI}`

export default envSchema.parse(DB_URI);
