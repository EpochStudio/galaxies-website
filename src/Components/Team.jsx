"use client"

import { useEffect, useState } from "react";


const Team = ({ team }) => {
    const [newTeam, setTeam] = useState(team);

    async function fetchAvatar(userId) {
        try {
            const response = await fetch(`/api/discord?userId=${userId}`);
            const data = await response.json();

            if (response.ok) {
                return data.avatarUrl;
            } else {
                console.error('Error fetching avatar:', data.error);
                return null;
            }
        } catch (error) {
            console.error('Fetch error:', error);
            return null;
        }
    }

    useEffect(() => {
        async function loadAvatar() {
            team.map(async (user) => {
                user.avatar = await fetchAvatar(user.id);
            });
        }
        loadAvatar();
        setTeam(team);
    }, []);
    return (
        <>
            {
                console.log(newTeam.map((user) => user.avatar))
            }
            {
                newTeam.map((user) => <div key={user.name} className="team-member">
                    <div className="image-wrapper feature-img">
                        <img className="img-fluid" src={user.avatar} alt="alternative" />
                    </div>
                    <p className="p-large"><strong>{user.name}</strong></p>
                    <p className="job-title">{user.detail}</p>
                </div>
                )
            }
        </>
    )
}

export default Team