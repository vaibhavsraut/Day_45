let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    createInnerHtml();
    document.querySelector('.emp-count').textContent = empPayrollList.length;
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem("EmployeePayrollList")) : [];
};

const createInnerHtml = () => {
    const headerHtml =
        "<th></th>" +
        "<th>Name</th>" +
        "<th>Gender</th>" +
        "<th>Department</th>" +
        "<th>Salary</th>" +
        "<th>Start Date</th>" +
        "<th>Actions</th>";
    let innerHTML = `${headerHtml}`;
    
    for(const empPayrollData of empPayrollList) {
        const formattedStartDate = new Date(empPayrollData._startDate).toLocaleDateString('en-US');
        innerHTML = `${innerHTML}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._departments)}</td>
            <td>${empPayrollData._salary} </td>
            <td>${formattedStartDate}</td>
            <td>
                <img name="${empPayrollData._id}" src="Media/delete-black-18dp.svg" alt="delete" id="1">
                <img name="${empPayrollData._id}" src="Media/create-black-18dp.svg" alt="edit" id="1">
            </td>      
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHTML;
};



const getDeptHtml = (deptList) => {
    let deptHtml = '';
    if (Array.isArray(deptList)) {
        for (const dept of deptList) {
            deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`;
        }
    }
    return deptHtml;
};