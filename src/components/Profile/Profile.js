import { usePaintingContext } from "../../contexts/PaintingContext";
import { LatestPainting } from "../Home/LatestPainting/LatestPainting";

import { useAuthContext } from "../../contexts/AuthContext";

import './Profile.css';

export const Profile = () => {

    const { paintings } = usePaintingContext()
    const { username, country, about, email, userId, avatarUrl } = useAuthContext()

    const ownedPaintings = paintings.filter(x => x._ownerId === userId)
        .map(x => <LatestPainting key={x._id} {...x} />)
        .reverse();

    return (
        <section className="painter-info">
            <div className="painter-profile">
                <div className="painter-card">
                    <img src={avatarUrl} alt={username} className="avatar" />
                    <div className="text-details">
                        <h2 className="username">{username}</h2>
                        <p className="country"><b>Country:</b> {country} </p>
                        <p className="email"><b>Email:</b>{email}</p>
                        <p className="about"><b>About:</b> {about}</p>
                    </div>
                </div>
            </div>

            <div className="paintings">
                <h3 className="section-title">Recent Paintings by {username}</h3>
                <section className="projcard-container">

                    {ownedPaintings.length === 0 ? <h3>No paintings yet...</h3> : ownedPaintings}

                </section>
            </div>
        </section>
    );
}