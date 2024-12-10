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
        <label className='mb-4 block text-xl font-bold text-white'>
          {label}
        </label>
      )}

      <div
        {...getRootProps()}
        onClick={() => {}}
        className={cn(
          'z-0 flex flex-col items-center justify-between gap-6 rounded-lg border-2 border-dashed border-gray p-6 text-center sm:flex-row sm:text-start lg:gap-0',
          //   (errors[name] ?? error) && 'border-error-300',
          variant === 'vertical' && '!flex-col'
        )}
      >
        <input {...getInputProps()} />

        <div
          className='relative flex cursor-pointer items-center justify-center text-white'
          onClick={getRootProps().onClick}
        >
          <Image
            src={filePreviewUrl}
            // loader={() => filePreviewUrl}
            alt='upload'
            width={48}
            height={48}
            className='object-contain'
          />
        </div>

        <div
          className={cn(
            'flex flex-col gap-4',
            variant === 'vertical' && 'my-4 items-center'
          )}
        >
          <p className='text-white'>
            JPG, PNG or PDF, file size no more than 10MB
          </p>
        </div>

        {isLoading ? (
          //   <LoadingSpinner className='text-purple-300' />
          <p>loading...</p>
        ) : (
          <button
            className='z-10 bg-white px-5 py-5 font-bold text-background hover:bg-white/90'
            type='button'
            onClick={getRootProps().onClick}
          >
            Select File
          </button>
        )}
      </div>

      {errors[name] && (
        <p className='mt-1 text-error-300'>{errors[name]?.message as string}</p>
      )}

      {/* {error && <p className='mt-1 text-error-300'>{error}</p>} */}
    </div>
  )
}

export default RHFFileUpload
