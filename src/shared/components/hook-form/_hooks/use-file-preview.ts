import { useCallback, useEffect, useState } from 'react'

const useFilePreview = () => {
  const [file, setFile] = useState<File | null>(null)
  const [filePreviewUrl, setFilePreviewUrl] = useState<string>(
    '/assets/icons/upload-cloud.svg'
  )

  // File Preview
  // --------------------------------------------------
  const isValidPDF = useCallback(async (file: File): Promise<boolean> => {
    if (file.size < 5) return false
    const fileHeader = await file.slice(0, 5).arrayBuffer()
    const headerText = new TextDecoder().decode(fileHeader)
    return headerText === '%PDF-'
  }, [])

  const updateFilePreview = useCallback(async () => {
    if (!file) {
      setFilePreviewUrl('/assets/icons/upload-cloud.svg')
      return
    }

    if (await isValidPDF(file)) {
      setFilePreviewUrl('/assets/icons/application-form/pdf.svg')
    } else {
      setFilePreviewUrl(URL.createObjectURL(file))
    }
  }, [file, isValidPDF])

  // Update the file preview URL based on file type
  useEffect(() => {
    updateFilePreview()
  }, [file, updateFilePreview])

  return { setFile, filePreviewUrl }
}

export default useFilePreview
