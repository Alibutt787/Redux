import React from 'react';
import {useDispatch} from 'react-redux';

export function Button(){
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch({type:'inc'})}>INCREMENT</button>
            <button onClick={()=>dispatch({type:'dec'})}>DECREMENT</button>
        </div>
    )

}
