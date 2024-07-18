import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      <h1 className='h1'>PRUDHVI PUBLIC SCHOOL</h1>
      <MarksSheet studentName="VAMSHI" teluguMarks="75" hindiMarks="56" englishMarks="34" mathsMarks="75" scienceMarks="35" socialMarks="61"/>
      <MarksSheet studentName="SHIVA" teluguMarks="77" hindiMarks="30" englishMarks="67" mathsMarks="76" scienceMarks="72" socialMarks="22"/>
      <MarksSheet studentName="VARSHITH" teluguMarks="78" hindiMarks="58" englishMarks="29" mathsMarks="83" scienceMarks="73" socialMarks="33"/>
      <MarksSheet studentName="PRAVEEN" teluguMarks="79" hindiMarks="59" englishMarks="69" mathsMarks="25" scienceMarks="74" socialMarks="34"/>
      <MarksSheet studentName="LAXMAN" teluguMarks="65" hindiMarks="54" englishMarks="35" mathsMarks="34" scienceMarks="22" socialMarks="65"/>
      <MarksSheet studentName="RAM" teluguMarks="70" hindiMarks="33" englishMarks="71" mathsMarks="84" scienceMarks="75" socialMarks="31"/>
    </div>
  );
}

export default App;
