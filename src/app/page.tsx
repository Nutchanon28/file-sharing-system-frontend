'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { fileSharingFormSchema } from './modules/file-sharing/_constants/file-sharing.constant'
import RHFFileUpload from '@/shared/components/hook-form/rhf-file-upload'

export default function Home() {
  type FileSharingFormValues = z.infer<typeof fileSharingFormSchema>

  const methods = useForm<FileSharingFormValues>({
    resolver: zodResolver(fileSharingFormSchema),
    mode: 'onChange',
  })
  const {
    handleSubmit,
    // formState: { errors },
  } = methods

  const onSubmit = (data: FileSharingFormValues) => {
    console.log('data = ', JSON.stringify(data))
  }

  return (
    <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <FormProvider {...methods}>
          <form
            className='flex w-full animate-fade flex-col gap-6 px-4 pt-6 md:px-8'
            onSubmit={handleSubmit(onSubmit)}
          >
            <RHFFileUpload name='sharedFile' label='ไฟล์ที่ต้องการแชร์' />

            <button className='bg-blue-200 rounded-md p-4 mt-4'>submit</button>
          </form>
        </FormProvider>
      </main>
    </div>
  )
}
