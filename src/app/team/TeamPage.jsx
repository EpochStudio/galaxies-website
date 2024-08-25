"use client"

import Team from '@/Components/Team'
import { useState } from 'react';

const TeamPage = ({ team }) => {
    const [selectedOption, setSelectedOption] = useState('developer');
    const [filteredTeam, setFilteredTeam] = useState(team.filter(member => member.type === selectedOption));

    const handleChange = (e) => {
        const option = e.target.value;
        setSelectedOption(option);
        setFilteredTeam(team.filter(member => member.type === option));
    };

    return (
        <div className="container team-container" style={{ backgroundColor: "#232931", marginTop: '6.5rem', marginBottom: '3.5rem', borderRadius: '15px', paddingTop: '5px' }}>
            <div className="row mb-4 pt-4">
                <div className="col-12 text-right d-flex justify-content-between px-5 team-header">
                    <h2 className='text-white'>
                        {selectedOption === 'staff' ? 'Staff Team' : 'Development Team'}
                    </h2>
                    <select
                        id="team-category"
                        className="form-control"
                        style={{ width: "auto" }}
                        value={selectedOption}
                        onChange={handleChange}
                    >
                        <option value="developer">Developer</option>
                        <option value="staff">Staff</option>
                    </select>
                </div>
            </div>
            <div id="team-cards" className="row justify-content-center">
                <Team team={filteredTeam} />
            </div>
        </div>
    )
}

export default TeamPage