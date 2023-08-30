import { Icon } from "./icon";
import { InputContainer } from "./inputContainer";
import { PrimaryInput } from "./primary-input";
import { HtmlHTMLAttributes } from "react";

interface InputContainerWIcon extends HtmlHTMLAttributes<HTMLInputElement>{}

export function InputContainerWIcon(props: InputContainerWIcon){
    return (
        <InputContainer>
            <PrimaryInput {...props}/>
            <Icon />
        </InputContainer>
    )
}