import React from 'react';
import { Link } from 'react-router-dom';
import useStore from './zustand';


const Card = ({ c }) => {
    const { data, setData } = useStore();
    const datadetails = () => {
        setData(c);
    }

    return (
        <div className="card mb-4 border border-2" style={{ padding: '10px' }} >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={c?.img} style={{ width: '15rem', height: '15rem', objectFit: 'cover' }} className="img-fluid  object-cover  m-3" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title text-primary">{c?.title_name}</h3>
                        <p >
                            {
                                (c?.Description.length > 100 && c?.Description.slice(0, 100))
                            }
                            ...</p>

                        <p>Rating :<span className='text-primary'>{c?.rating.number} </span> <span className='text-success'>{c?.rating.badge}</span>
                            <p>Published Date: {c?.published_date}</p>
                        </p>
                        <Link to="/coursesdetail" onClick={datadetails} class="btn btn-primary">See More Details</Link>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;