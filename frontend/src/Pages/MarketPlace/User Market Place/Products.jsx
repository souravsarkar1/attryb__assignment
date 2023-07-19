import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getcarDataForMarketPlace } from '../../../Redux/MarketPlace/action';
import "./Products.css"
import ProductsCard from '../../../Components/Hero Section/ProductsCard';

const Products = () => {
    const dispatch = useDispatch();
    const initialData = useSelector((state) => state.carDataForMarketPlaceReducer.data);
    const [data, setData] = useState([...initialData]);

    const [search, setSearch] = useState('');
    useEffect(() => {
        dispatch(getcarDataForMarketPlace());
    }, [dispatch]);

    const handleSearch = () => {
        // model_name
        let newData = initialData.filter((el) => el.model_name === search);
        setData([...newData]);
    };

    const handleReset = () => {
        setData([...initialData]);
        setSearch('');
    };

    const handleSort = (option) => {
        if (option === 'asc') {
            setData([...data.sort((a, b) => a.list_price - b.list_price)]);
        } else if (option === 'desc') {
            setData([...data.sort((a, b) => b.list_price - a.list_price)]);
        }
    };

    return (
        <div>
            <input
                type="search"
                name=""
                id=""
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleReset}>Reset!</button>
            <br />
            <h4>Filter Cars by Price</h4>
            <select onChange={(e) => handleSort(e.target.value)}>
                <option value="asc">Low To High</option>
                <option value="desc">High To Low</option>
            </select>
            <h1 className="products-title">Available Cars</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "30px"
            }}>

                {data?.map((car) => (
                    <ProductsCard key={car._id} {...car} />
                ))}
            </div>
        </div>
    );
};

export default Products;
