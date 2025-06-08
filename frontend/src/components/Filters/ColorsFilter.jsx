import { useCallback, useState } from 'react'

export const colorSelector = {
  "Black":"#252525",
  "Purple":"#8434E1",
  "Gray": "#808080",
  "White":"#FFFFFF",
  "Red": "#FF0000",
  "Blue": "#0000FF",
  "Navy": "#000080",
  "Orange": "#FFA500",
  "Yellow": "#FFFF00",
  "Grey": "#808080",
  "Green": "#008000",
  "Pink": "#FFC0CB",
}

const ColorsFilter = ({ colors }) => {
  const [appliedColors, setAppliedColors] = useState([])

  const onClickDiv = useCallback((item)=>{
    if(appliedColors.indexOf(item) > -1){
      setAppliedColors(appliedColors?.filter(color => color !== item))
    }
    else{
      setAppliedColors([...appliedColors,item])
    }
  }, [appliedColors, setAppliedColors])

  return (
    <div>
      <p className='text-[16px] text-black mt-4 mb-2'>Colors</p>
      <div className='flex flex-wrap px-2'>
        {colors?.map(item=> {
          return (
            <div className='flex flex-col mr-2'>
              <div className='w-8 h-8 border border-gray-300 rounded-xl mr-4 cursor-pointer hover:scale-110 transition' onClick={()=>onClickDiv(item)} style={{background:`${colorSelector[item]}`}}></div>
              <p className='text-sm text-gray-400 mb-2' style={{color:`${appliedColors?.includes(item) ? 'black':''}`}}>{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorsFilter