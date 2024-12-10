import { ZodTypeAny, z } from 'zod'

type InputType = 'INPUT' | 'TEXTAREA' | 'FILE' | 'CHOICE' | 'CHECKBOX'

// config
const allowedFileTypes = [
  'image/jpeg',
  'image/png',
  'image/jpg',
  'application/pdf',
]

// 1024 (KB), 1024 * 1024 (MB)
const maxSizeOfImage = 10 * 1024 * 1024

// Define the schema based on the AnswerType
export const zodInputValidation: Record<InputType, ZodTypeAny> = {
  // Validate a single choice as a string (must be "0", "1", "2", or "3")
  CHOICE: z.string().min(1, 'กรุณาเลือกคำตอบเพียง 1 คำตอบ'),

  // Validate array of strings for CHECKBOX, each string must represent a number between 0 and 3
  CHECKBOX: z.array(z.string()).nonempty('กรุณาเลือกคำตอบอย่างน้อย 1 คำตอบ'),

  INPUT: z
    .string()
    .min(1, 'กรุณากรอกข้อมูล')
    .max(100, 'กรุณากรอกข้อมูลไม่เกิน 100 ตัวอักษร'), // Validation for TEXT type

  TEXTAREA: z
    .string()
    .min(1, 'กรุณากรอกข้อมูล')
    .max(500, 'กรุณากรอกข้อมูลไม่เกิน 500 ตัวอักษร'), // Validation for LONG_TEXT type

  // Translate message to english
  FILE: z
    .array(z.instanceof(File)) // Validation for FILE type
    .min(1, 'กรุณาเลือกไฟล์') // Error for when no file is selected
    .refine(
      (files) => files.every((file) => allowedFileTypes.includes(file.type)),
      {
        message:
          'กรุณาเลือกไฟล์ที่มีนามสกุลที่ถูกต้อง (jpg, jpeg, png หรือ pdf)', // Error for invalid file types
      }
    )
    .refine((files) => files.every((file) => file.size <= maxSizeOfImage), {
      message: 'กรุณาเลือกไฟล์ที่ขนาดไม่เกิน 10MB', // Error for files larger than 10MB
    }),
}
