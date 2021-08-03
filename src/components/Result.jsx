import React from "react";
import PropTypes from "prop-types";

//Destructuring  1
// const Result = (props) => {
//   const {value} = props
//   console.log("Result ",value)
//   return (
//     <div className="result">
//       {value}
//     </div>
//   );
// };

//Destructuring 2
const Result = ({ value }) => (
  <div className="result">
    {value}
  </div>
)

Result.propTypes = {
  value: PropTypes.string.isRequired,
};

Result.defaultProps = {
  value: "0",
};

export default Result;
