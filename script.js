// script.js
document.addEventListener('DOMContentLoaded', function() {
    const addEmployeeBtn = document.getElementById('add-employee-btn');
    const employeeFormContainer = document.getElementById('employee-form-container');
    const employeeForm = document.getElementById('employee-form');
    const cancelBtn = document.getElementById('cancel-btn');
    const employeeList = document.getElementById('employee-list');

    let employees = [];

    addEmployeeBtn.addEventListener('click', function() {
        employeeFormContainer.style.display = 'block';
        addEmployeeBtn.style.display = 'none';
    });

    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addEmployee();
    });

    cancelBtn.addEventListener('click', function() {
        employeeFormContainer.style.display = 'none';
        addEmployeeBtn.style.display = 'block';
        employeeForm.reset();
    });

    function addEmployee() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const salary = parseFloat(document.getElementById('salary').value);

        if (firstName && lastName && salary) {
            employees.push({ firstName, lastName, salary });
            displayEmployees();
            computeAndLogData();

            employeeFormContainer.style.display = 'none';
            addEmployeeBtn.style.display = 'block';
            employeeForm.reset();
        }
    }

    function displayEmployees() {
        employees.sort((a, b) => a.lastName.localeCompare(b.lastName));
        employeeList.innerHTML = '';
        employees.forEach(employee => {
            let employeeRow = document.createElement('tr');
            employeeRow.innerHTML = `
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>$${employee.salary.toFixed(2)}</td>
            `;
            employeeList.appendChild(employeeRow);
        });
    }

    function computeAndLogData() {
        let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
        let averageSalary = totalSalary / employees.length;
        let highestSalary = Math.max(...employees.map(employee => employee.salary));
        let lowestSalary = Math.min(...employees.map(employee => employee.salary));

        console.log(`Total Salary: $${totalSalary.toFixed(2)}`);
        console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
        console.log(`Highest Salary: $${highestSalary.toFixed(2)}`);
        console.log(`Lowest Salary: $${lowestSalary.toFixed(2)}`);
    }
});
