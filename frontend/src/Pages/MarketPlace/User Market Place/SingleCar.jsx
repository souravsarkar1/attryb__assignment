import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { marketplaceGetCar } from '../../../Redux/DelarReducer/action';
import { useParams } from 'react-router-dom';

const SingleCar = () => {
    const dispatch = useDispatch();
    const [flag, setFlag] = useState(true);
    let data = useSelector(state => state.dealerReducer.detealsData);
    const { id } = useParams();
    useEffect(() => {
        setTimeout(() => {
            setFlag(false)
        }, 2000);
    }, [])
    useEffect(() => {
        dispatch(marketplaceGetCar(id));
    }, [dispatch, id]);

    data = data[0];
    if (flag) {
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h1>Car Details</h1>
            {data && (
                <div>
                    <p>Car ID: {data.carID}</p>
                    <p>Major Scratches: {data.majorScratches}</p>
                    <p>Number of Accidents Reported: {data.numberofAccidentsReported}</p>
                    <p>Number of Previous Buyers: {data.numberofPreviousBuyers}</p>
                    <p>Original Paint: {data.originalPaint ? "Yes" : "No"}</p>
                    <p>Registration Place: {data.registrationPlace}</p>
                    <p>Total Kms: {data.totalKms}</p>
                </div>
            )}
        </div>
    );
};

export default SingleCar;
