import React from "react";
import { useState } from "react";

export const Counter = ({initialValue = 0, step}) => {

    const [counterGood, setCounterGood] = useState(initialValue)
    const [counterNeutral, setCounterNeutral] = useState(initialValue)
    const [counterBad, setCounterBad] = useState(initialValue)

    const onClickGood = () => {
        setCounterGood(prevValue => prevValue + step)
  }
  
    const onClickNeutral = () => {
        setCounterNeutral(prevValue => prevValue + step)
  }

  const onClickBad = () => {
        setCounterBad(prevValue => prevValue + step)
}

    const countTotalFeedback = () => {
        return counterGood + counterNeutral + counterBad;
    };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) return 0;

    return ((counterGood / totalFeedback) * 100).toFixed(1);
  };


    return (
    <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={onClickGood}>Good</button>
        <button type="button" onClick={onClickNeutral}>Neutral</button>
        <button type="button" onClick={onClickBad}>Bad</button>
        <h1>Statistics</h1>
        <div>Good: { counterGood }</div>
        <div>Neutral: { counterNeutral }</div>
        <div>Bad: { counterBad }</div>
        <div>Total Feedback: {countTotalFeedback()}</div>
        <div>Positive Feedback: {countPositiveFeedbackPercentage()}%</div>
    </div>
    )
}

















// ✅ Nieźle
// class Counter extends Component {
//     static defaultProps = {
//         step: 1,
//       };
    
//       constructor() {
//         super();
//         this.handleIncrement = this.handleIncrement.bind(this);
//         this.handleDecrement = this.handleDecrement.bind(this);
//         this.state = {value: 0};
//       }
    
//       handleIncrement = evt => {
//         console.log("Increment button was clicked!", evt);// działa
//         console.log("this.props: ", this.props);// działa
//       };
    
//       handleDecrement = evt => {
//         console.log("Decrement button was clicked!", evt);// działa
//         console.log("this.props: ", this.props);// działa
//       };
      
    
//       render() {
//         const { step } = this.props;
    
//         return (
//           <div>
//             <span>{this.state.value}</span>
//             <button type="button" onClick={this.handleIncrement}>
//               Increment by {step}
//             </button>
//             <button type="button" onClick={this.handleDecrement}>
//               Decrement by {step}
//             </button>
//           </div>
//         );
//       }
//     }