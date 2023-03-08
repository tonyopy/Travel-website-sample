import React from 'react'



const Home = () => {
  return (
    <div className='flex flex-col md:flex-row items-center h-screen '>
        <div className='w-full hidden md:w-1/2 xl:w-2/3 h-screen lg:block'>
            <img src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100" 
            className='w-full h-full object-cover '
            alt="" />
        </div>
     
        <div className='w-full px-5 md:max-w-md md:w-1/2 md:mx-auto items-center justify-center lg:ml-10 mt-10'>
            <h1 className='text-xl font-bold'>Abstract UI</h1>

            <h1 className='text-2xl font-bold mt-3 py-5' >Log in to your account</h1>
            <form action="">
                <p className='py-4'>Email Address</p>
                <input 
                className='bg-gray-200 border-gray-200 py-4 rounded-lg w-full mx-auto '
                type="text" placeholder='Enter Email Address'/>
                <p className='py-4'>Password</p>
                <input 
                className='bg-gray-200 border-gray-200 py-4 rounded-lg w-full mx-auto'
                type="text" placeholder='Enter Password' />
                <p className='py-4 text-right'>Forgot Password?</p>
                <button className='bg-blue-500 text-lg font-bold text-white w-full rounded-lg py-3 hover:bg-blue-400 cursor-pointer'>Log in</button>

            </form>
      
        <hr className='my-6 border-gray-400 w-full' />
      
            <button id="google"
            className='border-solid border-2 border-gray-400 rounded-lg w-full py-3 text-lg font-medium hover:bg-gray-200'>
                Log in with Google
            </button>
            <p className='py-4 text-lg'>Need an account? <span className='text-blue-500 hover:text-blue-600 cursor-pointer font-semibold'>Create an account</span></p>
    
        <footer className='mt-11'>
            <p className='text-gray-400'>&copy; 2020 Abstract UI - All Rights Reserved.</p>
        </footer>
            

        </div>
   
            

      
        
       
    </div>
  )
}

export default Home