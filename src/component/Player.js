import React, { useEffect, useState } from 'react';
import './player.css'

const Player = ({player,count}) => {
   const {titlePhoto,handle,rating,rank,maxRating,contribution, firstName, lastName}= player;
   const [ratingChange, setRatingChange] = useState();
   const [contests, setContests] = useState();
        
    
    return (
        <ol className=' wrapper m-2 uppercase bg-base-200 p-2'>
           
            <li><div className="flex justify-between"> 
            <span className='w-3/6 flex items-center'>{count}. <img className='w-8 m-1 rounded-full' src={titlePhoto} alt="" />  
            
            <div className="dropdown">
  <label onClick={()=>{
    fetch(`https://codeforces.com/api/user.rating?handle=${handle}`)
    .then(res=>res.json())
    .then(data=> {
        setRatingChange((data.result[data.result.length-1].newRating)-(data.result[data.result.length-1].oldRating))
        setContests(data.result.length)
    } )


  }} tabIndex={0} className="">{handle}</label>
  <div tabIndex={0} className="dropdown-content card card-compact w-64 p-2 shadow bg-blue-100 text-primary-content">
    <div className="card-body">
      <h3 className="card-title"> {!firstName?  handle: firstName+' '+lastName } </h3>
      <div className="flex flex-col">
      <p className='capitalize'>Rating Change:{ratingChange}</p>
      <p className='capitalize'>Rank: {rank}</p>
      <p className='capitalize'>Contests: {contests} </p>
      <p className='capitalize'>Contribution:{contribution}</p>
      </div>
    </div>
  </div>
</div>
            
            </span>
            <span></span>
             
             <span className='w-auto flex flex-col-reverse md:flex-row md:items-center '>
                    <span className='w-auto  lowercase text-sm  md:text-right font-thin'>max: {maxRating}</span>
                    <span className='text-right text-lg lowercase md:pl-2'>
                     {rating} 
                    </span>
                
                
                </span>
             </div></li>
            </ol>
    
    );
};

export default Player;

            // <div className="rounded-l-lg bg-neutral mb-2 rounded w-full flex justify-between ">
            //     <img className='rounded-l-lg w-12' src={titlePhoto} alt="" />
            //     <p className='text-lg text-white p-2  '> {player.handle} </p>
            //     <p className='text-lg text-white p-2'>{player.rating}</p>

           
            // </div>