import React from 'react';
import Highlight from 'react-highlight';

import examples from '../data/data';



import  Header  from "../Components/Header"


function Examples() {


  return (
    <>
      < Header />
        {examples.map((example) => (
      <div className='container examplecontainer' key={example.key}>
        <div className='examplpresentation'>
          <section className='exampleheader'>
            <p>{example.title}</p>
          </section>
            <section className='mainb'>
              <Highlight className="language-javascript">{example.code}</Highlight>
            </section>
            <section className="exampletext">
              <p>Explanation:</p>
              <p className="explanation">{example.expo}</p>
              <p className="mainexpo">{example.mainexpo}</p>
            </section>
            <hr/>
        </div>
      </div>
        ))}
    </>
  )
}

export default Examples