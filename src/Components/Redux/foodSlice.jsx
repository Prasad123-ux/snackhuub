import { createSlice } from "@reduxjs/toolkit";  


const initialState={
    allFoods:[],
    foodCategory:[],
    ownersData:[],
    filteredFoods:[], 
    token:[]
};

const foodSlice=createSlice({
    name:"foods",
    initialState,
    reducers:{
        setAllFoods:(state,action)=>{
            state.allFoods=action.payload  
            
        },
        setFoodCategory:(state,action)=>{ 
            state.foodCategory=action.payload

        },
        setAllFilteredFoods:(state,action)=>{
            state.filteredFoods= action.payload
        },
        setAllOwnerData:(state,action)=>{
            state.ownersData= action.payload
        },
        setToken:(state,action)=>{
            state.token= action.payload
        }
    }
})

export const {setAllFilteredFoods,setAllFoods,setAllOwnerData,setFoodCategory,setToken} =foodSlice.actions
export default foodSlice.reducer