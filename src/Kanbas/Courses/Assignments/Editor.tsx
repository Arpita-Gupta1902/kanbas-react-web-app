export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
        <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br />
        <br></br>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        
        <textarea id="wd-description" rows={5} cols={60}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. 
          The landing page should include the following: Your full name and section, links to each of the lab assignments, 
          a link to the Kanbas application, and links to all relevant source code repositories. The Kanbas application should 
          include a link to navigate back to the landing page.
        </textarea>
        <br /><br />
        <table style={{ width: '100%' }}>
        <tbody>
          <tr>
            <td align="right" valign="top" style={{ width: '30%' }}>
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" type="number" value={100} />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Numbers</option>
              </select>
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
              <br />
              <label>Online Entry Options</label><br />
              <input type="checkbox" id="wd-text-entry" /> <label htmlFor="wd-text-entry">Text Entry</label><br />
              <input type="checkbox" id="wd-website-url" /> <label htmlFor="wd-website-url">Website URL</label><br />
              <input type="checkbox" id="wd-media-recordings" /> <label htmlFor="wd-media-recordings">Media Recordings</label><br />
              <input type="checkbox" id="wd-student-annotation" /> <label htmlFor="wd-student-annotation">Student Annotation</label><br />
              <input type="checkbox" id="wd-file-upload" /> <label htmlFor="wd-file-upload">File Uploads</label><br /><br />
            </td>
          </tr>
          <tr>
          <td align="right" valign="top" style={{ width: '30%' }}>
                <label htmlFor="wd-points">Assign</label>
            </td>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <input id="wd-assign-to" value="Everyone" />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Due</label>
            </td>
          </tr>
          <input id="wd-due-date" type="date" value="2024-05-13" />
          <tr>
            <td valign="top" style={{width:20}}>
              <label htmlFor="wd-assign-to">Available from</label>
              <input id="wd-available-from" type="date" value="2024-05-06" />
            </td>
            <td valign="top" style={{width:20}}>
              <label htmlFor="wd-assign-to">Until</label>
              <input id="wd-available-until" type="date" value="2024-05-20" />
            </td>
          </tr>
        </tr>
        </tbody>
      </table>
      <hr />
      <div style={{ marginLeft: '295px', display: 'flex', gap: '5px' }}>
        <button>Cancel</button>
        <button>Save</button>
        </div>
      </div>
    );
  }
  