// library supabase
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vrlxabrmfypgradfiond.supabase.co'; // ganti
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZybHhhYnJtZnlwZ3JhZGZpb25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0NDkwMDUsImV4cCI6MjA2MzAyNTAwNX0.yPbnUofqz4YHmI7KR81vSQza-_r6Re5CzeF3qROV1co'; // ganti

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
