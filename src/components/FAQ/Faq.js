import React from 'react'

export const Faq = () => {
  return (
    <div className='w-screen h-[100vh] flex justify-center items-center '>
        <div className='bg-slate-800 w-3/4 h-full grid text-slate-200 p-10 gap-6 rounded-md mb-10'>
            <h1 className='text-3xl font-bold'>FAQ</h1>
            <button className='bg-slate-200 text-slate-800 text-start px-10 py-2 rounded-md relative'><span className=' right-3 top-1 text-xl font-extrabold absolute'>+</span>Anda tanya saya jawab, ada pertanyaan ?</button>
            <button className='bg-slate-200 text-slate-800 text-start px-10 py-2 rounded-md relative'><span className=' right-3 top-1 text-xl font-extrabold absolute'>+</span>Anda tanya saya jawab, ada pertanyaan ?</button>
            <button className='bg-slate-200 text-slate-800 text-start px-10 py-2 rounded-md relative'><span className=' right-3 top-1 text-xl font-extrabold absolute'>+</span>Anda tanya saya jawab, ada pertanyaan ?</button>
            <button className='bg-slate-200 text-slate-800 text-start px-10 py-2 rounded-md relative'><span className=' right-3 top-1 text-xl font-extrabold absolute'>+</span>Anda tanya saya jawab, ada pertanyaan ?</button>
            <textarea name="faq" placeholder='Message...' className='w-full h-36 rounded-md'></textarea>
            <button className='w-32 rounded-md text-slate-800 font-semibold bg-slate-200 place-self-center p-2 '>Send</button>
        </div>
    </div>
  )
}
