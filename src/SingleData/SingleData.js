import React from 'react';

const SingleData = ({singleData,data,setData}) => {
    //deleting one
    const handleDelete = (singleData)=>{
    //    const newData = data.filter((d)=> d._id !== singleData._id);
       fetch(`http://localhost:3000/${singleData._id}`,{
            method:'DELETE',
            body:JSON.stringify({
             singleData
            }),
            headers:{
                'Content-type':"application/json"
            }
        })
        // .then(res=>res.json())
        // .then(result=>setData([...data]))
    //    setData(newData)
       
    }


    const handleVoteClick =(direction)=>{
        // const plus = singleData.score+1;
        // const minus = singleData.score-1;
        const updatedSingleData = direction ? 
        {...singleData,score : singleData.score+1}
         : 
         {...singleData,score : singleData.score-1} 
        console.log(updatedSingleData);
        //put req
        
            fetch(`http://localhost:3000/${updatedSingleData._id}`,{
            method:'PUT',
            body:JSON.stringify({
                score:updatedSingleData.score
                
            }),
            headers:{
                'Content-type':"application/json"
            }
        })
        .then(res=>res.json())
        .then(result=>setData([...data,result]))
        
        //setData

        
    }
    return (
        <div>
            <div className="border border-3 border-green-500 bg-green-100 m-5 p-5">
            <button className='mr-2' onClick={()=>handleVoteClick(true)}>up</button>
            <button onClick={()=>handleVoteClick(false)}>down</button>
         <h1>{singleData.title}</h1>
         <h1>{singleData.score}</h1>
         <h1>created on: {singleData.date}</h1>
         <button 
         onClick={()=>handleDelete(singleData)}
         className='bg-red-500 border border-2 rounded'
         >delete</button>
            </div>
        
        </div>
    );
};

export default SingleData;