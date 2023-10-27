import React from 'react'

export default function ErrorBox({ msg }) {
  return (
    <div className="bg-red-600 w-full text-center text-white-color py-3 rounded-xl mt-12">
       <h1>{msg}</h1>
    </div>
  )
}
