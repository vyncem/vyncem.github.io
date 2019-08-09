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

var selectedBrief = {};


var deleteRow = function (table, row) {
  
  alert(`Are you sure you want to delete ${data[table].briefs[row].name} brief?`);
  data[table].briefs.splice(row, 1);
  displayData();
}

var editeRow = function (table, row) {
  selectedBrief = data[table].briefs[row];
  localStorage.setItem("name",selectedBrief.name);
  localStorage.setItem("status", selectedBrief.status);
  localStorage.setItem("dueDate", selectedBrief.dueDate)
  window.location.href = './form.html';
}

var displayBrief = function(){
  var name = localStorage.getItem("name");
  var status = localStorage.getItem("status");
  var dueDate = localStorage.getItem("dueDate");
  document.getElementById("name").value = name;
  document.getElementById("status").value = status;
  document.getElementById("dueDate").value = dueDate;
}


var displayData = function () {
  var html = '';
  for (var i = 0; i < data.length; i++) {
    html += '<table>';

    html += `<tr>
        <th>` + data[i].name + `</th>
       <th>date created</th> <th>status</th> <th>due date</th> <th>    </th>
      </tr>`;

    for (var j = 0; j < data[i].briefs.length; j++) {
      html += `<tr>
        <td>${data[i].briefs[j].name}</td>
        <td>${data[i].briefs[j].dataCreated}</td>`
      if (data[i].briefs[j].status == "lost") {
        html += ` <td><span class="lost"></span>${data[i].briefs[j].status}</td>`
      }
      if (data[i].briefs[j].status == "in progress") {
        html += ` <td><span class="in-progress"></span>${data[i].briefs[j].status}</td>`
      }
      if  (data[i].briefs[j].status == "complete") {
        html += ` <td><span class="complete"></span>${data[i].briefs[j].status}</td>`
      }
      html += `<td>${data[i].briefs[j].dueDate}</td>
        <td align="center">
        <div class="container">
          <button class="submit-btn" onclick="editeRow(${i}, ${j})">Edit</button> 
          <button class="submit-btn" onclick="deleteRow(${i}, ${j})">Delete</button>
        </div>
    </td>
      </tr>`;
    }
    ;
    html += '</table>';

    html += '<br>'
  }


  var body = document.getElementById("myClientTables");
  body.innerHTML = html;
};



