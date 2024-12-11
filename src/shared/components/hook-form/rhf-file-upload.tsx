'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import useFilePreview from './_hooks/use-file-preview'

type Variant = 'horizontal' | 'vertical'

type Props = {
  name: string
  label?: string
  variant?: Variant
  isLoading?: boolean
}

const RHFFileUpload = ({
  name,
  label,
  variant = 'horizontal',
  isLoading,
}: Props) => {
  const { setFile, filePreviewUrl } = useFilePreview()

  const {
    trigger,
    setValue,
    formState: { errors },
  } = useFormContext()

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0]

      setFile(newFile)
      setValue(name, acceptedFiles)
      trigger()
    },
    [name, setFile, setValue, trigger]
  )

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  })

  return (
    <div>
      {label && (
        <label className='mb-4 block text-xl text-pink-500 font-bold'>
          {label}
        </label>
      )}

      <div
        {...getRootProps()}
        onClick={() => {}}
        className={cn(
          'z-0 flex flex-col items-center justify-between gap-6 rounded-lg border-2 border-dashed border-pink-100 p-6 text-center sm:flex-row sm:text-start lg:gap-0',
          //   (errors[name] ?? error) && 'border-error-300',
          variant === 'vertical' && '!flex-col'
        )}
      >
        <input {...getInputProps()} />

        <div
          className='relative flex h-[100px] w-[100px] flex-shrink-0 cursor-pointer items-center justify-center'
          onClick={getRootProps().onClick}
        >
          <Image
            src={filePreviewUrl}
            // loader={() => filePreviewUrl}
            alt='upload'
            fill
            className='object-cover'
          />
        </div>

        <div
          className={cn(
            'flex flex-col px-4',
            variant === 'vertical' && 'my-4 items-center'
          )}
        >
          <p>
            อัพโหลดไฟล์ที่มีนามสกุล{' '}
            <span className='text-pink-500 font-medium'>JPG, PNG หรือ PDF</span>{' '}
            โดยขนาดของไฟล์ต้อง{' '}
            <span className='text-pink-500 font-medium'>ไม่เกิน 10MB</span>
          </p>
          <p className='text-pink-500 font-medium'>สามารถลากไฟล์วางได้</p>
        </div>

        {isLoading ? (
          //   <LoadingSpinner className='text-purple-300' />
          <p>loading...</p>
        ) : (
          <button
            className='z-10 bg-pink-200 rounded-xl font-medium p-3 text-background hover:bg-pink-500 hover:text-white whitespace-nowrap'
            type='button'
            onClick={getRootProps().onClick}
          >
            เลือกไฟล์
          </button>
        )}
      </div>

      {errors[name] && (
        <p className='mt-4 text-red-600'>* {errors[name]?.message as string}</p>
      )}

      {/* {error && <p className='mt-1 text-error-300'>{error}</p>} */}
    </div>
  )
}

export default RHFFileUpload
