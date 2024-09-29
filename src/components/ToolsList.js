import React, { useRef } from 'react'
import '../css/tools.css'
import { ToolsImages } from './ToolsImages.js';

function ToolsList() {
    const listRef = useRef();
  return (
    <section class="tools" id="tools">
    <h3 class="tools_title">Tools</h3>
   
        <div class="tools__line">
            <div  class="tools__box1" ref={listRef}>
                {ToolsImages.map((item)=> {
                return <ul class="tools__box"> <li class="tools__img"key={item.id}>
                    <img src={item.imgUrl} alt="" width={40} height={40}/>
                {item.name}</li> </ul>
            })       
        }
        </div>
    </div>
</section>
  )
}

export default ToolsList
