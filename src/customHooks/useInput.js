import { useEffect, useState } from "react"

const useValidation = (value, validations) => {
   const [isEmpty, setIsEmpty] = useState(true)
   const [textError, setTextError] = useState('')
   const [isEmail, setIsEmail] = useState(true)
   const [isPhone, setIsPhone] = useState(true)
   const [isValid, setIsValid] = useState(true)

   useEffect(() => {
      for(let validation in validations){
         switch(validation){
            case 'isEmpty':
               value ? setIsEmpty(false) : setIsEmpty(true)
               value ? setTextError('') : setTextError('Input is empty')
               break;
            case 'isEmail':
               const re = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
               re.test(String(value).toLocaleLowerCase()) ? setIsEmail(false) : setIsEmail(true)
               break;
            case 'isPhone':
               const ph = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
               ph.test(String(value)) ? setIsPhone(false) : setIsPhone(true)
               break;
            default:
               break;
         }
      }
   }, [value])


  useEffect(() => {
   if(isEmail || isEmpty || isPhone){
      setIsValid(false)
   } else {
      setIsValid(true)
   }

  }, [isEmail, isEmpty, isPhone])

   return {
      isEmpty,
      textError,
      isEmail,
      isPhone,
      isValid
   }
}

export const useInput = (initialValue, validations) => {
   const [value, setValue] = useState('')
   const [isDirty, setIsDirty] = useState(false)
   const valid = useValidation(value, validations)

   const onChange = (e) => {
      setValue(e.target.value)
   }

   const onBlur = (e) => {
      setIsDirty(true)
   }

   return {
      value,
      isDirty,
      onChange,
      onBlur,
      ...valid
   }
}