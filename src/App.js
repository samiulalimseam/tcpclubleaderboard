import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Player from './component/Player';

function App() {
  const [data,setData] = useState([]);
  let count = 0

  const players = [
    'siyam-ali',
    'itstanmaykumar',
    'mizanur222r',
    'shakhawat2277',
    'thesanchitadevi',
    'shariarsfahim',
    'shahrina_sabrin',
    'AbdurRahimBadsha',
    'aanafiu2020',
    'hhnihad',
    'Sobhan_Mridha',
    'EusoufCSE12',
    'SamuraiZeee',
    'blueboss',
    'ahmed_srabon',
    'mahim.error',
    'xadu',
    'Muzibur_Alve'
    
      ]
      let playerNames='';
players.map(player=>{
    playerNames = playerNames+player+';';
  })
 

 useEffect(()=>{
  fetch(`https://codeforces.com/api/user.info?handles=${playerNames}`)
  .then(res=>res.json())
  .then(datas=>{
    let list = datas.result
    let finalList = list.filter((rating)=> rating.rating>100)

    setData(finalList.sort((a,b)=> (a?.rating < b?.rating) ? 1 : -1))
  })
  .catch(err=>console.error(err))
 },[])



 
 
  return (
    <div>
      <h2 className="text-2xl w-3/4 m-auto text-center mt-5">Codeforces Leader Board - Programming Club</h2>
      <div className='leaderboard w-96 md:w-3/4 m-auto  p-5 mt-5 shadow-lg   '>
        
        <div className='m-2 uppercase bg-base-200 p-2 flex  '>
          <h3 className='w-4/6  text-left'>Handle</h3> 
          
           <h3 className='w-2/6 text-right'>Rating</h3>
        </div>
        {
          data.map(player=>{ count = count +1
            return <Player key={player.handle} count={count} player={player}></Player>
          })
        }
    </div>
    </div>
);
};

export default App;