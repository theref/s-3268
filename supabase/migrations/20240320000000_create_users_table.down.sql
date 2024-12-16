-- Drop indices first
DROP INDEX IF EXISTS users_wallet_address_idx;

-- Remove policies
DROP POLICY IF EXISTS "Allow public insert" ON public.users;
DROP POLICY IF EXISTS "Users can view own data" ON public.users;
DROP POLICY IF EXISTS "Users can update own data" ON public.users;

-- Drop the users table
DROP TABLE IF EXISTS public.users;

-- Remove the UUID extension if no other tables are using it
-- Note: Be careful with this in production as other tables might need it
-- DROP EXTENSION IF EXISTS "uuid-ossp";