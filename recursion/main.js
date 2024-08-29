const data = {
  company: {
    name: "Tech Innovators Inc.",
    location: {
      country: "USA",
      state: "California",
      city: "San Francisco",
      address: {
        street: "123 Market St",
        zipcode: "94103",
      },
    },
    departments: [
      {
        name: "Engineering",
        head: {
          name: "John Doe",
          email: "johndoe@techinnovators.com",
          contact: {
            phone: "+1-555-1234",
            office: {
              building: "A",
              floor: 3,
              room: 305,
            },
          },
        },
        teams: [
          {
            name: "Frontend",
            lead: {
              name: "Alice Smith",
              skills: ["React", "JavaScript", "CSS"],
              projects: [
                {
                  name: "Website Redesign",
                  status: "In Progress",
                  tasks: [
                    {
                      title: "Landing Page",
                      assignedTo: {
                        developer: "Bob Johnson",
                        role: "Senior Developer",
                      },
                      dueDate: "2024-09-15",
                      priority: "High",
                    },
                    {
                      title: "Dashboard UI",
                      assignedTo: {
                        developer: "Eve Daniels",
                        role: "Junior Developer",
                      },
                      dueDate: "2024-09-20",
                      priority: "Medium",
                      subtasks: [
                        {
                          title: "User Profile Component",
                          status: "Pending",
                          assignedTo: "Eve Daniels",
                        },
                        {
                          title: "Settings Modal",
                          status: "Completed",
                          assignedTo: "Eve Daniels",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          },
          {
            name: "Backend",
            lead: {
              name: "Charlie Brown",
              skills: ["Node.js", "Express", "MongoDB"],
              projects: [
                {
                  name: "API Development",
                  status: "Completed",
                  tasks: [
                    {
                      title: "Authentication Service",
                      assignedTo: {
                        developer: "David Green",
                        role: "Developer",
                      },
                      dueDate: "2024-08-30",
                      priority: "High",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        name: "Marketing",
        head: {
          name: "Sarah Connor",
          email: "sconnor@techinnovators.com",
        },
        teams: [
          {
            name: "Content Creation",
            lead: {
              name: "Jane Wilson",
              projects: [
                {
                  name: "Product Launch Campaign",
                  status: "Planning",
                  tasks: [
                    {
                      title: "Social Media Posts",
                      assignedTo: "Emma White",
                      dueDate: "2024-09-10",
                      priority: "High",
                    },
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  },
};

const flattenObjWithArrays = (obj, prefix = null, result = {}) => {
  // const result = {};
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (!!obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenObjWithArrays(obj[key], `${prefix ? prefix + "_" : ""}${key}`, result);
    } else if (Array.isArray(obj[key])) {
      result[`${prefix ? prefix + "_" : ""}${key}`] = obj[key].map((item) => {
        if (!!item && typeof item === "object") {
            return flattenObjWithArrays(item)
        }
        return item;
        });
    } else {
      result[`${prefix ? prefix + "_" : ""}${key}`] = obj[key];
    }
  }
  return result;
};

console.log(flattenObjWithArrays(data));
