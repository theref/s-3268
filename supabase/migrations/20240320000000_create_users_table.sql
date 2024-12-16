-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create users table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wallet_address TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  last_connected_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  CONSTRAINT wallet_address_length CHECK (char_length(wallet_address) > 0)
);

-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public insert" ON public.users
  FOR INSERT TO anon
  WITH CHECK (true);

CREATE POLICY "Users can view own data" ON public.users
  FOR SELECT TO anon
  USING (true);

CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE TO anon
  USING (true)
  WITH CHECK (true);

-- Indices
CREATE INDEX IF NOT EXISTS users_wallet_address_idx ON public.users (wallet_address);