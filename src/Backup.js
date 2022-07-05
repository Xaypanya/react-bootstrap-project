import logo from './logo.svg';
import './App.css';
import creatine from './asset/creatine.png'
import ctScan from './asset/ctScan.png'
import eyesFluo from './asset/eyesFluo.png'
import glucose from './asset/glucose.png'
import heartRate from './asset/heartRate.png'
import result from './asset/result.png'
import temperature from './asset/temperature.png'
import mark from './asset/mark.jpeg'

function App() {

  return (
    <div className="App">
      <h1>Current Appointment</h1>
      <div className="container">
      <div className='left_container'>
        <div className="profile">
          <img src={mark} alt="profile picture" />
          <h3>Roger Curtis</h3>
          <h2>Age: 36</h2>
        </div>
        <div className="information">
          <h2>Infomation</h2>
          <div className='information_container'>
          <div className="information_title">
            <h3>Gender:</h3>
            <h3>Bloody Type:</h3>
            <h3>Allergies:</h3>
            <h3>Disease:</h3>
            <h3>Height:</h3>
            <h3>Weight:</h3>
            <h3>Patient ID:</h3>
            <h3>Last Visit:</h3>
          </div>
          <div className="information_detail">
            <h3>Male</h3>
            <h3>O+ [Positive]</h3>
            <h3>Milk Pencilin</h3>
            <h3>Diabetes, Bloody Disorders</h3>
            <h3>1.70m</h3>
            <h3>65 kg</h3>
            <h3>205898786</h3>
            <h3>25th October 2019</h3>
          </div> 
          </div>
        </div>
      </div>
      <div className='right_container'>
        <div className="body_status">
          <div className='body_status_card'>
            <img src={heartRate} alt="heart rate" />
            <h3>Heart Rate</h3>
            <h3><span>80</span>bpm</h3>
          </div>
          <div className='body_status_card'>
            <img src={temperature} alt="temperature" />
            <h3>Body Temperature</h3>
            <h3><span>36.5</span>C</h3>
          </div>
          <div className='body_status_card'>
            <img src={glucose} alt="glucose" />
            <h3>Glucose</h3>
            <h3><span>100</span>mg/dl</h3>
          </div>
         
        </div>
        <div className="test_report">
          <h2>Test Reports</h2>
          {/* Test Result Card */}
          <div>
            <div>
              <img src={ctScan} alt="ct scan" />
            </div>
            <div>
              <h3>CT Scan-Full Body</h3>
              <h4>12th February 2020</h4>
            </div>
          </div>
          {/* Test Result Card */}
          <div>
            <div>
              <img src={creatine} alt="creatine" />
            </div>
            <div>
              <h3>Creatine Kanise T</h3>
              <h4>12th February 2020</h4>
            </div>
          </div>
          {/* Test Result Card */}
          <div>
            <div>
              <img src={eyesFluo} alt="eyes fluo" />
            </div>
            <div>
              <h3>Eye Fluorescein Test</h3>
              <h4>12th February 2020</h4>
            </div>
          </div>
        </div>

        <div className="Prescription">
          <h2>Prescription</h2>
          <button>Add a prescription</button>
          <table>
            <tr>
              <th>Prescriptions</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
            <tr>
              <td>
                <img src={result} alt="result heart diseases" />
                <h3>Heart Diseases</h3>
              </td>
              <td>
                <h3>25th October 2019</h3>
              </td>
              <td>
                <h3>3 months</h3>
              </td>
            </tr>
            <tr>
              <td>
                <img src={result} alt="result skin care" />
                <h3>Skin Care</h3>
              </td>
              <td>
                <h3>8th August 2019</h3>
              </td>
              <td>
                <h3>2 months</h3>
              </td>
            </tr>
          </table>
        </div>
      </div>
      </div>
     
    </div>
  );
}

export default App;


