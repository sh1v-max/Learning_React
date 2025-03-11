const Shimmer = () => {
  // return (
    // <div className="shimmer-wrapper">
    //   {Array(10)
    //     .fill("")
    //     .map((_, index) => (
    // // can also use "unused", rather than '_'
    //       <div key={index} className="shimmer-card">
    //         <div className="shimmer-img"></div>
    //         <div className="shimmer-text long"></div>
    //         <div className="shimmer-text medium"></div>
    //         <div className="shimmer-text short"></div>
    //       </div>
    //     ))}
    // </div>
  // );

  return (
    <div className="shimmer-container">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};

export default Shimmer;
