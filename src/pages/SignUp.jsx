import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
      <img src="/hero.png" alt="Hero" className=' max-w-[780px] h-[1043px]'/>
      <div className='flex flex-col p-4 items-center'>
        {/* Buttons waala div */}
        <div className='flex flex-row justify-between mt-[60px] w-[234px]'>
            
            <div className= 'text-base leading-5 pb-3 border-b-[5px] border-[#A95454]'>Join PANDA</div>
            <div className='text-base leading-5 pb-3'>Sign In </div>
        </div>
        {/* Middle div */}
         <div className='flex flex-col items-center w-[463px] h-[492px] pt-[40px] border border-[#E0E0E0] mt-[42px] rounded-t-[250px]'>
             <div className='text-center mt-[111px] ml-[26px] mr-[29px] w-[408px] h-[115px]'>
                 <h1 className='text-[32px] font-medium'>
                 Create your free account
                 </h1>
                 <h3 className='text-[25px] font-medium'>Takes less than <span className='text-[#A95454]'>5 minutes...</span></h3>
             </div>
             <div className='flex flex-col w-[310px]'>
               <div className='border-b pb-2 border-[#E0E0E0]'>
                <p className='text-[15px] text-[#E0B51D]'>klincik7@gmail.com</p>
               </div>
                   <p className='text-[13px] leading-[18.2px] text-[#ACB5BD]'>This email address already exists. <span className='underline'>Sign in</span></p>

                   <div className='flex flex-col '>
                      <div className='flex justify-between pb-1 border-b border-[#E0E0E0]'>
                          <p className='text-[15px]'>******************</p>
                          <p className='underline text-base leading-6'>Show</p>
                      </div>
                      <div className='flex justify-between pb-1 border-b border-[#E0E0E0]'>
                          <p className='text-[15px]'>******************</p>
                          <p className='underline text-base leading-6'>Show</p>
                      </div>
                   </div>
               
             </div>
         </div>
         {/* Join Panda div */}
         <div className='flex flex-col'>
             
         </div>
      </div>
    </div>
  )
}

export default SignUp