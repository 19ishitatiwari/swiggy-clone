import { IMG_URL } from '../utils/constants';

const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <>
            <div data-testid="resCard" className='m-4 p-4 w-[250px] h-[550px] bg-amber-100 cursor-pointer shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105'>
                <img className='res-logo rounded-md'
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
                    alt='Restaurant Logo'
                />
                <h2 className='font-bold py-4 text-lg'>{name}</h2>
                <div className='res-details text-md mt-auto'>
                    <p>Cuisine: {cuisines.join(", ")}</p>
                    <p>⭐ {avgRating}</p>
                    <p>⏱ {deliveryTime} mins</p>
                    <p>💰 {costForTwo}</p>
                </div>
            </div>
        </>
    )
}

export const PopularRestaurantCard = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className='absolute p-2 m-2 bg-black text-white rounded-lg z-1'>Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;