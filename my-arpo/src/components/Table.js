import React from 'react'

function Table() {
  return (
    <div>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Quiz 1</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Quiz 2</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Midsem</td>
      <td></td>
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default Table