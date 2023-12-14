import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCard } from "../store/actions/card-actions";


const Card = (props) => {
    const dispatch = useDispatch();
    const data=props.data ;

    return (
        <div className="card">
            <div className="d-flex justify-content-end">
                <button className="btn btn-danger position-absolute" onClick={() => dispatch(deleteCard(data.id))}>delete</button>
            </div>
            {/* <img src={data.img} className="card-img-top img" alt="..." ></img> */}
            
            <img src={data.img} className="img" alt={data.title}></img>

            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.details}</p>
            </div>
            <Link className="btn btn-primary text-light" to={`/update/${data.id}`}>
                Update
            </Link>
            </div>
    );
};

export default Card;
