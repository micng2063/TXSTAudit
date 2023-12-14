
export default function Test(){
    return(
        <div>
        <table>
            <tbody>
            <tr class="plangridyear firstrow">
                <th align="right" colspan="4">Freshman</th>
            </tr>
            <tr class="plangridterm">
                <th align="right" style={{width: "40%"}}>First Semester</th>
                <th style={{width: "10%"}} class="hourscol">Hours</th>
                <th align="right" style={{width: "40%;"}}>Second Semester</th>
                <th style={{width: "10%"}} class="hourscol">Hours</th>
            </tr>
            <tr class="even">
                <td class="codecol">
                <a href="/search/?P=CS%201428" title="CS&nbsp;1428" class="bubblelink code" onclick="return showCourse(this, 'CS 1428');">CS&nbsp;1428</a> (TCCN COSC 1437)
                </td>
                <td class="hourscol">4</td>
                <td class="codecol">
                <a href="/search/?P=CS%202308" title="CS&nbsp;2308" class="bubblelink code" onclick="return showCourse(this, 'CS 2308');">CS&nbsp;2308</a> (TCCN COSC 2336 or 2436 )
                </td>
                <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
            </tr>
            <tr class="plangridtotal lastrow">
                <td colspan="4">Total Hours: 120</td>
            </tr>
            </tbody>
        </table>
      </div>
    );
}