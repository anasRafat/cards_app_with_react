import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { add } from '../store/actions/card-actions';


const Add = () => {
    const [title, setTitle] = useState('');
    const [dic, setDic] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    const state = useSelector(state => state);
    const nextId = ()=> {
        const lastElement = state[state.length - 1];
        let id = 0;
        id=(parseInt(lastElement?.id)+ 1 ) || 1;
        return id;
    }

    const formSubmit = (e) => {
        e.preventDefault();
        dispatch(add({
            title: title,
            details: dic,
            img: file,
            id:nextId(),
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

            <button type="submit" className="btn btn-primary">Add card</button>
        </form>
    )
}

export default Add
