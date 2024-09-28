import React, { useEffect, useRef, useState } from 'react'
import { projectData } from './ProjectsData.js'
import '../css/projectList.css'

function ProjectsList() {
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

    const scrollToImage = (direction) => {
        if (direction === 'prev') {
          setCurrentIndex(curr => {
            const isFirstSlide = currentIndex === 0;
            return isFirstSlide ? 0 : curr - 1;
          })
        } else {
          const isLastSlide = currentIndex === projectData.length - 1;
          if (!isLastSlide) {
            setCurrentIndex(curr => curr + 1);
          }
        }
      }
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      }

  return (
    <div className='projects'>
        <h3 class="hobbies__title">Projects</h3>

    
    <div className='main-container'>
        <div className='slider-container'>
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
            <div className='container-images'>
                <ul ref={listRef}>
                    {
                        projectData.map((item)=> {
                            return <li key={item.id}>
                                <img src={item.imgUrl} width={600} height={380}/>
                            </li>
                        })
                    }

                </ul>
            </div>
            <div className="dots-container">
          {
            projectData.map((_, idx) => (
              <div key={idx}
                className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}>
                &#9865;
              </div>))
          }
        </div>
        </div>
      
    </div>
    </div>
  )
}

export default ProjectsList
