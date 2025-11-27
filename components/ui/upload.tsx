import * as React from "react"
import { Button } from "./button"
import { cn } from "@/lib/utils"

export interface UploadProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onChange?: (files: FileList | null) => void
  children?: React.ReactNode
}

const Upload = React.forwardRef<HTMLInputElement, UploadProps>(
  ({ className, onChange, children, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleClick = () => {
      inputRef.current?.click()
    }

    return (
      <>
        <Button
          type="button"
          variant="outline"
          onClick={handleClick}
          className={cn("cursor-pointer", className)}
        >
          {children || "Upload Files"}
        </Button>
        <input
          type="file"
          ref={inputRef}
          onChange={(e) => onChange?.(e.target.files)}
          className="hidden"
          {...props}
        />
      </>
    )
  }
)
Upload.displayName = "Upload"

export { Upload }