import { Component } from 'react';
// import PropTypes from 'prop-types';
// import css from './Profile.module.css';

class Feedback extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  render() {
    
  }

}
// export const Statistics = ({ title, stats }) => {
//   return (
//     <StatisticsBox>
//       {title && <Title>{title}</Title>}
      
//       <StatList>
//         {stats.map(({ id, label, percentage }) => (
//           <Item key={id} id={id}>
//             <Label>{label}</Label>
//             <Percentage>{percentage}%</Percentage>
//           </Item>
//         ))}
//       </StatList>
//     </StatisticsBox>
//   );
// };

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ),
// };

export default Feedback;