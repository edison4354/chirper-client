import React from 'react';

function App() {
  return (
    <div className="flex flex-col">
        <div className="flex justify-center items-center h-max flex-col-reverse lg:flex-row">
            <div className="flex justify-center items-center bg-cover lg:h-screen w-screen bg-hero-pattern lg:w-11/20">
                <svg className="fill-white max-h-96" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
            </div>
            <div className="flex justify-center items-start bg-black min-h-max lg:h-screen w-screen p-4 2xl:items-center lg:w-9/20 lg:justify-start lg:min-w-608">
                <div className="p-5 text-white">
                    <div className='pb-3'>
                        <svg className="fill-white h-12" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </div>
                    <div className='my-12 max-w-lg lg:max-w-none'>
                        <p className='text-7xl font-extrabold'>Happening now</p>
                    </div>
                    <div className='mt-12 mb-8'>
                        <p className='text-4xl font-extrabold'>Join Twitter today.</p>
                    </div>
                    <div className='flex flex-col items-start'>
                        <button className='bg-white text-black rounded-full w-72 py-2 my-2 font-bold'>Sign up with Google</button>
                        <button className='bg-white text-black rounded-full w-72 py-2 my-2 font-bold'>Sign up with Apple</button>
                        <p className='text-slate-500'>------------------ or ------------------</p>
                        <button className='bg-sky-500 text-white rounded-full w-72 py-2 my-2 font-bold'>Create Account</button>         
                    </div>
                    <p className='text-xxs w-72'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                    <div className='mt-14'>
                        <p className='text-lg font-extrabold'>Already have an account?</p>
                    </div>
                    <button className='outline outline-slate-600 outline-1 text-sky-500 rounded-full w-72 py-2 my-1 font-bold'>Sign in</button>    
                </div>
            </div>
        </div>
        <div className="bg-black h-20">
        </div>
    </div>
  );
}

export default App;
