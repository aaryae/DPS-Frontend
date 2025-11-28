import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export type InputProps = {
  label: string
  icon?: IconDefinition
  required?: boolean
  value: string
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: React.HTMLInputTypeAttribute
  disabled?: boolean
  name?: string
  error?: string
}

const Input = ({
  label,
  icon,
  required = false,
  value,
  placeholder,
  onChange,
  type = 'text',
  disabled = false,
  name,
  error,
}: InputProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={name} className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2'>
        {icon && <FontAwesomeIcon icon={icon} className='text-gray-500' />}
        {label}
        {required && <span className='text-red-500'>*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full p-4 border-2 rounded-2xl transition-all duration-200
          ${error ? 'border-red-400' : 'border-gray-200'}
          focus:ring-2 focus:ring-indigo-500 focus:border-transparent
          ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}
        `}
      />

      {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
    </div>
  )
}

export default Input
