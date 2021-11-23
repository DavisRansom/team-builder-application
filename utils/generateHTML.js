//this is where I will put the data from the user's responses to the questions onto the HTML page
function generateHTML(team){
    var html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Tech Team</title>
        <style>
        

        
        </style>
      </head>
      <body>
      <header>
        <h1>Tech Team</h1>
      </header>

      `;
    
    for (let emp of team){
        let role = emp.getRole();
        html+=`
            <section class="${role}">
                <h3>${role}</h3>
                <h2>${emp.getName()}</h2>
                <p>ID: ${emp.getId()}</p>
                <p>Email: ${emp.getEmail()}</p>
        `;
    }

    html+=`</body>
    </html>`;
    return html;
}


module.exports = generateHTML;