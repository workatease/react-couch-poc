import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByAmount,
  selectCount, getList, data
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const rows = useSelector(data);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  useEffect(() => {
    if (rows.length===0) {
      dispatch(getList());
    }
  }, [rows, dispatch]);

  const renderTableData = () => {
    return rows.map((row, index) => {
      const { key, value } = row //destructuring
      return (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      )
    })
  }

  const renderTableHeader = () => {

    if (rows.length > 0) {
      let header = Object.keys(rows[0])
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
      })
    } else {
      return null;
    }

  }
  return (
    <div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount({ amount: Number(incrementAmount) || 0, name: 'Deepak' }))
          }
        >
          Add Amount Deepak
        </button> &nbsp;
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount({ amount: Number(incrementAmount) || 0, name: 'Ruban' }))
          }
        >
          Add Amount Ruban
        </button>
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount({ amount: Number(incrementAmount) || 0, name: 'Siva' }))
          }
        >
          Add Amount Siva
        </button> &nbsp;
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount({ amount: Number(incrementAmount) || 0, name: 'Pyll' }))
          }
        >
          Add Amount Pyll
        </button>
      </div>
      <div className={styles.row}>
        <table id="students">
          <tbody>
            <tr>{renderTableHeader()}</tr>
            {renderTableData()}
          </tbody>
        </table>
      </div>

    </div >
  );
}
