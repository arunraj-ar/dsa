const data = {
    company: {
      name: "Tech Innovators Inc.",
      founded: 2005,
      departments: {
        engineering: {
          name: "Engineering",
          teams: {
            frontend: {
              name: "Frontend Team",
              members: {
                alice: {
                  name: "Alice Johnson",
                  role: "Frontend Developer",
                  experienceYears: 5
                },
                bob: {
                  name: "Bob Smith",
                  role: "Senior Frontend Developer",
                  experienceYears: 8
                }
              }
            },
            backend: {
              name: "Backend Team",
              members: {
                charlie: {
                  name: "Charlie Brown",
                  role: "Backend Developer",
                  experienceYears: 4
                },
                diana: {
                  name: "Diana Green",
                  role: "Lead Backend Developer",
                  experienceYears: 9
                }
              }
            }
          }
        },
        marketing: {
          name: "Marketing",
          teams: {
            digital: {
              name: "Digital Marketing",
              members: {
                emma: {
                  name: "Emma Wilson",
                  role: "Digital Marketer",
                  experienceYears: 6
                },
                frank: {
                  name: "Frank Miller",
                  role: "SEO Specialist",
                  experienceYears: 7
                }
              }
            },
            content: {
              name: "Content Creation",
              members: {
                grace: {
                  name: "Grace Lee",
                  role: "Content Writer",
                  experienceYears: 5
                },
                hank: {
                  name: "Hank Adams",
                  role: "Content Strategist",
                  experienceYears: 8
                }
              }
            }
          }
        }
      },
      locations: {
        headquarters: {
          city: "San Francisco",
          state: "CA",
          address: "123 Tech Road"
        },
        branch: {
          city: "New York",
          state: "NY",
          address: "456 Innovation Ave"
        }
      }
    }
  };
  
const drawHierarchy = (obj, parentNode) => {
    const node = document.createElement('div');
    node.style.marginLeft = '20px';
    node.style.borderLeft = 'solid black 1px'
    node.style.width = 'fit-content'
    node.style.backgroundColor = 'white'
    const keys = Object.keys(obj);
    keys.forEach(key => {
        if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            const div = document.createElement('div');
            div.innerHTML = `<p><b>${key}:</b></p?`
            div.style.borderLeft = 'solid black 1px'
            div.style.borderBottom = 'solid black 1px'
            node.appendChild(div)
            parentNode.appendChild(node);
            drawHierarchy(obj[key], node, )
        } else {
            const div = document.createElement('div');
            div.innerHTML = `<p><b>${key}</b>:   &nbsp &nbsp ${obj[key]}</p>`
            div.style.borderLeft = 'solid black 1px'
            div.style.borderBottom = 'solid black 1px'
            node.appendChild(div)
            parentNode.appendChild(node);
        }
    })
}

const firstNode = document.createElement('div');
firstNode.style.backgroundColor = 'white'
drawHierarchy(data, firstNode);
document.body.appendChild(firstNode);
  