export const myStore = (reducer) => {
    let state ;
    let listeners = [];
    let abc;
    const store = {
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state,action);
            listeners.map((listener) => {
                listener();
                // console.log(1)
            })
            // if(abc){
            //     abc()
            // console.log(1)
            // }
        },
        subscribe(listner){
            //abc = listner;
            listeners.push(listner)
            console.log(listeners)
            return  () => {
                listeners =  listeners.filter((listn)=> (listn!==listner))
            }
        }
    }
    store.dispatch({type:'@@INIT'})
    return store;
}