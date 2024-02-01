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
    let innerHTML = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList) {
        innerHTML = `${innerHTML}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>Male</td>
            <td><div class="dept-label">${empPayrollData._department[0]}</div><div class="dept-label">${empPayrollData._department[1]}</div></td>
            <td>${empPayrollData._salary} </td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img name="${empPayrollData._id}" src="Media/delete-black-18dp.svg" alt="delete" id="1">
                <img name="${empPayrollData._id}" src="Media/create-black-18dp.svg" alt="edit" id="1">
            </td>      
        </tr>
        `;

    }
    document.querySelector('#display').innerHTML = innerHTML

};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Vaibhav Raut',
            _gender: 'male',
            _department: [
                'Finance',
                'Engineer'
            ],
            _salary: '1000000',
            _startDate: '5 Feb 2024',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Media/emp1.png'
        },

        {
            _name: 'Pranav Raut',
            _gender: 'male',
            _department: [
                'Sales',
                'HR'
            ],
            _salary: '1000000',
            _startDate: '1 Feb 2020',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: 'Media/emp4.png'
        }
    ];

    return empPayrollListLocal;
}