import { useState } from "react";

const MyComponent= () =>{
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  
  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])
    return (
  
      <div>
      <h1>Zombie Fighters</h1>
      <li>
        <h4>Money:100</h4>
        <h4>Team strenght:0</h4>
        <h4>Team Agility:0</h4>
        <h4>Team</h4>
        <p>Pick some team members</p>
      </li>
      <div class= "card-container">{zombieFighters.map((fighter,index) => 
      (<div key={index}>
        {/* using map to convert to a jsx element */}
        
        <img src={`${fighter.img}`}/>
        <h5>{`${fighter.name}`}</h5>
        <h5>{`price: ${fighter.price}`}</h5>
        <h5>{`strenght: ${fighter.strenght}`}</h5>
        <h5>{`agility: ${fighter.agility}`}</h5>
        <button onClick={() => handleAddFighter(fighter)}>Add</button>
      </div>))}
      </div>
      
      </div>
    );
  }
export default MyComponent