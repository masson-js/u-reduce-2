
import React from 'react'
import  Header  from "../Components/Header"


function Home() {
  return (
    <>
    < Header/>
    <div className="container homecontainer">
      <div className="welcome">
        <h1>
          WELCOME TO U-REDUCE
        </h1>
        <p>
          This page is created to help you explore and understand the <span className="reduce-method">reduce</span> method.
        </p>
        <p>
          Reduce is high powerful and importaint method for 
          work with Arrays.
        </p>
        <p>
          The <span className="reduce-method">reduce</span> method has two arguments: 
        </p>
        <p>
          <span className="reduce-callback">Function</span> and <span className="reduce-start-value">initial value</span>
        </p>
        <p className="reduce-high-letters"> 
          <span className="reduce-array ">array</span><span className="reduce-dot">.</span>
          <span className="reduce-method">reduce</span>(<span className="reduce-callback">() =&gt; &#123; &#125;</span>, 
          <span className="reduce-start-value">initial value</span>)
        </p>
        <section className="reduce-arguments">
          <p><span className="reduce-callback">Function</span> has the next arguments:</p>
          <p><span className="reduce-callback-values" style={{ fontWeight: 'bold' }}>- Accumulator</span>, result of previous call of Function, 
          on the first call contains the parameters of <span className="reduce-start">start value;</span></p>
          <p><span className="reduce-callback-values" style={{ fontWeight: 'bold' }}>- Receiver</span>, the value of the first call an <span className="reduce-array">array</span>;</p>
          <p><span className="reduce-callback-values" style={{ fontWeight: 'bold' }}>- Index</span>, the index position of reciver in an <span className="reduce-array">array</span></p>
          <p><span className="reduce-callback-values" style={{ fontWeight: 'bold' }}>- Array</span>, the array being traversed</p>
        <p><span className="reduce-start-value">Initial value</span> can be the next types:</p>
        <p><span className="reduce-start"><span style={{ fontWeight: 'bold' }}>&#123;&#125;,&#91;&#93;, null, number, boolean</span></span>.</p>
        <div className="recomendation">
        <p>
          strongly recommend always specify an <span className="reduce-start-value">initial value</span>, because if no initial value is provided and the array is empty, a TypeError will be thrown. This is because in such a scenario, the reduce method will have no initial value to start the reduction process. By providing an initial value, you ensure that the reduce() method has a starting point and can proceed with the reduction process even if the array is empty. Additionally, specifying an initial value can ensure that the output of the reduce method is of the desired type.
        </p>
        </div>
        </section>
      </div>
        <p className='author'>Created by Wlod Simon</p>
    </div>
    </>
  )
}

export default Home