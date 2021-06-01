import { useState } from 'react';

import './StarRating.css';

const StarRating = ({ maxRating = 5 }) => {
    const [rating, setRating] = useState(0);

    const rateStar = (newRating) => {
        if (newRating === rating) {
            setRating(0);
        } else {
            setRating(newRating)
        }
    }

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            const isRated = i <= rating;
            const starStyle = isRated ? { color: 'gold' } : {};
            const starClassname = isRated ? 'fas fa-star' : 'far fa-star';

            stars.push(
                <div
                    key={i}
                    id={i}
                    className="star-rating__star"
                    onClick={() => rateStar(i)}
                    style={starStyle}
                >
                    <i className={starClassname} />
                </div>
            );
        }

        return stars;
    }

    return (
        <div className="star-rating">
            {renderStars()}
        </div>
    );
}

export { StarRating };