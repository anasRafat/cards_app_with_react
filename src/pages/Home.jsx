import React from "react";
import "./pages.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "../components/Card";
import { Link } from "react-router-dom";


function Home() {
    const state = useSelector(state => state);
    return (
        <>


            <div className="row justify-content-around py-5">
                {state.map((card)=>{
                    return(
                    <div key={card.id} className="p-2 col" >
                    <Card data={card}></Card>
                </div>
                    )

                })}
                
                <div className="card p-2 col-2 ">
                    <div className="card-body d-flex justify-content-center align-items-center ">
                        <Link className="btn btn-lg btn-primary" to="/add">Add</Link>
                    </div>
                </div>

            </div>


        </>);
}

export default Home;