import PropTypes from 'prop-types';

function Article(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <small>Date : {props.date}, tags : {props.tags.join(", ")}</small>
        </>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
}

export default Article