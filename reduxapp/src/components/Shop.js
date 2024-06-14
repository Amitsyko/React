import React from 'react'
import { useDispatch } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

export default function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney, depositeMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div className='d-flex justify-content-center mt-5'>
      {/* <button className="btn btn-primary" onClick={() => (dispatch(actionCreators.withdrawMoney(100)))} > - </button>
      <h3 className='p-2'>Add item to the Cart</h3>
      <button className="btn btn-primary" onClick={() => (dispatch(actionCreators.depositeMoney(100)))}> + </button> */}
      <button className="btn btn-primary" onClick={() => {withdrawMoney(100)}} > - </button>
      <h3 className='p-2'>Add item to the Cart</h3>
      <button className="btn btn-primary" onClick={() => {depositeMoney(100)}}> + </button>
    </div>
  )
}
