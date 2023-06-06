import clsx from 'clsx'
import { useId, useState } from 'react'

const formClasses =
  `block w-full appearance-none rounded-md border border-gray-200 
  bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 
  disabled:bg-slate-200
  focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm`

function Label({ id, children }) {
  return (
    <label
      htmlFor={id}
      className="mb-3 block text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  )
}
function LabelDesc({ children }) {
  return (
    <p className="text-sm font-medium text-gray-700">
      {children}
    </p>
  )
}

export function TextField({
  id,
  label,
  type = 'text',
  className = '',
  ...props
}) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label} {props.required ? <span className='text-red-500'>(required)</span> : ""}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  )
}

export function SelectField({ id, label, className = '', ...props }) {
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select id={id} {...props} className={clsx(formClasses, 'pr-8')} />
    </div>
  )
}

export function RadioSelect({ id, label,labelDesc, legendLabel, array, defaultChecked, className = '', ...props }) {
  const [checked,setChecked] = useState(defaultChecked);
  function updateCheckedState(checkedID) {
    setChecked(checkedID)
  }
  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      {labelDesc && <LabelDesc>{labelDesc}</LabelDesc>}
      <fieldset className="mt-4">
        <legend className="sr-only">{legendLabel}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {array.map((item) => (
            <div key={item.id} className="flex items-center">
              <input
                id={item.id}
                name={props.name}
                type="radio"
                defaultChecked={item.id == defaultChecked}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
                onChange={props.onChange}
              />
              <label htmlFor={item.id} className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                {item.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
