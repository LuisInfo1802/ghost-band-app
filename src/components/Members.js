import React, { useState, useEffect } from 'react';
import '../styles/members.css';

const Members = () => {
  const [members, setMembers] = useState([]);

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

  return (
    <div className="members-container">
      <h1 className="members-title">Members</h1>
      {members.map(member => (
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
  );
};

export default Members;
