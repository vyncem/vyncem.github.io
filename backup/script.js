var data = [
  {
    name: "Aer Lingus",
    briefs: [
      {
        name: "Christmas",
        dataCreated: "04/16/19",
        status: 'lost',
        dueDate: '02/05/19'
      },
      {
        name: "Dubai",
        dataCreated: "05/09/19",
        status: 'in progress',
        dueDate: '02/05/18'
      },
      {
        name: "lanzarote",
        dataCreated: "12/05/19",
        status: "in progress",
        dueDate: "25/02/19"
      },
      {
        name: "uk",
        dataCreated: "13/03/19",
        status: "complete",
        dueDate: "08/07/19"
      }
      
    ]
  },
  {
    name: 'Colgate',
    briefs: [
      {
        name: "christmas",
        dataCreated: "07/01/19",
        status: "complete",
        dueDate: "18/02/19"
      },
      {
        name: "kids",
        dataCreated: "19/11/19",
        status: "in progress",
        dueDate: "18/02/19"
      } 
    ]

          }
       
      ];
var displayData = function(){
  var html = '';
  for(var i=0; i<data.length;i++){
    html += '<table>';
    
    html += `<tr>
        <th>` + data[i].name + `</th>
       <th>date created</th> <th>status</th> <th>due date</th>
      </tr>`;

    for(var j=0;j<data[i].briefs.length;j++){
      html+=`<tr>
        <td>${data[i].briefs[j].name}</td>
        <td>${data[i].briefs[j].dataCreated}</td>
        <td>${data[i].briefs[j].status}</td>
        <td>${data[i].briefs[j].dueDate}</td>
      </tr>`;
    }
    ;
   // html += `<td>
   // <button>&#128393;</button> 
   // <button>&#128465;</button>
   // </td>`;
    html+= '</table>';

    html += '<br>'
  }

  var body = document.getElementById("myClientTables");
  body.innerHTML = html;
};

                               


