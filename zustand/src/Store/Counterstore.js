import { create } from 'zustand';

const CounterStore = (set) => ({
mycount:10,
addcount: ()=>{
    set((previousState)=>{
return{mycount: previousState.mycount+1}


    })
},
minuscount:()=>{
    set((previousState)=>{
return{mycount: previousState.mycount-1}
    })
}
});

const useCounterStore = create(CounterStore);

export default useCounterStore;
