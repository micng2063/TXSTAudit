
export default function Test(){
    return(
        <div>
        <table class="sc_plangrid">
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
         <td class="codecol"><a href="/search/?P=US%201100" title="US&nbsp;1100" class="bubblelink code" onclick="return showCourse(this, 'US 1100');">US&nbsp;1100</a></td>
         <td class="hourscol">1</td>
         <td class="codecol"><a href="/search/?P=ENG%201310" title="ENG&nbsp;1310" class="bubblelink code" onclick="return showCourse(this, 'ENG 1310');">ENG&nbsp;1310</a> (Communication Component Code 010 [TCCN ENGL 1301])</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=MATH%202471" title="MATH&nbsp;2471" class="bubblelink code" onclick="return showCourse(this, 'MATH 2471');">MATH&nbsp;2471</a> (Mathematics Component Code 020 [TCCN MATH 2413])</td>
         <td class="hourscol">4</td>
         <td class="codecol"><a href="/search/?P=ENGR%202301" title="ENGR&nbsp;2301" class="bubblelink code" onclick="return showCourse(this, 'ENGR 2301');">ENGR&nbsp;2301</a> (TCCN ENGR 2301)</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=PHYS%201430" title="PHYS&nbsp;1430" class="bubblelink code" onclick="return showCourse(this, 'PHYS 1430');">PHYS&nbsp;1430</a> (Life and Physical Sciences Component Code 030 [TCCN PHYS 2425])</td>
         <td class="hourscol">4</td>
         <td class="codecol"><a href="/search/?P=MATH%202473" title="MATH&nbsp;2473" class="bubblelink code" onclick="return showCourse(this, 'MATH 2473');">MATH&nbsp;2473</a> (Component Area Option Code 090/092 [TCCN MATH 2415])</td>
         <td class="hourscol">4</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=ENGR%201304" title="ENGR&nbsp;1304" class="bubblelink code" onclick="return showCourse(this, 'ENGR 1304');">ENGR&nbsp;1304</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CHEM%201335" title="CHEM&nbsp;1335" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1335');">CHEM&nbsp;1335</a> (Life and Physical Sciences Component Code 030 [TCCN CHEM 1309 or 1409])</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=CE%201210" title="CE&nbsp;1210" class="bubblelink code" onclick="return showCourse(this, 'CE 1210');">CE&nbsp;1210</a></td>
         <td class="hourscol">2</td>
         <td class="codecol"><a href="/search/?P=CHEM%201135" title="CHEM&nbsp;1135" class="bubblelink code" onclick="return showCourse(this, 'CHEM 1135');">CHEM&nbsp;1135</a> (TCCN CHEM 1109 [taken with TCCN CHEM 1309])</td>
         <td class="hourscol">1</td>
      </tr>
      <tr class="odd">
         <td colspan="2">&nbsp;</td>
         <td class="codecol"><a href="/search/?P=CS%201342" title="CS&nbsp;1342" class="bubblelink code" onclick="return showCourse(this, 'CS 1342');">CS&nbsp;1342</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="plangridsum">
         <td>&nbsp;</td>
         <td class="hourscol">14</td>
         <td>&nbsp;</td>
         <td class="hourscol">17</td>
      </tr>
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
         <td class="codecol"><a href="/search/?P=MATH%203323" title="MATH&nbsp;3323" class="bubblelink code" onclick="return showCourse(this, 'MATH 3323');">MATH&nbsp;3323</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=PHIL%201320" title="PHIL&nbsp;1320" class="bubblelink code" onclick="return showCourse(this, 'PHIL 1320');">PHIL&nbsp;1320</a> (Language, Philosophy, and Culture Component Code 040 [TCCN PHIL 2306])</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=PHYS%202425" title="PHYS&nbsp;2425" class="bubblelink code" onclick="return showCourse(this, 'PHYS 2425');">PHYS&nbsp;2425</a> (Component Area Option Code 090/093 [TCCN PHYS 2426])</td>
         <td class="hourscol">4</td>
         <td class="codecol"><a href="/search/?P=MATH%203376" title="MATH&nbsp;3376" class="bubblelink code" onclick="return showCourse(this, 'MATH 3376');">MATH&nbsp;3376</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=ENGR%203311" title="ENGR&nbsp;3311" class="bubblelink code" onclick="return showCourse(this, 'ENGR 3311');">ENGR&nbsp;3311</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=ENGR%203373" title="ENGR&nbsp;3373" class="bubblelink code" onclick="return showCourse(this, 'ENGR 3373');">ENGR&nbsp;3373</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol">Basic Science Elective</td>
         <td class="hourscol">4</td>
         <td class="codecol"><a href="/search/?P=CE%202340" title="CE&nbsp;2340" class="bubblelink code" onclick="return showCourse(this, 'CE 2340');">CE&nbsp;2340</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol">Communication Component Code 010</td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CE%202350" title="CE&nbsp;2350" class="bubblelink code" onclick="return showCourse(this, 'CE 2350');">CE&nbsp;2350</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td colspan="2">&nbsp;</td>
         <td class="codecol"><a href="/search/?P=CE%203320" title="CE&nbsp;3320" class="bubblelink code" onclick="return showCourse(this, 'CE 3320');">CE&nbsp;3320</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="plangridsum">
         <td>&nbsp;</td>
         <td class="hourscol">17</td>
         <td>&nbsp;</td>
         <td class="hourscol">18</td>
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
         <td class="codecol">American History Component Code 060</td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=ECO%202301" title="ECO&nbsp;2301" class="bubblelink code" onclick="return showCourse(this, 'ECO 2301');">ECO&nbsp;2301</a> (Social and Behavioral Sciences Component Code 080 [TCCN ECON 1301])</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=ENGR%203380" title="ENGR&nbsp;3380" class="bubblelink code" onclick="return showCourse(this, 'ENGR 3380');">ENGR&nbsp;3380</a></td>
         <td class="hourscol">3</td>
         <td class="codecol">American History Component Code 060</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=IE%203320" title="IE&nbsp;3320" class="bubblelink code" onclick="return showCourse(this, 'IE 3320');">IE&nbsp;3320</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CE%203310" title="CE&nbsp;3310" class="bubblelink code" onclick="return showCourse(this, 'CE 3310');">CE&nbsp;3310</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=CE%203330" title="CE&nbsp;3330" class="bubblelink code" onclick="return showCourse(this, 'CE 3330');">CE&nbsp;3330</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CE%203331" title="CE&nbsp;3331" class="bubblelink code" onclick="return showCourse(this, 'CE 3331');">CE&nbsp;3331</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=CE%203350" title="CE&nbsp;3350" class="bubblelink code" onclick="return showCourse(this, 'CE 3350');">CE&nbsp;3350</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CE%203360" title="CE&nbsp;3360" class="bubblelink code" onclick="return showCourse(this, 'CE 3360');">CE&nbsp;3360</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="plangridsum">
         <td>&nbsp;</td>
         <td class="hourscol">15</td>
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
         <td class="codecol"><a href="/search/?P=CE%204370" title="CE&nbsp;4370" class="bubblelink code" onclick="return showCourse(this, 'CE 4370');">CE&nbsp;4370</a></td>
         <td class="hourscol">3</td>
         <td class="codecol">Creative Arts Component Code 050 [HUMA 1315]</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol"><a href="/search/?P=CE%204390" title="CE&nbsp;4390" class="bubblelink code" onclick="return showCourse(this, 'CE 4390');">CE&nbsp;4390</a></td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=POSI%202320" title="POSI&nbsp;2320" class="bubblelink code" onclick="return showCourse(this, 'POSI 2320');">POSI&nbsp;2320</a> (Government/Political Science Component Code 070 [TCCN GOVT 2305])</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol"><a href="/search/?P=POSI%202310" title="POSI&nbsp;2310" class="bubblelink code" onclick="return showCourse(this, 'POSI 2310');">POSI&nbsp;2310</a> (Government/Political Science Component Code 070 [TCCN GOVT 2306])</td>
         <td class="hourscol">3</td>
         <td class="codecol"><a href="/search/?P=CE%204391" title="CE&nbsp;4391" class="bubblelink code" onclick="return showCourse(this, 'CE 4391');">CE&nbsp;4391</a></td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="odd">
         <td class="codecol">CE Infrastructure Design Elective</td>
         <td class="hourscol">3</td>
         <td class="codecol">CE Technical Elective II</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="even">
         <td class="codecol">CE Technical Elective I</td>
         <td class="hourscol">3</td>
         <td class="codecol">CE Technical Elective III</td>
         <td class="hourscol">3</td>
      </tr>
      <tr class="plangridsum">
         <td>&nbsp;</td>
         <td class="hourscol">15</td>
         <td>&nbsp;</td>
         <td class="hourscol">15</td>
      </tr>
      <tr class="plangridtotal lastrow">
         <td colspan="4">Total Hours: 126</td>
      </tr>
   </tbody>
</table>

      </div>
    );
}