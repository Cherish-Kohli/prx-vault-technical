import { describe, it, expect } from '@jest/globals'
import { passwordResetSchema, calculatePasswordStrength } from '../lib/validations'

describe('Password Reset Validation', () => {
  it('should validate a strong password', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'StrongPass123!',
      confirmPassword: 'StrongPass123!',
    })
    expect(result.success).toBe(true)
  })

  it('should reject passwords shorter than 8 characters', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'Short1!',
      confirmPassword: 'Short1!',
    })
    expect(result.success).toBe(false)
  })

  it('should reject passwords without uppercase', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'lowercase123!',
      confirmPassword: 'lowercase123!',
    })
    expect(result.success).toBe(false)
  })

  it('should reject passwords without numbers', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'NoNumbers!',
      confirmPassword: 'NoNumbers!',
    })
    expect(result.success).toBe(false)
  })

  it('should reject passwords without special characters', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'NoSpecial123',
      confirmPassword: 'NoSpecial123',
    })
    expect(result.success).toBe(false)
  })

  it('should reject mismatched passwords', async () => {
    const result = passwordResetSchema.safeParse({
      password: 'Password123!',
      confirmPassword: 'Different123!',
    })
    expect(result.success).toBe(false)
  })
})

describe('Password Strength Calculator', () => {
  it('should return weak for simple passwords', () => {
    expect(calculatePasswordStrength('short')).toBe('weak')
    expect(calculatePasswordStrength('12345678')).toBe('weak')
  })

  it('should return medium for moderate passwords', () => {
    expect(calculatePasswordStrength('Password1')).toBe('medium')
  })

  it('should return strong for complex passwords', () => {
    expect(calculatePasswordStrength('StrongPass123!')).toBe('strong')
    expect(calculatePasswordStrength('VeryLongPassword123!@#')).toBe('strong')
  })
})

