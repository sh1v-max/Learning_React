const Shimmer = () => {
  // return (
  //   <div className="shimmer-wrapper">
  //     {Array(10)
  //       .fill("")
  //       .map((_, index) => (
  //         <div key={index} className="shimmer-card">
  //           <div className="shimmer-img"></div>
  //           <div className="shimmer-text long"></div>
  //           <div className="shimmer-text medium"></div>
  //           <div className="shimmer-text short"></div>
  //         </div>
  //       ))}
  //   </div>
  // );

  return (
    <div className="shimmer-container">
      <div className="shimmer-cards">Cards</div>
      <div className="shimmer-cards">Cards</div>
      <div className="shimmer-cards">Cards</div>
    </div>
  );
};

export default Shimmer;
