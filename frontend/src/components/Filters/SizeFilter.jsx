import { useCallback, useState } from 'react'

const SizeFilter = ({ sizes, hidleTitle }) => {
  const [appliedSizes, setAppliedSizes] = useState([])
  
  const onClickDiv = useCallback((item)=>{
    if(appliedSizes.indexOf(item) > -1){
      setAppliedSizes(appliedSizes?.filter(color => color !== item))
    }
    else{
      setAppliedSizes([...appliedSizes,item])
    }
  }, [appliedSizes, setAppliedSizes])

  return (
    <div className={`flex flex-col ${hidleTitle?'':'mb-4'}`}>
          {!hidleTitle && <p className='text-[16px] text-black mt-4 mb-2'>Sizes</p>}
          <div className='flex flex-wrap px-2'>
            {sizes?.map(item=> {
              return (
                <div className='flex flex-col mr-2'>
                  <div 
                    className='w-[50px] border text-center mb-4 rounded-lg mr-4 cursor-pointer
                   hover:scale-110 bg-white border-gray-300 text-gray-500 transition' 
                    onClick={()=>onClickDiv(item)} 
                    style={appliedSizes.includes(item) ? {background: 'black', color: 'white'} : {}}
                  >
                    {item}    
                  </div>
                </div>
              )
            })}
          </div>
        </div>
  )
}

export default SizeFilter