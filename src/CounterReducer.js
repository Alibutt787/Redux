const initial={
    counter:0
};
export function CounterReducer(state=initial,action){
   switch(action.type){
       case 'inc':
           return {
               ...state,
               counter: state.counter+1
           };
           case 'dec':
           return {
               ...state,
               counter: state.counter-1};
               default:
                   return state;
           
   }
}
