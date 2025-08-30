// components/ProfileCard.jsx
const ProfileCard = ({ user, totalJournals }) => (
  <div className="profile-card">
    <h2>{user.name}</h2>
    <p>{user.email}</p>
    <p>Total Journals: {totalJournals}</p>
  </div>
);

export default ProfileCard;
