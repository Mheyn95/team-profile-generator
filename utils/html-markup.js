const generateManager = (manager) => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${manager.name}</h3>
            <li>${manager.id}</li>
            <li>${manager.email}</li>
            <li>${manager.officeNumber}</li>
          </div>`;
};

const generateEmployeeHtml = (employees) => {
  let arrayHtml = [];
  for (let i = 0; i < employees.length; i++) {
    const html = `
         <div class="col-12 mb-2 bg-dark text-light p-3">
         <h3 class="portfolio-item-title text-light">${employees[i].name}</h3>
         <li>${employees[i].id}</li>
         <li>${employees[i].email}</li>
         <li>${employees[i].officeNumber}</li>
       </div>`;
    arrayHtml.push(html);
  }
  arrayHtml = arrayHtml.join("");
  return arrayHtml;
};

const generateEmployees = (employees) => {
  return `
    <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">
      ${generateEmployeeHtml(employees)}`;
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
        ${generateManager(manager)}
        ${generateEmployees(employees)}
      </main>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </body>`;
};
