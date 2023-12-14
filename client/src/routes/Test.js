
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
      <tr class="plangridtotal lastrow">
         <td colspan="4">Total Hours: 126</td>
      </tr>
   </tbody>
</table>

      </div>
    );
}