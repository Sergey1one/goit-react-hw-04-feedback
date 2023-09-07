import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions ";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    feedbackIncrement = (option) => {
        
        console.log([option]);
        this.setState(prevState => ({
            [option]:prevState[option]+1
        }))

    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state
       return (good+neutral+bad)   
    }
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state
        return Math.round(good*100/this.countTotalFeedback())
    }
    render() {
        const { good, neutral, bad }=this.state
        return (<>
            <Section title={'Please leave feedback'}>
                <FeedbackOptions 
                        options={['Object.keys(this.state)']}
            onFeedbackOption={this.feedbackIncrement}/>
            </Section>
                    
            <Section title={"Statistics"}>
                {this.countTotalFeedback()?(<Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()} />) :
                    (<Notification message={"No feedback given"}/>)}
                
            </Section>
        
            </>
        )
    }

}

export default Feedback