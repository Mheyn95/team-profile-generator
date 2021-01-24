const generateManager = (manager) => {
  return `
  <div class="col-sm-4">
    <div class="card m-3">
      <div class="card-body">
        <h3 class="card-title">${manager.name}</h3>
        <h4 class="card-subtitle mb-2 text-muted">${manager.role}</h4>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> Employee ID: ${manager.id}</li>
          <li class="list-group-item">
            Email: <a href="mailto:${manager.email}">${manager.email}</a>
          </li>
          <li class="list-group-item">
            Office Number: ${manager.officeNumber}
          </li>
        </ul>
    </div>
    </div>
  </div>`;
};

const generateEmployeeHtml = (employees) => {
  let arrayHtml = [];
  let engineers = employees.filter((employee) => employee.role === "Engineer");
  let interns = employees.filter((employee) => employee.role === "Intern");
  for (let i = 0; i < engineers.length; i++) {
    let html = `
    <div class="col-sm-4">
    <div class="card m-3">
    <div class="card-body">
      <h3 class="card-title">${engineers[i].name}</h3>
      <h4 class="card-subtitle mb-2 text-muted">${engineers[i].role}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Employee ID: ${engineers[i].id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${engineers[i].email}">${engineers[i].email}</a>
        </li>
        <li class="list-group-item">
        GitHub: <a href="${engineers[i].github}">${engineers[i].github}</a>
        </li>
      </ul>
    </div>
    </div>
    </div>`;

    arrayHtml.push(html);
  }
  for (let i = 0; i < interns.length; i++) {
    let html = `
    <div class="col-sm-4">
    <div class="card m-3">
    <div class="card-body">
      <h3 class="card-title">${interns[i].name}</h3>
      <h4 class="card-subtitle mb-2 text-muted">${interns[i].role}</h4>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"> Employee ID: ${interns[i].id}</li>
        <li class="list-group-item">
          Email: <a href="mailto:${interns[i].email}">${interns[i].email}</a>
        </li>
        <li class="list-group-item">
        School: ${interns[i].school}
        </li>
      </ul>
    </div>
    </div>
    </div>`;

    arrayHtml.push(html);
  }
  arrayHtml = arrayHtml.join("");
  return arrayHtml;
};

module.exports = (manager, employees) => {
  return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" integrity="sha512-UyNhw5RNpQaCai2EdC+Js0QL4RlVmiq41DkmCJsRV3ZxipG2L0HhTqIf/H9Hp8ez2EnFlkBnjRGJU2stW3Lj+w==" crossorigin="anonymous" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
    </head>
    <body>
      <main>
      <section class="my-3" id="portfolio">
      <h2 class="text-dark text-center bg-primary p-2 display-inline-block">My Team</h2>
      <div class="row justify-content-center">
        ${generateManager(manager)}
        ${generateEmployeeHtml(employees)}
      </div>
      </section>
      </main>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>`;
};
