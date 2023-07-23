import Bar from '../../../src/styles/Images//bar-graph-no-text.png';
import Line from '../../../src/styles/Images//line-graph-no-text.png';
import Pie from '../../../src/styles/Images/pie-chart-no-text.png';

export default function TopSection() {
  return (
    <div className="card_container">
      <div className="card">
        <img className="bar" src={Bar} alt="bar-graph-no-text" />
        <h3>Search Grant Rates By Office</h3>
      </div>
      <div className="card">
        <img className="pie" src={Pie} alt="pie-chart-no-text" />
        <h3>Search Grant Rates By Nationality</h3>
      </div>
      <div className="card">
        <img className="line" src={Line} alt="line-graph-no-text" />
        <h3>Search Grant Rates By Over Time</h3>
      </div>
    </div>
  );
}
