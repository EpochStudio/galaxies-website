"use client"

import { useEffect, useState } from "react";


const Team = ({ team: initialTeam }) => {
    const [team, setTeam] = useState([]);

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
            const updatedTeam = await Promise.all(
                initialTeam.map(async (user) => {
                    const avatar = await fetchAvatar(user.id);
                    return { ...user, avatar: avatar || user.avatar };
                })
            );
            setTeam(updatedTeam.filter(member => member.type === "developer"));
        }
        loadAvatar();
    }, [initialTeam]);
    return (
        <>
            {team.length === 0 ? (
                <p>Fetching details...</p>
            ) : (
                team.map((user) => <div key={user.name} className="team-member">
                    <div className="image-wrapper feature-img">
                        <img className="img-fluid" src={user.avatar} alt="alternative" />
                    </div>
                    <p className="p-large"><strong>{user.name}</strong></p>
                    <p className="job-title">{user.detail}</p>
                </div>
                )
            )}
        </>
    )
}

export default Team