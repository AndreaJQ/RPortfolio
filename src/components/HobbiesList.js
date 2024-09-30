import React, { useEffect, useRef, useState } from 'react'
import { hobbiesData } from './HobbiesData';
import '../css/hobbies.css'

function HobbiesList() {
    const listRef = useRef();
    const [currentIndex, setCurrentIndex]=useState(0);


    useEffect( ()=> {
        const listNode= listRef.current;
        const imgNode= listNode.querySelectorAll("li>img")[currentIndex]

        if(imgNode){
            imgNode.scrollIntoView({
                behavior:"smooth"
            })
        }
    },[currentIndex]

    )


  return (
    <div>
        
      <div className='hobbies' id="hobbies">
      <h3 class="hobbies__title">Hobbies</h3>
        <div className='hobbies__box'>
            <div className='hobbies__img2'>
                <ul className='hobbies__img'ref={listRef}>
                    {
                        hobbiesData.map((item)=> {
                            return <li key={item.id}>
                                <img src={item.imgUrl} width={50} height={50}/>
                            {item.value}</li>
                        })
                    }

                </ul>
            </div>
            </div>
            </div>
    </div>
  )
}

export default HobbiesList
