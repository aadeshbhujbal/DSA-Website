import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import * as React from "react"

import Button from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { cn } from "@/lib/utils"

import countriesData from "./countries.json"

interface Country {
  phone_code: string
  flag: string
}

interface ComboboxProps {
  countriesData: Country[]
}

const MobileNumberCombo: React.FC = () => {
  return (
    <div className="max-w-20">
      <ComboboxDemo countriesData={countriesData} />
    </div>
  )
}

export default MobileNumberCombo

export const ComboboxDemo: React.FC<ComboboxProps> = ({ countriesData }) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? countriesData.find((country) => country.phone_code === value)?.flag : "Select country..."}
          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." className="h-9" />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup>
            {countriesData.map((country) => (
              <CommandItem
                key={country.phone_code}
                value={country.phone_code}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                {country.flag} {country.phone_code}
                <CheckIcon
                  className={cn("ml-auto h-4 w-4", value === country.phone_code ? "opacity-100" : "opacity-0")}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
