import React from 'react';
import './style.css';
import boardimage from '../../images/leadership/board_of_members_1.jpg';

const BoardOfMembers = () => {
    return (
        <div className='board-of-members-container'>
            <div className='board-of-members-img'>
                <img src={boardimage} />
            </div>
            <div className='board-of-members-text-container'>
                <div className='board-of-members-title'>
                    <h1>Board of Members</h1>
                </div>
                <div className='board-of-members-description'>
                    <p>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='board-of-members-contact-btn'>
                    <button>Contact Board Members</button>
                </div>
            </div>
        </div>
    )
}

export default BoardOfMembers;