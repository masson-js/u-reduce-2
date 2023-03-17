
import React from 'react'
import  Header  from "../Components/Header"
import sources from "../data/souces"


function Sources() {
  return (
    <>
    < Header />
    {sources.map((source) => (
      <div className='container sourcecontainer' key={source.id}>
        <div className='sourcelist'>
          <ul className="list">
            <li><a href={source.link}>{`#${source.id}`} {source.title}</a></li>
          </ul>
        </div>
      </div>
        ))}
    </>
  )
}

export default Sources