import { useState } from 'react'
import {createStore} from 'redux'
import {myStore} from './MyRedux'

function ReducerBasics() {
    let initialState = {'age':0,'name':'john'}
const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const INCREASE_BY = 'incrementBy';
  const reducer = (state = initialState,action) => {
    switch(action.type){
      case INCREMENT:
        return {...state,'age': state.age+1}
       case DECREMENT:
        return {...state,'age': state.age-1}
       case INCREASE_BY:
        return {...state,'age': state.age+action.payload}

       default :
       return state; 
    }
  }
  const myRedStore = myStore(reducer)
  console.log(myRedStore)
  const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
  console.log(store)
  store.subscribe(()=>{
    console.log(store.getState());
  })

store.dispatch({'type':INCREMENT});
store.dispatch({'type':INCREMENT});
store.dispatch({'type':DECREMENT});
store.dispatch({'type':INCREASE_BY ,payload:20});

  

  return (
    <>
  
      <div className="card">
        <button onClick={()=>store.dispatch({'type':INCREMENT})}>count increment {initialState.age}</button>
        <p>
          name is {initialState.name}
        </p>
      </div>
    </>
  )
}

export default ReducerBasics
