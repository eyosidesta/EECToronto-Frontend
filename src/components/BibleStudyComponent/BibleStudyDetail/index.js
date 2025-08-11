// BibleStudyTeams.jsx
import React from 'react';
import './style.css';

const teams = [
  { name: "Grace Fellowship", address: "99 Joy Court, St Clair & Yonge", area: "St Clair & Yonge", map: "99+Joy+Court,+Toronto,+ON" },
  { name: "James Group", address: "67 James Rd, East York", area: "East York", map: "67+James+Rd,+Toronto,+ON" },
  { name: "Hope Bible Study", address: "121 Hope Ave, Scarborough", area: "Scarborough", map: "121+Hope+Ave,+Toronto,+ON" },
  { name: "Faithview Circle", address: "300 Faithview Blvd, North York", area: "North York", map: "300+Faithview+Blvd,+Toronto,+ON" },
  { name: "Downtown Disciples", address: "22 Grace Lane, Downtown Toronto", area: "Downtown", map: "22+Grace+Lane,+Toronto,+ON" },
  { name: "Vaughan Fellowship", address: "77 Unity Crescent, Vaughan", area: "Vaughan", map: "77+Unity+Crescent,+Vaughan,+ON" },
  { name: "West Toronto Believers", address: "88 Peace Street, West Toronto", area: "West Toronto", map: "88+Peace+Street,+Toronto,+ON" },
  { name: "Love & Truth Group", address: "145 Light Ave, Scarborough", area: "Scarborough", map: "145+Light+Ave,+Toronto,+ON" },
  { name: "Living Water Group", address: "12 Hopewell Dr, East York", area: "East York", map: "12+Hopewell+Dr,+Toronto,+ON" },
  { name: "Alpha Omega", address: "55 Glory Rd, Downtown Toronto", area: "Downtown", map: "55+Glory+Rd,+Toronto,+ON" },
  { name: "Pathfinders", address: "201 Spirit Blvd, North York", area: "North York", map: "201+Spirit+Blvd,+Toronto,+ON" },
  { name: "Covenant Community", address: "322 Mercy St, Vaughan", area: "Vaughan", map: "322+Mercy+St,+Vaughan,+ON" },
  { name: "Kingdom Seekers", address: "77 Trinity Rd, West Toronto", area: "West Toronto", map: "77+Trinity+Rd,+Toronto,+ON" },
  { name: "Harvest Church Team", address: "231 Redeem Ln, East York", area: "East York", map: "231+Redeem+Ln,+Toronto,+ON" },
  { name: "Faith Builders", address: "412 Blessing Ave, North York", area: "North York", map: "412+Blessing+Ave,+Toronto,+ON" },
  { name: "Morning Star", address: "38 Dawn Dr, Scarborough", area: "Scarborough", map: "38+Dawn+Dr,+Toronto,+ON" },
  { name: "Radiant Word Group", address: "66 Unity Blvd, Downtown Toronto", area: "Downtown", map: "66+Unity+Blvd,+Toronto,+ON" },
  { name: "True Vine Team", address: "204 Olive Rd, Vaughan", area: "Vaughan", map: "204+Olive+Rd,+Vaughan,+ON" },
  { name: "Life Group Central", address: "109 Central Ave, St Clair & Yonge", area: "St Clair & Yonge", map: "109+Central+Ave,+Toronto,+ON" },
  { name: "Christ Followers", address: "59 Spirit Dr, West Toronto", area: "West Toronto", map: "59+Spirit+Dr,+Toronto,+ON" },
];

const BibleStudyDetail = () => {
  return (
    <div className="bible-study-container">
      <h2>Bible Study Teams Across Toronto</h2>
      <p>
        We believe in community-driven spiritual growth. Our Bible Study teams meet weekly in various
        neighborhoods across Toronto including East York, North York, Downtown, and more. Below is a list of
        our groups with addresses and maps for easy access.
      </p>
      <div className="team-list">
        {teams.map((team, idx) => (
          <div className="team-card" key={idx}>
            <h3>{team.name}</h3>
            <p><strong>{team.address}</strong> - {team.area}</p>
            <iframe
              title={`Map for ${team.name}`}
              src={`https://www.google.com/maps?q=${team.map}&output=embed`}
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BibleStudyDetail;
