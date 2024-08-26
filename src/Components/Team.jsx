"use client"

import { useEffect, useState } from "react";
import Modal from "react-modal";

const Team = ({ team: initialTeam }) => {
    const [team, setTeam] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

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

    const openModal = (user) => {
        setSelectedUser(user);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedUser(null);
    };


    useEffect(() => {
        async function loadAvatar() {
            const updatedTeam = await Promise.all(
                initialTeam.map(async (user) => {
                    const avatar = await fetchAvatar(user.id);
                    return { ...user, avatar: avatar || user.avatar };
                })
            );
            setTeam(updatedTeam);
        }
        loadAvatar();
    }, [initialTeam]);

    return (
        <>
            {team.length === 0 ? (
                <p>Fetching details...</p>
            ) : (
                team.map((user) => <div key={user.id} className="col-md-4 d-flex justify-content-center">
                    <div className="card">
                        <img src={user.avatar} alt="Profile Image" className="team-img" />
                        <div className="card-body text-left">
                            <h5 className="card-title text-white">
                                <strong>{user.name}</strong>
                            </h5>
                            <p className="card-text d-flex justify-content-between align-items-center">
                                {user.title}
                                <button className="info-btn" onClick={() => openModal(user)}>
                                    <i className="fas fa-info"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>)
            )}

            {/* Modal for user details */}
            {selectedUser && console.log(selectedUser)}
            {selectedUser && (
                <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel={`About ${selectedUser.name}`} ariaHideApp={false}>
                    <div className="d-flex justify-content-between mb-4">
                        <h3 className="text-white">About {selectedUser.name}</h3>
                        <i className="fa fa-times" style={{ cursor: "pointer", fontSize: "2em" }} onClick={closeModal}></i>
                    </div>
                    <div key={selectedUser.name} className="team-modal">
                        <div className="modalHeader">
                            <div className="image-wrapper feature-img">
                                <img className="img-fluid" src={selectedUser.avatar} alt="alternative" />
                            </div>
                            <div className="text-content">
                                <h3 className="text-white"><strong>{selectedUser.name}</strong></h3>
                                <p className="job-title">{selectedUser.title}</p>
                            </div>
                        </div>
                        <div className="about-me">
                            <h3 className="text-white">About me</h3>
                            <p className="text-white realAboutMe">{selectedUser.aboutMe}</p>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    )
}

export default Team