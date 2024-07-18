import React from 'react'

function MarksSheet(props) {

    let teluguMarks = Number(props.teluguMarks);
    let hindiMarks = Number(props.hindiMarks);
    let englishMarks = Number(props.englishMarks);
    let mathsMarks = Number(props.mathsMarks);
    let scienceMarks = Number(props.scienceMarks);
    let socialMarks = Number(props.socialMarks);
    let totalMarks = teluguMarks+hindiMarks+englishMarks+mathsMarks+scienceMarks+socialMarks 

    let perc = (totalMarks / 600) * 100;

  return (
    <div className='school'>
        <table className='table'>
            <caption className='caption'>{props.studentName} MARKS SHEET</caption>
            <thead>
                <tr>
                    <th className='th'>SUBJECT</th>
                    <th className='th'>MAX.MARKS</th>
                    <th className='th'>MARKS OBTAINED</th>
                    <th className='th'>RESULT</th>
                    <th className='th'>REMARKS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th className='th'>TELUGU</th>
                    <td className='td'>100</td>
                    <td className='td'>{teluguMarks}</td>
                    <td className='td'>{teluguMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
                <tr>
                    <th className='th'>HINDI</th>
                    <td className='td'>100</td>
                    <td className='td'>{hindiMarks}</td>
                    <td className='td'>{hindiMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
                <tr>
                    <th className='th'>ENGLISH</th>
                    <td className='td'>100</td>
                    <td className='td'>{englishMarks}</td>
                    <td className='td'>{englishMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
                <tr>
                    <th className='th'>MATHS</th>
                    <td className='td'>100</td>
                    <td className='td'>{mathsMarks}</td>
                    <td className='td'>{mathsMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
                <tr>
                    <th className='th'>SCIENCE</th>
                    <td className='td'>100</td>
                    <td className='td'>{scienceMarks}</td>
                    <td className='td'>{scienceMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
                <tr>
                    <th className='th'>SOCIAL</th>
                    <td className='td'>100</td>
                    <td className='td'>{socialMarks}</td>
                    <td className='td'>{socialMarks >= 35 ? "Pass" : "Fail"}</td>
                    <td className='td'>Excellent</td>
                </tr>
            </tbody>
            <tfoot>
            <tr>
                    <th className='th'>TOTAL</th>
                    <td className='td'>600</td>
                    <td className='td'>{totalMarks}({perc.toFixed(2)}%)</td>
                    <td className='td'>Pass</td>
                    <td className='td'>Excellent</td>
                </tr>
            </tfoot>
        </table>
    </div>
  )
}

export default MarksSheet