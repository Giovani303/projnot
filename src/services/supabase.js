import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = 'https://jehfjttomsgbwwkyugth.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplaGZqdHRvbXNnYnd3a3l1Z3RoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ3ODQxMjYsImV4cCI6MjExMDM2MDEyNn0.3dsdLOyqkgoZkqDFRBYkaf7_K-46DWmoFdIgyPDE01o';

export const supabase = createClient(supabaseUrl, supabaseKey);
