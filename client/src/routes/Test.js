
export default function Test(){
    return(
      <div>
         <table style={{paddingRight:"50px", paddingLeft:"50px"}}>
            <tbody>
            <tr class="plangridyear firstrow">
               <th align="right" colspan="4">Freshman</th>
            </tr>
            <tr class="plangridterm">
               <th align="right" style={{width: "40%"}}>First Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
               <th align="right" style={{width: "40%"}}>Second Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=CS%201428" title="CS&nbsp;1428" class="bubblelink code" onclick="return showCourse(this, 'CS 1428');">CS&nbsp;1428</a> (TCCN COSC 1437)</td>
               <td class="hourscol">4</td>
               <td class="codecol"><a href="/search/?P=CS%202308" title="CS&nbsp;2308" class="bubblelink code" onclick="return showCourse(this, 'CS 2308');">CS&nbsp;2308</a> (TCCN COSC 2336 or 2436 )</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol"><a href="/search/?P=MATH%202471" title="MATH&nbsp;2471" class="bubblelink code" onclick="return showCourse(this, 'MATH 2471');">MATH&nbsp;2471</a> (Mathematics Component Code 020 [TCCN MATH 2413])</td>
               <td class="hourscol">4</td>
               <td class="codecol"><a href="/search/?P=MATH%202472" title="MATH&nbsp;2472" class="bubblelink code" onclick="return showCourse(this, 'MATH 2472');">MATH&nbsp;2472</a> (Component Area Option Code 090/092 [TCCN MATH 2414])</td>
               <td class="hourscol">4</td>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=US%201100" title="US&nbsp;1100" class="bubblelink code" onclick="return showCourse(this, 'US 1100');">US&nbsp;1100</a></td>
               <td class="hourscol">1</td>
               <td class="codecol"><a href="/search/?P=PHIL%201305" title="PHIL&nbsp;1305" class="bubblelink code" onclick="return showCourse(this, 'PHIL 1305');">PHIL&nbsp;1305</a> or <a href="/search/?P=PHIL%201320" title="PHIL&nbsp;1320" class="bubblelink code" onclick="return showCourse(this, 'PHIL 1320');"> 1320</a> (Language, Philosophy, and Culture Component Code 040 [TCCN PHIL 1301 or 2306])</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol"><a href="/search/?P=ENG%201310" title="ENG&nbsp;1310" class="bubblelink code" onclick="return showCourse(this, 'ENG 1310');">ENG&nbsp;1310</a>, <a href="/search/?P=ENG%201320" title="ENG&nbsp;1320" class="bubblelink code" onclick="return showCourse(this, 'ENG 1320');"> 1320</a>, or <a href="/search/?P=ENG%201321" title="ENG&nbsp;1321" class="bubblelink code" onclick="return showCourse(this, 'ENG 1321');"> 1321</a> (Communication Component Code 010)</td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=MATH%202358" title="MATH&nbsp;2358" class="bubblelink code" onclick="return showCourse(this, 'MATH 2358');">MATH&nbsp;2358</a> (TCCN MATH 2305 or 2405)</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=COMM%201310" title="COMM&nbsp;1310" class="bubblelink code" onclick="return showCourse(this, 'COMM 1310');">COMM&nbsp;1310</a> (Component Area Option Code 090/091 [TCCN SPCH 1311])</td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=POSI%202310" title="POSI&nbsp;2310" class="bubblelink code" onclick="return showCourse(this, 'POSI 2310');">POSI&nbsp;2310</a> (Gevernment/Political Science Component Code 070 [TCCN GOVT 2306])</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="plangridsum">
               <td>&nbsp;</td>
               <td class="hourscol">15</td>
               <td>&nbsp;</td>
               <td class="hourscol">16</td>
            </tr>
            {/*
            <tr class="plangridyear">
               <th align="right" colspan="4">Sophomore</th>
            </tr>
            <tr class="plangridterm">
               <th align="right" style={{width: "40%"}}>First Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
               <th align="right" style={{width: "40%"}}>Second Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=CS%202318" title="CS&nbsp;2318" class="bubblelink code" onclick="return showCourse(this, 'CS 2318');">CS&nbsp;2318</a> (TCCN COSC 2325)</td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=CS%202315" title="CS&nbsp;2315" class="bubblelink code" onclick="return showCourse(this, 'CS 2315');">CS&nbsp;2315</a></td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol"><a href="/search/?P=CS%203358" title="CS&nbsp;3358" class="bubblelink code" onclick="return showCourse(this, 'CS 3358');">CS&nbsp;3358</a></td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=CS%203354" title="CS&nbsp;3354" class="bubblelink code" onclick="return showCourse(this, 'CS 3354');">CS&nbsp;3354</a></td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=MATH%203398" title="MATH&nbsp;3398" class="bubblelink code" onclick="return showCourse(this, 'MATH 3398');">MATH&nbsp;3398</a></td>
               <td class="hourscol">3</td>
               <td class="codecol">Life and Physical Sciences Component Code 030<sup>1</sup></td>
               <td class="hourscol">4</td>
            </tr>
            <tr class="odd">
               <td class="codecol">Life and Physical Sciences Component Code 030<sup>1</sup></td>
               <td class="hourscol">4</td>
               <td class="codecol">Social and Behavioral Sciences Component Code 080</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td colspan="2">&nbsp;</td>
               <td class="codecol">Elective</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="plangridsum">
               <td>&nbsp;</td>
               <td class="hourscol">13</td>
               <td>&nbsp;</td>
               <td class="hourscol">16</td>
            </tr>
            <tr class="plangridyear">
               <th align="right" colspan="4">Junior</th>
            </tr>
            <tr class="plangridterm">
               <th align="right" style={{width: "40%"}}>First Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
               <th align="right" style={{width: "40%"}}>Second Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=CS%203339" title="CS&nbsp;3339" class="bubblelink code" onclick="return showCourse(this, 'CS 3339');">CS&nbsp;3339</a></td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=CS%203360" title="CS&nbsp;3360" class="bubblelink code" onclick="return showCourse(this, 'CS 3360');">CS&nbsp;3360</a></td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol"><a href="/search/?P=CS%203398" title="CS&nbsp;3398" class="bubblelink code" onclick="return showCourse(this, 'CS 3398');">CS&nbsp;3398</a></td>
               <td class="hourscol">3</td>
               <td class="codecol">CS Advanced Elective</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td class="codecol">Life and Physical Sciences<sup>1</sup></td>
               <td class="hourscol">4</td>
               <td class="codecol">CS Advanced Elective</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol"><a href="/search/?P=ENG%203303" title="ENG&nbsp;3303" class="bubblelink code" onclick="return showCourse(this, 'ENG 3303');">ENG&nbsp;3303</a><sup>2</sup></td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=MATH%203305" title="MATH&nbsp;3305" class="bubblelink code" onclick="return showCourse(this, 'MATH 3305');">MATH&nbsp;3305</a></td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td class="codecol">American History Component Code 060</td>
               <td class="hourscol">3</td>
               <td class="codecol">American History Component Code 060</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="plangridsum">
               <td>&nbsp;</td>
               <td class="hourscol">16</td>
               <td>&nbsp;</td>
               <td class="hourscol">15</td>
            </tr>
            <tr class="plangridyear">
               <th align="right" colspan="4">Senior</th>
            </tr>
            <tr class="plangridterm">
               <th align="right" style={{width: "40%"}}>First Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
               <th align="right" style={{width: "40%"}}>Second Semester</th>
               <th style={{width: "10%"}} class="hourscol">Hours</th>
            </tr>
            <tr class="even">
               <td class="codecol"><a href="/search/?P=CS%204371" title="CS&nbsp;4371" class="bubblelink code" onclick="return showCourse(this, 'CS 4371');">CS&nbsp;4371</a></td>
               <td class="hourscol">3</td>
               <td class="codecol">CS Advanced Elective</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol">CS Advanced Elective</td>
               <td class="hourscol">3</td>
               <td class="codecol">Math/Applied Math Minor</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="even">
               <td class="codecol">Math/Applied Math Minor</td>
               <td class="hourscol">3</td>
               <td class="codecol">Computer Science Project Course</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="odd">
               <td class="codecol">Creative Arts Component Code 050 [HUMA 1315]</td>
               <td class="hourscol">3</td>
               <td class="codecol">Elective</td>
               <td class="hourscol">2</td>
            </tr>
            <tr class="even">
               <td class="codecol">Elective</td>
               <td class="hourscol">3</td>
               <td class="codecol"><a href="/search/?P=POSI%202320" title="POSI&nbsp;2320" class="bubblelink code" onclick="return showCourse(this, 'POSI 2320');">POSI&nbsp;2320</a> (Government/Political Science Component Code 070 [TCCN GOVT 2305])</td>
               <td class="hourscol">3</td>
            </tr>
            <tr class="plangridsum">
               <td>&nbsp;</td>
               <td class="hourscol">15</td>
               <td>&nbsp;</td>
               <td class="hourscol">14</td>
            </tr>
            */}
            <tr class="plangridtotal lastrow">
               <td colspan="4">Total Hours: 120</td>
            </tr>
            </tbody>
         </table>
      </div>
    );
}