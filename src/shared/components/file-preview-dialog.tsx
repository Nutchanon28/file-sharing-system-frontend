'use client'

import Image from 'next/image'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/shared/components/ui/dialog'
import { UseBooleanReturn } from '../hooks/helpers'
import { Button } from './ui/button'
import { MouseEventHandler } from 'react'

type Props = {
  file: File
  filePreviewUrl: string
  controller: UseBooleanReturn
  onChangeFile?: MouseEventHandler<HTMLElement>
}

const FilePreviewDialog = ({
  file,
  filePreviewUrl,
  controller,
  onChangeFile,
}: Props) => {
  //   const [fileText, setFileText] = useState<string | null>(null)
  //   const isLoading = useBoolean(true) // Loading state

  //   useEffect(() => {
  //     const loadFileText = async () => {
  //       try {
  //         const text = await file.text()
  //         setFileText(text)
  //       } catch (error) {
  //         console.error('Error loading file:', error)
  //       } finally {
  //         isLoading.onFalse()
  //       }
  //     }

  //     loadFileText()
  //   }, [file, isLoading])

  return (
    <Dialog open={controller.value} onOpenChange={controller.setValue}>
      <DialogContent className='h-full max-w-[80vw] md:w-[60vw] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle>{file.name}</DialogTitle>

          <DialogDescription>
            {Object.entries(MOCK_METADATA).map(([key, value]) => (
              <span key={key} className='block'>
                <span className='font-bold'>{key}:</span> {value}
              </span>
            ))}
          </DialogDescription>

          <div className='relative max-h-[600px] h-full w-full flex-shrink-0'>
            <Image
              src={filePreviewUrl}
              alt='upload'
              fill
              className='object-cover'
            />
          </div>

          {/* this probably shouldn't be primary? */}
          <Button onClick={onChangeFile}>เปลี่ยนไฟล์</Button>
        </DialogHeader>

        {/* TODO: the footer doesn't show up so I put it in header for now */}
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              เปลี่ยนไฟล์
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default FilePreviewDialog

// --------------------------------------------------

const MOCK_METADATA = {
  'File Name': 'mystery_photo.jpg',
  'File Size': '5.2MB',
  'File Type': 'JPEG (Because why not?)',
  'Image Width': 1920,
  'Image Height': 1080,
  'Camera Model': 'Canon Magic Machine 5000',
  Lens: 'UltraMegaZoom 2000x (For when you need to see through walls)',
  'Exposure Time': '1/1000 second (Speed of light, pretty much)',
  'F-Stop': 'f/0.001 (Because why would you want depth of field?)',
  ISO: 5000,
  'Date Taken': '2024:12:11 08:30:00 (because time is a social construct)',
  Location: 'Somewhere in the middle of nowhere, but also everywhere.',
  'GPS Coordinates':
    '13.729566051297489, 100.77584530340052 (Also known as the place where I accidentally parked)',
  Software: 'Photoshop (But we’ll never tell you what was actually edited)',
  'Exposure Bias': 'No bias, just capturing the truth of the universe',
  'White Balance': 'Correct. Except when it’s not.',
  'Focus Mode': 'Autofocus. For when I’m too lazy to do it manually.',
  Flash: 'Off (But not because I wanted it off)',
  Saturation: 'High. Because more color is always better, right?',
  Sharpness: 'Set to maximum, because who needs softness?',
  Orientation: 'Upside down (Why? Because art)',
  Comment:
    'This was the last picture taken before the battery died. The legend says it’s still waiting for its next shot.',
  Tags: [
    'Adventure',
    'Too much caffeine',
    'Unsolicited selfies',
    'Totally candid',
  ],
  'File Created': '2024-12-11 08:15:00',
  'File Modified':
    '2024-12-11 08:29:59 (When I finally figured out how to open the file)',
  'Color Profile': 'Caffeinated CMYK',
  Author: 'The person who accidentally tripped and hit the shutter button',
}
