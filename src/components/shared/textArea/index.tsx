/* eslint-disable quotes */
import { useState } from 'react'
interface Iprops {
  label?: string
  value?: string
  placeholder?: string
  name?: string
}
export const InputArea = ({ label, value = '', placeholder, name }: Iprops) => {
  const [valueInputArea, setvalueInputArea] = useState(value)
  return (
    <div className="w-full h-[168px] relative">
      <textarea
        name={name || 'defautlNameTextArea'}
        className="textarea bg-transparent border border-[#999187] w-full h-full peer px-5 py-5"
        placeholder={placeholder || ''}
        value={valueInputArea}
        id={name || 'defautlNameTextArea'}
        onChange={({ target }) => setvalueInputArea(target.value)}
      />
      <label
        className={`absolute  ${
          valueInputArea.length ? 'top-[20px] text-white' : 'top-[30px]'
        } left-[15px] peer-focus:top-[20px]  duration-300 transition-all -translate-y-4 peer-focus:-translate-y-4`}
        htmlFor={name || 'defautlNameTextArea'}
      >
        Your Message
      </label>
    </div>
  )
}
