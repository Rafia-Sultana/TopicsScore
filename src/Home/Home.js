/* eslint-disable no-undef */

//
import React, { useState, useRef ,useEffect} from 'react';
import SingleData from '../SingleData/SingleData'


const Home = () => {
    const [data,setData]=useState([])
    const inputRef = useRef(null);
    // const [score,setScore]=useState(0)
    let url ='http://localhost:3000';
    // useEffect(()=>{
    //    try{
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(data=>setData(data))
    //  }
    //    catch (error) {
    //     console.error(error);
    //   }
    // },[])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            data.sort((a, b) => b.score - a.score);
            setData(data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchData();
      }, [data]);
      
  
    const handleClick =()=>{
        console.log('submit');
      
        fetch(url,{
            method:'POST',
            body:JSON.stringify({
                title:inputRef.current.value,
                score:0
                
            }),
            headers:{
                'Content-type':"application/json"
            }
        })
    
    }

    return (
        <div>
          
    <div className="flex justify-end m-5">
    <input
     className='border-solid border-2 border-indigo-600'
        ref={inputRef}
        type="title"
        id="message"
        name="message"
      />
<button className='bg-indigo-700 title-white'
onClick={() => handleClick()}
>Add Topic</button> </div>  



<section>
{
  data.length>0 && data.map(singleData => 
  (<>
        <SingleData 
        singleData={singleData}
        setData={setData}
        data={data}
        />
  </>)
  )
}
</section>   
</div>
    );
};

export default Home;