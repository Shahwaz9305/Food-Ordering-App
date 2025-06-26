import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
//   {
//     console.log(props?.resData?.card?.card?.info);
//   }
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    areaName,
  } = props?.resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="card-image"
      />
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}*</p>
      <p>{avgRating}*</p>
      <p>{deliveryTime} minutes</p>
      <p>{areaName}</p>
    </div>
  );
};

export default RestaurantCard;