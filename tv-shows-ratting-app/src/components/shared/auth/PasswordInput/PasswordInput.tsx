import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FormControl, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";


interface IPasswordInputProps {
   RegisterPart: any,
   isDisabled: boolean,
   testId: string;
   placeholder: string;
   icon: any;
}

export const PasswordInput = (props: IPasswordInputProps) => {

   const [isHidden, setHidden] = useState(true);

   return (
      <FormControl isRequired>
         <InputGroup size='md'>
            <InputLeftElement pointerEvents="none" >
            {props.icon}
            </InputLeftElement>
            <Input
               type={isHidden ? 'password' : 'text'}
               placeholder={props.placeholder}
               required
               borderRadius="20px"
               pl="10"
               color="white"
               _placeholder={{ color: 'white' }}
               {...props.RegisterPart}
               isDisabled={props.isDisabled}
               data-testId={props.testId}
            />
            <InputRightElement fontSize="md">
               <IconButton
               color="white"
               aria-label="toggle view"
               icon={isHidden ? <ViewIcon /> : <ViewOffIcon />}
               onClick={() => {
                  setHidden(!isHidden);
               }}
               backgroundColor="transparent"
               _hover={{ backgroundColor: 'transparent' }}
               />
            </InputRightElement>
         </InputGroup>
         
      </FormControl>
   );

}