import { IMG_URL } from '../utils/constants';

const RestaurantCard = ({resData}) => {
    const { name, cuisines, avgRating, deliveryTime, costForTwo, cloudinaryImageId } = resData?.data;
    return (
        <>
            {/* <div className='res-card'>
                <img className='res-logo'
                    src='https://ooni.com/cdn/shop/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg'
                    alt='Restaurant Logo'
                />
                <h2>La Pino'z</h2>
                <div className='res-details'>
                    <p>Cuisine Type: Italian</p>
                    <p>Rating: 4.5 ⭐</p>
                    <p>Delivery Time: 30 mins</p>
                    <p>Cost for Two: Rs. 500</p>
                </div>
            </div> */}
            <div className='res-card'>
                <img className='res-logo'
                    src={IMG_URL}
                    alt='Restaurant Logo'
                />
                <h2>{name}</h2>
                <div className='res-details'>
                    <p>Cuisine Type: {cuisines.join(", ")}</p>
                    <p>Rating: {avgRating} ⭐</p>
                    <p>Delivery Time: {deliveryTime} mins</p>
                    <p>Cost for Two: ₹{costForTwo/100}</p>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;