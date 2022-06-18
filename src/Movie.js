import React from "react";
import "./Movie.css";
import PropTypes from "prop-types";
function Movie({ id, year, title, summary, poster, genres }) {
    return <div className="Movie">
        <img src={poster} alt={title} title={title} className="Movie__poster" />
        <div className="Movie__column">
            <h3 className="Movie__title">{title}</h3>
            <h5 className="Movie__yaer">
                {year}
            </h5>
            <ul className="Movie__genres">
                {genres.map((genres,idx) => {
                    return <li className="Movie__genre" key={idx.toString()}>
                        {genres}
                    </li>
                })}
            </ul>
            <p className="Movie__summary">{summary.slice(0,140)}...</p>
        </div>
    </div>
}
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie