export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      nodes: {
        Row: {
          id: string
          name: string
          status: string
          region: string
          ip_address: string
          node_type: string
          cost: number
          staked_amount: number
          rewards_amount: number
          uptime: number
          created_at: string
          updated_at: string
          owner_id: string
        }
        Insert: {
          id?: string
          name: string
          status: string
          region: string
          ip_address: string
          node_type: string
          cost: number
          staked_amount: number
          rewards_amount: number
          uptime: number
          created_at?: string
          updated_at?: string
          owner_id: string
        }
        Update: {
          id?: string
          name?: string
          status?: string
          region?: string
          ip_address?: string
          node_type?: string
          cost?: number
          staked_amount?: number
          rewards_amount?: number
          uptime?: number
          created_at?: string
          updated_at?: string
          owner_id?: string
        }
      }
      users: {
        Row: {
          id: string
          wallet_address: string
          created_at: string
          last_connected_at: string
          subscription_level: 'basic' | 'premium' | 'enterprise'
        }
        Insert: {
          id?: string
          wallet_address: string
          created_at?: string
          last_connected_at?: string
          subscription_level?: 'basic' | 'premium' | 'enterprise'
        }
        Update: {
          id?: string
          wallet_address?: string
          created_at?: string
          last_connected_at?: string
          subscription_level?: 'basic' | 'premium' | 'enterprise'
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      subscription_level: 'basic' | 'premium' | 'enterprise'
    }
  }
}