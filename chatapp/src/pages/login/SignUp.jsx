import React from 'react'

const SignUp = () => {
  return (
    <>
    <div className='container m-auto mt-20 rounded-xl'>
        <h1 className="text-7xl text-center font-bold p-10 pb-8 text-white">Login</h1>
        <p className='text-gray-400 text-center text-xl'>Need an account? <a className='text-purple-500'>Create Account</a></p>
        <form className="flex flex-col items-center">
          <input
            className="m-5 w-2/3 rounded-md h-14 bg-gray-600 text-2xl pl-3 text-white focus:shadow-purple focus:outline-none"
            placeholder='Username'
          />
          <input
            className="m-5 w-2/3 rounded-md h-14 bg-gray-600 text-2xl pl-3 text-white focus:shadow-purple focus:outline-none"
            placeholder='Password'
          />
          <input
            className="m-5 w-2/3 rounded-md h-14 bg-gray-600 text-2xl pl-3 text-white focus:shadow-purple focus:outline-none"
            placeholder='Confirm Password'
          />
          <button type='submit' className="m-5 w-1/3 rounded-md h-14 bg-purple-600 text-2xl text-white hover:bg-purple-700">Log In</button>
        </form>
      </div>
    </>
  )
}

export default SignUp