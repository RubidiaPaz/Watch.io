import { Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import validation from '../validation/validate'

const FieldInput = ({ 
    value,
    onChangeText,
    type,
    hint,
    validateType,
    secureTextEntry,
}) => {

    const [leave, setLeave] = useState(false)
  return (
    <>
       <TextInput
            placeholderTextColor={"#fff"}
            className="border border-[#082EB4] rounded-2xl w-11/12 h-12 text-white mx-auto pl-5 mt-2 "
            placeholder={hint}
            keyboardType={type}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            onBlur={()=>setLeave(true)}
          />
       
        {
            (leave)
            ? validation(value,validateType)
            : null
        }
    </>
  )
}

export default FieldInput