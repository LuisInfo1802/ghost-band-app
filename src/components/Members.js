import React, { useState, useEffect } from 'react';
import '../styles/members.css';

const Members = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  useEffect(() => {
    // Llamada a la API para obtener los miembros
    const fetchMembers = async () => {
      try {
        const response = await fetch('https://res-api-ghost-production.up.railway.app/api/members'); // Reemplaza con tu URL de la API
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error('Error fetching members:', error);
      }
    };

    fetchMembers();
  }, []);

  const filteredMembers = members.filter(member=>{
    return member.real_name.toLowerCase().includes(searchTerm.toLowerCase());

  });
  return (
    <div className="members-container">
      <h1 className="members-title">Members</h1>
    

    <input type='text'
    placeholder='Search the Member for real name'
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    className='search-input'
    ></input>
    
    
      <div className='members-list'>

      {filteredMembers.map(member => (
        <div className="member-item" key={member.idMember}>
          <img src={member.image} alt={member.nickname} className="member-image" />
          <div className="member-details">
            <h2 className="member-name">{member.real_name}</h2>
            <p className="member-info">{`Nickname: ${member.nickname}`}</p>
            <p className="member-info">{`Instrument: ${member.instrument}`}</p>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Members;
