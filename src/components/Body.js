import RestaurantCard, {PopularRestaurantCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [data, setData] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    const { loggedInUser, setUserName } = useContext(UserContext);

    const PopularCard = PopularRestaurantCard(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8504593&lng=75.76277019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) {
        return <h1>🔴 You are offline! Please check your internet connection.</h1>
    }

    return (
        <div className='body'>
            <div className='filter flex'>
                <div className='search-container m-2 p-4'>
                    <input 
                        data-testid="search-input"
                        type='text' 
                        className='border border-solid border-black' 
                        placeholder='Search for ...'
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button 
                        className='ml-4 px-3 py-1 bg-orange-100 cursor-pointer rounded-sm'
                        onClick={() => {
                            const filteredList = allRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setData(filteredList);
                        }}
                    >Search</button>
                </div>
                <div className="top-rated flex items-center">
                    <button 
                        className="px-3 py-1 bg-orange-100 cursor-pointer rounded-sm"
                        onClick={() => {
                            const filteredList = allRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setData(filteredList);
                        }}
                    >Top Rated</button>
                </div>
                 <div className="top-rated flex items-center">
                    <label className="m-1">User Name:</label>
                    <input className="border border-black p-1 m-1" value={loggedInUser} onChange={(e) => {setUserName(e.target.value)}} ></input>
                </div>
            </div>
            <div className='res-container flex flex-wrap'>
                {allRestaurants?.length === 0 ? <Shimmer /> : 
                    data.map((restaurant) => (
                        <Link to={'/restaurant/' + restaurant.info.id} key={restaurant.info.id}>
                            {restaurant.info.avgRating > 4.3 ? <PopularCard resData={restaurant} /> : <RestaurantCard resData={restaurant} /> }
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;