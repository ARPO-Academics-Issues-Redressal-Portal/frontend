import React from 'react'
import Table from '../../components/Table';
import GeneralHeader from '../components/GeneralHeader';

function Participants() {
  return (<>
    <div>
      <GeneralHeader />
    </div>
    <table className="table table-bordered rounded ">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Username</th>
        
          <th scope="col">Roll</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <th scope="row">3</th>
          <td >Larry the </td>
          <td > Bird</td>
      
        </tr>
      </tbody>
    </table>

  </>

  )
}

export default Participants