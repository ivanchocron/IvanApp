import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zrcwdaagurjfuzkwyvyx.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpyY3dkYWFndXJqZnV6a3d5dnl4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMwODI3NzMsImV4cCI6MjA4ODY1ODc3M30.uu1SegZ5P0eiUARYm0vWVvc1WZ9j_rMmvmhpAEfZ3VA";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
