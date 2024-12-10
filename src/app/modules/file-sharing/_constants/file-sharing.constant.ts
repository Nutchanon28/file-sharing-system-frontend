import { zodInputValidation } from '@/shared/components/validation'
import { z } from 'zod'

export const fileSharingFormSchema = z.object({
  sharedFile: zodInputValidation.FILE,
})
