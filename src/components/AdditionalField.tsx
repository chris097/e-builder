import React from 'react'
import Input from './input';
import { MdDelete } from 'react-icons/md';

type Props = {
    field?: any
    handleRemoveAdditionalLink?: any
    fieldLength?: any
    value?: any
    handleInput?: any
    handleSelect?: any
}

const AdditionalField:React.FC<Props> = (props) => {
  return (
    <div className='flex space-x-4 mt-4 items-center'>
        <div className='w-full'>
            <select onChange={props.handleSelect} className='border text-sm text-basegray w-full h-10 px-3 mt-1 focus:outline-none border-gray-300'>
                <option value="twitter">Twitter</option>
                <option value="linkedIn">LinkedIn</option>
                <option value="website">Website</option>
            </select>
        </div>
            <Input
                input={{
                  id: props.field,
                  type: 'text',
                  name: props.field,
                  value: props.value,
                  onChange: props.handleInput
                }}
            />
        {props.fieldLength > 0 && <button type='button'
            onClick={() => props.handleRemoveAdditionalLink(props.field)}
            className='text-basegray cursor-pointer'>
            <MdDelete size="20px" />
        </button>}
    </div>
  )
}

export default AdditionalField;