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
        
            body {
                margin: 0;
                background-color: cornsilk;
                font-family: sans-serif;
                text-align: center;
            }   
            header {
                background-color: navy;
                color: white;
                padding: 5px;
                margin-bottom: 25px;
                box-shadow: 0 2px 5px black;
            }
            section {
                display: inline-block;
                vertical-align: top;
                margin: 5px;
                padding: 10px;
                border-radius: 10px;
                width: 250px;
            }
            .Manager{
                background-color: lightskyblue;
            }
            .Engineer{
                background-color: lightcyan;
            }
            .Intern{
                background-color: paleturquoise;
            }

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
                <p><Email: ${emp.getEmail()}</p>
        `;
        if(role==="Manager")html+=`<p>Office Number: ${emp.getOfficeNumber()}</p>`;
        else if(role==="Engineer")html+=`<p>Github: ${emp.getGithub()}</p>`;
        else if(role==="Intern")html+=`<p>School: ${emp.getSchool()}</p>`;

        html+="</section>";
    }

    html+=`</body>
    </html>`;
    return html;
}


module.exports = generateHTML;