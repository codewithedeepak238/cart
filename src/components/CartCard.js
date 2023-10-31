import img1 from '../assets/images/img1.jpg'
export const CartCard = () => {
  return (
    <div className='flex p-2 border border-gray-200 rounded-lg shadow max-w-full mt-4'>
        <div className='w-48'>
            <img src={img1} alt="headphone"/>
        </div>
        <div className='flex items-center justify-around w-full'>
            <p>Sony Wh-50hw</p>
            <p>$149</p>
            <button className='bg-red-800 p-2 rounded-lg text-white'>Remove</button>
        </div>
    </div>
  )
}
