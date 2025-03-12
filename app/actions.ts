'use server'

import { supabase } from '@/lib/supabase'
import { cookies } from 'next/headers'

// Rate limiting window in hours
const RATE_LIMIT_WINDOW = 24
// Maximum attempts per window
const MAX_ATTEMPTS = 3

export async function joinWaitlist(email: string) {
  try {
    const cookieStore = cookies()
    const attemptsCookie = cookieStore.get('waitlist_attempts')
    const attempts = attemptsCookie ? JSON.parse(attemptsCookie.value) : []

    // Clean up old attempts (older than RATE_LIMIT_WINDOW hours)
    const now = Date.now()
    const validAttempts = attempts.filter((timestamp: number) => {
      const hoursDiff = (now - timestamp) / (1000 * 60 * 60)
      return hoursDiff < RATE_LIMIT_WINDOW
    })

    // Check rate limit
    if (validAttempts.length >= MAX_ATTEMPTS) {
      return {
        success: false,
        error: `Too many attempts. Please try again after ${RATE_LIMIT_WINDOW} hours.`
      }
    }

    // Check for existing email
    const { data: existingEmail } = await supabase
      .from('waitlist')
      .select('email, created_at')
      .eq('email', email)
      .single()

    if (existingEmail) {
      const createdAt = new Date(existingEmail.created_at)
      const formattedDate = createdAt.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      
      return { 
        success: false, 
        error: `This email is already on our waitlist! You joined on ${formattedDate}.` 
      }
    }

    // Add new email to waitlist
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      throw error
    }

    // Update attempts cookie
    validAttempts.push(now)
    cookieStore.set('waitlist_attempts', JSON.stringify(validAttempts), {
      maxAge: RATE_LIMIT_WINDOW * 60 * 60, // Convert hours to seconds
      path: '/',
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true
    })

    console.log('Successfully added to waitlist:', data)
    return { 
      success: true,
      message: 'Successfully joined the waitlist! We\'ll notify you when PeakFit AI launches.'
    }
  } catch (error) {
    console.error('Detailed error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to join waitlist. Please try again.' 
    }
  }
} 