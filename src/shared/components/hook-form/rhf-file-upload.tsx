'use client'

import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useDropzone } from 'react-dropzone'
import { useCallback } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../ui/button'
import useFilePreview from '@/shared/hooks/use-file-preview'
import FilePreviewDialog from '../file-preview-dialog'
import { useBoolean } from '@/shared/hooks/helpers'

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
  const { file, setFile, filePreviewUrl } = useFilePreview()
  const previewDialogController = useBoolean()

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

  // return a function to avoid complex typing headaches
  const createImageOnClickHandler = useCallback(() => {
    if (file) {
      return previewDialogController.onTrue
    }

    return getRootProps().onClick
  }, [file, getRootProps, previewDialogController.onTrue])

  return (
    <div>
      {label && (
        <label className='mb-4 block text-xl text-primary font-bold'>
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

        <div className='relative flex h-[200px] sm:h-[100px] w-full sm:w-[100px] flex-shrink-0 cursor-pointer items-center justify-center'>
          <Image
            src={filePreviewUrl}
            // loader={() => filePreviewUrl}
            alt='upload'
            fill
            className='object-cover'
            onClick={createImageOnClickHandler()}
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
            <span className='text-primary font-medium'>JPG, PNG หรือ PDF</span>{' '}
            โดยขนาดของไฟล์ต้อง{' '}
            <span className='text-primary font-medium'>ไม่เกิน 10MB</span>
          </p>
          <p className='text-primary font-medium'>สามารถลากไฟล์วางได้!</p>
        </div>

        {isLoading ? (
          //   <LoadingSpinner className='text-purple-300' />
          <p>loading...</p>
        ) : (
          <Button
            className='z-10 whitespace-nowrap'
            type='button'
            onClick={getRootProps().onClick}
          >
            เลือกไฟล์
          </Button>
        )}
      </div>

      {errors[name] && (
        <p className='mt-4 text-red-600'>* {errors[name]?.message as string}</p>
      )}

      {file && (
        <FilePreviewDialog
          file={file}
          filePreviewUrl={filePreviewUrl}
          controller={previewDialogController}
          onChangeFile={getRootProps().onClick}
        />
      )}

      {/* {error && <p className='mt-1 text-error-300'>{error}</p>} */}
    </div>
  )
}

export default RHFFileUpload
