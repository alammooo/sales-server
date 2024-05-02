export const ROLE = ['MASTER', 'ADMIN', 'SALES'] as const

export type Role = typeof ROLE[number]