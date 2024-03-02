import React from 'react'

const arr = [1, 2, 3, 4, 5];

const Loader = () => {
  return (
    <>
      {arr.map(i =>
        <tr key={i} className='loader'>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
          <td>
            <div className="loader-cell"></div>
          </td>
        </tr>
      )}
    </>
  )
}

export default Loader