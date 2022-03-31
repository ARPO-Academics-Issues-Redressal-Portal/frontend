import React from 'react'
import Table from '../../components/Table';
import GeneralHeader from '../../components/GeneralHeader';
import { CourseParticipantsApi } from '../../apis/Apis';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProfilesApi } from '../../apis/Apis';

export default function Participants() {

  const { course } = useParams();
  const [participants, setParticipants] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [mapping, setMapping] = useState([]);

  const fnGetParticipants = async () => {
    let res = await CourseParticipantsApi(course)
    let arr = res.data;
    setParticipants(arr)
  }

  const fnGetProfiles = async () => {
    let res = await ProfilesApi()
    let arr = res.data;
    setProfiles(arr)
  }

  const createMapping = () => {
    let newObj = [];
    participants.forEach(element => {
      let buff = {}
      buff['profile_id'] = element.profile_id;
      buff['role'] = element.role;
      profiles.forEach(e => {
        if(e.profile_id === element.profile_id ){
          buff['name'] = e.name
          buff['roll_number'] = e.roll_number
          buff['email_id'] = e.email_id
        }
      });
      newObj.push(buff)
    }); 
    return newObj;
  }
  
  useEffect(() => {
    fnGetProfiles();
    fnGetParticipants(course);
    setMapping(createMapping());
}, [])

  return (<>
    <div>
      <GeneralHeader />
    </div>
    <table className="table table-bordered rounded ">
    <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Profile Id</th>
          <th scope="col">Name</th>
          <th scope="col">Roll Number</th>
          <th scope="col">Email Id</th>
          <th scope="col">Role</th>
        </tr>
      </thead>
      <tbody></tbody>
    {
        mapping.map((element, index) => (
                <tr>
                  <th scope="row">1</th>
                  <td>{element.profile_id}</td>
                  <td>{element.name}</td>
                  <td>{element.roll_number}</td>
                  <td>{element.email_id}</td>
                  <td>{element.role}</td>
                </tr>
           ))
    }
    </table>
  </>
  )
}