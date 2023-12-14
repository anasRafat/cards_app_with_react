import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCard } from '../store/actions/card-actions';


const Update = () => {
    const [title, setTitle] = useState('');
    const [dic, setDic] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let {id}= useParams();

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCard({
            id:id,
            title: title,
            details: dic,
            img: file,
            
        }));
        
        navigate("/");
    }

    return (
        <form className='py-5' onSubmit={formSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="discreption" className="form-label">discreption</label>
                <input type="text" className="form-control" id="discreption" onChange={(e) => setDic(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="img" className="form-label">Image</label>
                <input type="file" className="file-input" id="img" onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Update card</button>
        </form>
    )
}

export default Update
