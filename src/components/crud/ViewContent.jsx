import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'


export const ViewContent = () => {
    const [data, setData] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        fetch("http://localhost:3004/travel/"+id)
        .then((res) => res.json())
        .then((json) => setData(json))
    }, [])

  return (
    <div className='flex justify-center items-center relative'>
      <Link to={'/tour'} className='absolute top-0 left-16 text-2xl '>👈</Link>
        <div className="w-[80vw] h-screen flex flex-col  items-center gap-2">
            <img src={data.img} alt="#" className="mb-5 rounded-xl h-80 w-[60vw]" />
            <h1 className="font-semibold text-5xl">{data.name}</h1>
            <p>{data.desc}</p>
            <h3 className='font-semibold'>${data.price}/Person</h3>         
            <Link to={'/tour'} className="w-28 h-8 bg-slate-800 text-slate-200 rounded-md mt-8 pt-1">Order</Link>
          </div>
    </div>
  )
}
