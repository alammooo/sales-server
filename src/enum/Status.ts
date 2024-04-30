export const STATUS = ['CONFIRMED', 'REJECTED', 'PENDING'] as const

export type Status = typeof STATUS[number]