import { ActionCreators } from "../app/expensesReducer";

export const getExpenses = async(dispatch)=>{
    try{
        //api call
        const expenses = [
            {id:1,description:'groc',amount:10.10},
            {id:2,description:'broc',amount:10.10},
            {id:3,description:'troc',amount:10.10},
        ];

        dispatch(ActionCreators.setExpenses(expenses));
    } catch {
        console.log('err')
    } 
}