window.addEventListener('DOMContentLoaded', (evnt) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml =
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date</th>" +
        "<th>Actions</th>";
    const innerHtml = `${headerHtml}
        <tr>
            <td><img class="profile" src="Media/emp1.png" alt=""></td>
            <td>Vaibhav Raut</td>
            <td>Male</td>
            <td><div class="dept-label">Finance</div><div class="dept-label">Engineer</div></td>
            <td>1000000</td>
            <td>5 Feb 2024</td>
            <td>
                <img src="Media/delete-black-18dp.svg" alt="delete" id="1">
                <img src="Media/create-black-18dp.svg" alt="edit" id="1">
            </td>      
        </tr>
        `;
    document.querySelector('#display').innerHTML = innerHtml;

};