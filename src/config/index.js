//local env file

import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });

export default {
  next_public_api_key_gpt: process.env.NEXT_PUBLIC_API_KEY_GPT,
};
