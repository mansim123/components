'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export default function TermsCheckbox({
  withSubtext = true,
  withBoxBorder = false,
  disabled = false,
}: {
  withSubtext?: boolean
  withBoxBorder?: boolean
  disabled?: boolean
}) {
  return (
    <div
      className={cn(
        'flex items-start space-x-2 p-4',
        withBoxBorder && 'border rounded-md'
      )}
    >
      <Checkbox id="terms" disabled={disabled} />
      <div className="grid gap-1 leading-snug">
        <Label
          htmlFor="terms"
          className={cn(
            'text-sm font-medium',
            disabled && 'text-muted-foreground'
          )}
        >
          Accept terms and conditions
        </Label>
        {withSubtext && (
          <p className="text-xs text-muted-foreground">
            By clicking this checkbox, you agree to the{' '}
            <a href="#" className="underline">
              terms and conditions
            </a>
            .
          </p>
        )}
      </div>
    </div>
  )
}
