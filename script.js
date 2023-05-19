document.addEventListener("DOMContentLoaded", function() {
   const employees =[
      {
          "name": "John Doe",
          "designation": "Developer",
          "skills": ["JavaScript", "HTML", "CSS"],
          "projects": [
              {
                  "name": "Project A",
                  "team": ["John Doe", "Jane Smith", "David Johnson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              },
              {
                  "name": "Project B",
                  "team": ["John Doe", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "in progress" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              }
          ]
      },
      {
          "name": "Jane Smith",
          "designation": "Designer",
          "skills": ["Photoshop", "HTML", "CSS"],
          "projects": [
              {
                  "name": "Project A",
                  "team": ["John Doe", "Jane Smith", "David Johnson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              },
              {
                  "name": "Project C",
                  "team": ["Jane Smith", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "completed" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              }
          ]
      },
      {
          "name": "David Johnson",
          "designation": "Tester",
          "skills": ["Manual Testing"],
          "projects": [
              {
                  "name": "Project A",
                  "team": ["John Doe", "Jane Smith", "David Johnson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              },
              {
                  "name": "Project D",
                  "team": ["David Johnson", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              }
          ]
      },
      {
          "name": "Emily Brown",
          "designation": "QA Engineer",
          "skills": ["Manual Testing"],
          "projects": [
              {
                  "name": "Project B",
                  "team": ["John Doe", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "in progress" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              },
              {
                  "name": "Project C",
                  "team": ["Jane Smith", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "completed" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              },
              {
                  "name": "Project D",
                  "team": ["David Johnson", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              }
          ]
      },
      {
          "name": "Daniel Wilson",
          "designation": "Developer",
          "skills": ["JavaScript", "Python", "SQL"],
          "projects": [
              {
                  "name": "Project B",
                  "team": ["John Doe", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "in progress" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              },
              {
                  "name": "Project C",
                  "team": ["Jane Smith", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "completed" },
                      { "name": "Task 3", "status": "completed" }
                  ]
              },
              {
                  "name": "Project D",
                  "team": ["David Johnson", "Emily Brown", "Daniel Wilson"],
                  "tasks": [
                      { "name": "Task 1", "status": "completed" },
                      { "name": "Task 2", "status": "in progress" },
                      { "name": "Task 3", "status": "in progress" }
                  ]
              }
          ]
      }
  ];

   const projectsTable = document.getElementById("projectsTable");
   const projectsBody = document.getElementById("projectsBody");
   const nameFilter = document.getElementById("nameFilter");
   const designationFilter = document.getElementById("designationFilter");
   const skillFilter = document.getElementById("skillFilter");

   // Display employees in the table
   function displayEmployees() {
       let filteredEmployees = employees;

       // Apply filters
       const nameQuery = nameFilter.value.toLowerCase().trim();
       if (nameQuery !== "") {
           filteredEmployees = filteredEmployees.filter(employee => employee.name.toLowerCase().includes(nameQuery));
       }

       const designationQuery = designationFilter.value;
       if (designationQuery !== "") {
           filteredEmployees = filteredEmployees.filter(employee => employee.designation === designationQuery);
       }

       const skillQuery = skillFilter.value;
       if (skillQuery !== "") {
           filteredEmployees = filteredEmployees.filter(employee => employee.skills.includes(skillQuery));
       }

       // Generate table rows
       let projectsHTML = "";
       const projects = {};

       filteredEmployees.forEach(employee => {
           employee.projects.forEach(project => {
               if (!projects[project.name]) {
                   projects[project.name] = {
                       teamSize: project.team.length,
                       completedTasks: 0
                   };
               }
               if (project.tasks.some(task => task.status === "completed")) {
                   projects[project.name].completedTasks++;
               }
           });
       });

       for (const projectName in projects) {
           const project = projects[projectName];
           projectsHTML += `
               <tr>
                   <td>${projectName}</td>
                   <td>${project.teamSize}</td>
                   <td>${project.completedTasks}</td>
               </tr>
           `;
       }

       projectsBody.innerHTML = projectsHTML;
   }

   // Event listeners for filter changes
   nameFilter.addEventListener("input", displayEmployees);
   designationFilter.addEventListener("change", displayEmployees);
   skillFilter.addEventListener("change", displayEmployees);

   // Initial display
   displayEmployees();
});
