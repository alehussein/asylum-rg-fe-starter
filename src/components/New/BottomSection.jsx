// import clases from './Buttom.Module.css';

const BottomSection = () => {
  return (
    <div className="container">
      <h1 className="title">Sytemic Disparity Insights</h1>
      <div className="graph_container">
        <div className="graph_card">
          <h1>36%</h1>
          <p>
            By the end of the Trump administration, the average asylum office
            grant rate had fallen 36 percent from an average of 44 percent in
            fiscal year 2016 to 28 percent in fiscal year 2020.
          </p>
        </div>
        <div className="graph_card">
          <h1>5%</h1>
          <p>
            The New York asylum office grant rate dropped to 5 percent in fiscal
            year.
          </p>
        </div>
        <div className="graph_card">
          <h1>6x Lower</h1>
          <p>
            Between fiscal year 2017 and 2020, the New York asylum office's
            average grant rate was six times lower than the San Fracisco asylum
            office.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomSection;
