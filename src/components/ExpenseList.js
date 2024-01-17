import {React,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExpenses } from '../services/expenses';
import { Row,Button,Col } from 'react-bootstrap';

export default () => {
    const dispatch = useDispatch();
    const expenses = useSelector(state => state.expensesReducer.expenses);

    useEffect(()=>{
        getExpenses(dispatch);
    },[]);

    return expenses.map(e=>
        <div style={{marginBottom:'1rem'}}>
            <ListRow expense={e}/>
        </div>
        );
}

const ListRow = ({expense})=>{
    return <div>
        <Row style={{justifyContent:'space-between'}}>
            <Col>{expense.description}</Col>
            <Col>{expense.amount}</Col>
            <Button variant="warning">Edit</Button>
        </Row>
        <hr/>
    </div>
}