import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_API_URL as string,
  process.env.NEXT_PUBLIC_API_KEY as string
);
