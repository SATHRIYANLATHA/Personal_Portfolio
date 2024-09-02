import './Education.css'

export default function Education(){
    return(
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <td>QUALIFICATION</td>
                        <td>BOARD/UNIVERSITY</td>
                        <td>YEAR</td>
                        <td>MARKS</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>B.E.,[CSE]</td>
                        <td>Jayam College Of Engineering And Technology, Dharmapuri.</td>
                        <td>2020-2024</td>
                        <td>8.69 - CGPA</td>
                    </tr>

                    <tr>
                        <td>HSC</td>
                        <td>Paramveer School, Dharmapuri.</td>
                        <td>2020</td>
                        <td>76.83%</td>
                    </tr>

                    <tr>
                        <td>SSLC</td>
                        <td>Paramveer School, Dharmapuri.</td>
                        <td>2018</td>
                        <td>94.60%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}