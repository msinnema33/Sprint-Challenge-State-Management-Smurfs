import React, { useState } from 'react';
import { useForm  } from 'react-hook-form';
import { connect } from "react-redux";
import { postData } from "../actions";
import Axios from 'axios';

const AddSmurf = props => {
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 50,
        height: '',
        id: Date.now
      });

    const handleChange = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    };  
   const {register, handleSubmit} = useForm();
   
    const handlePostData = e => {
        Axios
        .post("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res);

        })
        .catch(err => {
            console.log('post error', err);
        })
      e.preventDefault();
      props.postData();
    };
    return (
      <div>
        {props.isPostingData ? (
          <div>we are adding Smurfs</div>
        ) : (
            <div className='add-smurf'>
                <form onSubmit={handleSubmit(handlePostData)}>
                    <h2>Add a Smurf</h2>
                    <input
                        type='text'
                        placeholder='Enter a name.... '
                        // value={newSmurf.name}
                        onChange={handleChange}
                        ref={register({ required: true, maxLength: 15})}
                    />
                    
                    <input
                        type='number'
                        placeholder='Enter age...'
                        // value={newSmurf.age}
                        onChange={handleChange}
                        ref={register({ required: true, maxLength: 3})}
                    />
                    
                    <input
                        type='text'
                        placeholder='Add height +cm'
                        // value={newSmurf.height}
                        onChange={handleChange}
                        ref={register({ required: true, maxLength: 10})}
                    />
                    

                    <br />

                    <button onClick={handlePostData}>Update my Smurfs!!</button>
                    {/* <input className='submit' type='submit' /> */}
                </form>
            </div>
        )}
      </div>
    );
  };
  const mapStateToProps = state => {
    return {
      isPostingData: state.isPostingData
    };
  };
  
  export default connect(
    mapStateToProps,
    { postData }
  )(AddSmurf);