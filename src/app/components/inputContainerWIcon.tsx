import { SearchIcon } from './icons'
import { InputContainer } from './inputContainer'
import { PrimaryInput } from './primary-input'
import { HtmlHTMLAttributes } from 'react'

type InputContainerWIcon = HtmlHTMLAttributes<HTMLInputElement>

export function InputContainerWIcon(props: InputContainerWIcon) {
  return (
    <InputContainer>
      <PrimaryInput {...props} />
      <SearchIcon />
    </InputContainer>
  )
}
