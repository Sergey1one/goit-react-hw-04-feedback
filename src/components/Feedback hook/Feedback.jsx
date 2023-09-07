import {useState}from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions ";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import Notification from "./Notification/Notification";

export default function FeedbackHooks(){

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    
    

  

    const feedbackIncrement = (option) => {
        
        

        switch (option) {
            case 'good':
                setGood(prevGood => prevGood + 1);
                break;
            case 'neutral':
                setNeutral(prevNeutral => prevNeutral + 1);
                break;
            case 'bad':
                setBad(prevBad => prevBad + 1);
                break;
            default:
                break;
        }
        

    }
   const  countTotalFeedback = () => {
        // const { good, neutral, bad } = this.state
       return (good+neutral+bad)   
    }
    const countPositiveFeedbackPercentage = () => {
       
        return Math.round(good*100/countTotalFeedback())
    }
    
        return (<>
            <Section title={'Please leave feedback'}>
    
                 <FeedbackOptions 
                        options={['good','neutral','bad']}
            onFeedbackOption={feedbackIncrement}/>
            </Section>
                <Section title={"Statistics"}>
                {countTotalFeedback()?(<Statistics good={good}
                    neutral={neutral}
                    bad={bad}
                    total={countTotalFeedback()}
                    positivePercentage={countPositiveFeedbackPercentage()}
                     />) :
                    (<Notification message={"No feedback given"}/>)}
                
            </Section>      
         
                
            
        
            </>
        )


}

