import {
  faBuilding,
  faCalendarAlt,
  faEnvelope,
  faHome,
  faIdCard,
  faInfoCircle,
  faMapMarkerAlt,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FormDataType } from '../../../../../types/KYCType'

import Input from '@ui/user/atoms/Input'
import { useState } from 'react'

const PersonalDetailsModel = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [formData, setFormData] = useState<FormDataType>({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    occupation: '',
    income: '',
    idType: 'aadhaar',
    idNumber: '',
    panNumber: '',
  })

  const handleInputChange = <K extends keyof FormDataType>(field: K, value: FormDataType[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div>
      {currentStep === 0 && (
        <div className='space-y-8'>
          <div className='text-center'>
            <div className='w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto mb-4'>
              <FontAwesomeIcon icon={faUser} className='text-indigo-600' size='2x' />
            </div>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Personal Information</h2>
            <p className='text-gray-600'>Tell us about yourself to get started</p>
          </div>

          {/* Basic Details */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center'>
                <FontAwesomeIcon icon={faUser} className='text-indigo-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Basic Details</h3>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <Input
                  type='text'
                  label={'Full Name'}
                  icon={faUser}
                  required={true}
                  placeholder='Enter your Full Name'
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  name='Full Name'
                  error=''
                />
              </div>

              <div>
                <Input
                  type='date'
                  label={'Date of Birth'}
                  icon={faCalendarAlt}
                  required={true}
                  value={formData.dob}
                  onChange={(e) => handleInputChange('dob', e.target.value)}
                  name='dob'
                  error=''
                />
              </div>

              <div>
                <Input
                  type='text'
                  label={'Email Address'}
                  icon={faEnvelope}
                  required={true}
                  placeholder='Enter your email'
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  name='Full Name'
                  error=''
                />
              </div>

              <div>
                <Input
                  type='tel'
                  label={'Phone Number'}
                  icon={faPhone}
                  required={true}
                  placeholder='Enter your Full Name'
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  name='Phone'
                  error=''
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center'>
                <FontAwesomeIcon icon={faHome} className='text-purple-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Address Information</h3>
            </div>

            <div className='space-y-6'>
              <div>
                <label className='flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3'>
                  <FontAwesomeIcon icon={faMapMarkerAlt} className='text-gray-500' />
                  Complete Address
                  <span className='text-red-500'>*</span>
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder='House/Flat No, Street, Landmark'
                  className='w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none'
                  rows={3}
                />
              </div>

              <div className='grid md:grid-cols-3 gap-6'>
                <div>
                  <Input
                    type='text'
                    label={'Enter your city'}
                    // icon={faUser}
                    required={true}
                    placeholder='City'
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    name='City'
                    error=''
                  />
                </div>

                <div>
                  <Input
                    type='text'
                    label={'State'}
                    icon={faUser}
                    required={true}
                    placeholder='State'
                    value={formData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                    name='State'
                    error=''
                  />
                </div>

                <div>
                  <Input
                    type='text'
                    label={'PinCode'}
                    icon={faUser}
                    required={true}
                    placeholder='PinCode'
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                    name='PinCode'
                    error=''
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Financial Information */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center'>
                <FontAwesomeIcon icon={faBuilding} className='text-emerald-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Financial Information</h3>
            </div>

            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  Occupation
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  value={formData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                  className='w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200'
                >
                  <option value=''>Select occupation</option>
                  <option value='salaried'>Salaried Employee</option>
                  <option value='business'>Business Owner</option>
                  <option value='professional'>Professional</option>
                  <option value='student'>Student</option>
                  <option value='retired'>Retired</option>
                  <option value='other'>Other</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  Annual Income
                  <span className='text-red-500'>*</span>
                </label>
                <select
                  value={formData.income}
                  onChange={(e) => handleInputChange('income', e.target.value)}
                  className='w-full p-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200'
                >
                  <option value=''>Select income range</option>
                  <option value='0-2.5'>₹0 - ₹2.5 Lakhs</option>
                  <option value='2.5-5'>₹2.5 - ₹5 Lakhs</option>
                  <option value='5-10'>₹5 - ₹10 Lakhs</option>
                  <option value='10-20'>₹10 - ₹20 Lakhs</option>
                  <option value='20+'>₹20 Lakhs+</option>
                </select>
              </div>
            </div>
          </div>

          {/* Identity Details */}
          <div className='bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-xl'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center'>
                <FontAwesomeIcon icon={faIdCard} className='text-orange-600' />
              </div>
              <h3 className='text-xl font-bold text-gray-800'>Identity Details</h3>
            </div>

            <div className='space-y-6'>
              <div>
                <label className='text-sm font-semibold text-gray-700 mb-3 block'>
                  ID Type <span className='text-red-500'>*</span>
                </label>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  {[
                    { value: 'aadhaar', label: 'Aadhaar Card', emoji: '🪪' },
                    { value: 'passport', label: 'Passport', emoji: '🛂' },
                    { value: 'driving', label: 'Driving License', emoji: '🚗' },
                    { value: 'voter', label: 'Voter ID', emoji: '🗳️' },
                  ].map((id) => (
                    <button
                      key={id.value}
                      type='button'
                      onClick={() => handleInputChange('idType', id.value as FormDataType['idType'])}
                      className={`p-4 rounded-2xl border-2 transition-all duration-300 ${
                        formData.idType === id.value
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-lg'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <div className='text-3xl mb-2'>{id.emoji}</div>
                      <p className='text-sm font-medium'>{id.label}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <Input
                    type='text'
                    label={'Id Number'}
                    icon={faUser}
                    required={true}
                    placeholder='Enter your Id Number'
                    value={formData.idNumber}
                    onChange={(e) => handleInputChange('idNumber', e.target.value)}
                    name='Id Number'
                    error=''
                  />
                </div>

                <div>
                  <Input
                    type='text'
                    label={'Pan NUmber'}
                    icon={faUser}
                    required={true}
                    placeholder='Enter your Pan Number'
                    value={formData.panNumber}
                    onChange={(e) => handleInputChange('panNumber', e.target.value)}
                    name='Pan Number'
                    error=''
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info Box */}
          <div className='bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200'>
            <div className='flex items-start gap-4'>
              <FontAwesomeIcon icon={faInfoCircle} className='text-blue-600 flex-shrink-0' size='lg' />
              <div>
                <h4 className='font-semibold text-blue-800 mb-1'>Why do we need this?</h4>
                <p className='text-blue-700 text-sm'>
                  This information is required by regulatory authorities (RBI) for KYC compliance. Your data is
                  encrypted and stored securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PersonalDetailsModel
