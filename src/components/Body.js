import { useState } from 'react';
import {resData} from '../utils/mockData';
import RestaurantCard from './RestaurantCard';
const Body = () => {

const [Restaurant,setRestaurant] = useState(resData.slice(3));
const handleClick=()=>{
  const filteredData =Restaurant.filter((res)=>{
        return res?.card?.card?.info.avgRating>4;
    })
    // console.log(filteredData);
    setRestaurant(filteredData);
}
  return (
    <div className="body">
      <button className="search" onClick={handleClick}>Top Rated Restaurants</button>
      <div className="res-container">
        {Restaurant.slice(3).map((restaurant) => (
          <RestaurantCard
            key={restaurant.card?.card?.info.id}
            resData={restaurant}
          />
          // Remember to add a unique 'key' prop when rendering lists in React
        ))}
      </div>
    </div>
  );
};

export default Body;