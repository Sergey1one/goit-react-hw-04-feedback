import PropTypes from 'prop-types';
const FeedbackOptions  = ({ options, onFeedbackOption }) => {
    return (options.map(option => (<button key={option} type="button"
        onClick={() => onFeedbackOption(option)}>
        {option}
    </button>)))
       
    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onFeedbackOption:PropTypes.func.isRequired
}

export default FeedbackOptions 