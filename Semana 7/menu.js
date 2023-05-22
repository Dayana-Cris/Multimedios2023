cargarMenu.innerHTML +=`
<nav class="navbar navbar-expand-lg navbar-expand-xl navbar-expand-md menu">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarTooglerDemo01" aria-controls="navbarTooglerDemo01" aria-expanded="false"
        aria-label="Toogle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="ms-4 me-3">
        <a class="navbar-brand" href="Index.html" title="Ir a página Principal">
            <img src="img/Logo_Dorado.png" alt="Logo" width="170px" height="75px">
        </a>
    </div>

    <div class="collapse navbar-collapse" id="navbarTooglerDemo01">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link fw-bold text-white" href="https://paginas-web-cr.com/ApiPHP/">API</a>
            </li>

            <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Estudiantes</a>
                <div class="dropdown-menu bg-dark">
                    <a class="dropdown-item text-white" href="listaEstudiantes.html">Lista Estudiantes</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="crearEstudiantes.html">Agregar Estudiante</a>
                </div>
            </li>

            <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Profesores</a>
                <div class="dropdown-menu bg-dark">
                    <a class="dropdown-item text-white" href="listaProfesores.html">Lista Profesor</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="crearProfesor.html">Agregar Profesor</a>
                </div>
            </li>

            <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Grupos</a>
                <div class="dropdown-menu bg-dark">
                    <a class="dropdown-item text-white" href="listaGrupos.html">Lista Grupos</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="crearGrupo.html">Agregar Grupo</a>
                </div>
            </li>

            <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle fw-bold" href="#" data-bs-toggle="dropdown" role="button"
               aria-haspopup="true" aria-expanded="false">Cursos</a>
                <div class="dropdown-menu bg-dark">
                    <a class="dropdown-item text-white" href="listaCursos.html">Lista Cursos</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-white" href="crearCurso.html">Agregar Curso</a>
                </div>
            </li>
        </ul>
    </div>
</nav>
`;   