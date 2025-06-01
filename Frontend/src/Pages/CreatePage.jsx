import React from 'react'

const CreatePage = () => {
  return (
    <div className='flex flex-col justify-center '>

      <div className=' flex flex-col bg-indigo-200  h-8/12 rounded-4xl shadow-lg  w-full lg:w-200 px-5 py-5 items-center'> 
          <h1 className='mt-5 mb-5 pt-sans-bold text-2xl text-indigo-900 text-center'>Add to inventory</h1> 

          
             <input type="text" name="Product name" placeholder='Product Name' id="" className=' bg-white w-100 mx-5 h-10 rounded-xl my-3 lg:w-160   p-5' />
             <input type="text" name="Product name" placeholder='Price' id="" className=' bg-white w-100 mx-5 h-10 rounded-xl my-3 lg:w-160  p-5' />
             <input type="text" name="Product name" placeholder='Catagory' id="" className=' bg-white w-100 mx-5 h-10 rounded-xl my-3 lg:w-160  p-5' />    
             <input type="text" name="Product name" placeholder='Quantity' id="" className=' bg-white w-100 mx-5 h-10 rounded-xl my-3 lg:w-160  p-5' />
             <input type="text" name="Product name" placeholder='Brand' id="" className=' bg-white w-100 mx-5 h-10 rounded-xl my-3 lg:w-160  p-5' />
              <input type="text" name="Product name" placeholder='Description' id="" className=' bg-white w-100 mx-5 h-25 rounded-xl my-3 lg:w-160 p-5' />
          
          
      </div>

      <div  className='flex  justify-center lg:justify-start mt-5 '>
        <button type="button" className=' bg-indigo-400 hover:bg-indigo-500 rounded-full w-50 text-xl h-15  p-4 m-4 botom-5 cursor-pointer shadow-xl'>Create</button>
        <button type="button" className=' bg-indigo-400 hover:bg-indigo-500 rounded-full w-50 text-xl h-15  p-4 m-4 cursor-pointer shadow-xl'>Refresh</button>
      </div>

      
    </div>

    
    
  )
}

export default CreatePage
