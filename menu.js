function add_menu(){
    var script2 = document.createElement("script");
    script2.src = "node_modules/popper/popper.js";

    var script3 = document.createElement("script");
    script3.src = "node_modules/bootstrap/bootstrap.js";

    var script4 = document.createElement("script");
    script4.src = "fontawesome/solid.js";

    var script5 = document.createElement("script");
    script5.src = "fontawesome/fontawesome.js";

    document.getElementById("menu").innerHTML = 
        `<nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
            <a class = "navbar-brand" href = "#">
                <img src = "logo_agrotools.png" width = "30" height = "30" class = "d-inline-block align-top rounded" alt = ""> Desafio Agrotools
            </a>

            <button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#navbarNavAltMarkup" aria-controls = "navbarNavAltMarkup" aria-expanded = "false" aria-label = "Alterna navegação">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse" id = "navbarNavAltMarkup">
                <div class = "navbar-nav">
                    <a class = "nav-item nav-link active" href = "index.html"><i class = "fas fa-pencil-alt" aria-hidden = "true"></i> Cadastrar Questionário</a>
                    <a class = "nav-item nav-link" href = "respostas.html"><i class = "fa fa-folder-open" aria-hidden = "true"></i> Responder Questionários</a>
                </div>
            </div>
        </nav>`;
        
    document.head.appendChild(script2);
    document.head.appendChild(script3);
    document.head.appendChild(script4);
    document.head.appendChild(script5);
}