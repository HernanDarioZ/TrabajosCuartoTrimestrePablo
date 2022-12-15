<template>
    <div>

       

        <div>
            <link rel="shortcut icon" href="img/favicon.png" type="image/x-icon">

<!-- Google Web Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap"
    rel="stylesheet">

<!-- Icon Font Stylesheet -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

<!-- Libraries Stylesheet -->
<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

<!-- Customized Bootstrap Stylesheet -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Template Stylesheet -->
<link href="css/style.css" rel="stylesheet">
        </div>

       

        <div class="container-fluid">
        <div class="row h-100 align-items-center justify-content-center" style="min-height: 100vh;"
            id="fondo_inicio_sesion_administrador">
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div class="rounded p-4 p-sm-5 my-4 mx-3 border" id="contenedor_inicio">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <a class="navbar-brand d-flex justify-content-center fw-bold fs-3"> 
                        <router-link to="/Conductores"><img src="../assets/Img/Logofin.png" class="w-75 Moverimg" ></router-link>
                        </a>
                        
                    </div>
                    <form class="row g-3 needs-validation" novalidate autocomplete="off">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                                required>
                            <label for="floatingInput">Correo Electronico</label>
                            <div class="valid-feedback">
                                Se ve bien!
                            </div>
                            <div class="invalid-feedback">
                                Porfavor ingresa el correo Electronico.
                            </div>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Contraseña"
                                required>
                            <label for="floatingPassword">Contraseña</label>
                            <div class="valid-feedback">
                                Se ve bien!
                            </div>
                            <div class="invalid-feedback">
                                Porfavor ingresa la contraseña.
                            </div>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="Boton">Iniciar
                                Sesión</button>
                            <p class="text-center mb-0">Administrador TRAMO</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Iniciar Sesión End -->

    </div>

</template>
<script>

export default {
    name:"CerrarSesion",

};
</script>

<style scoped >



/* INICIO SESIÓN ADMINISTRADOR */

#fondo_inicio_sesion_administrador{
    background: var(--fondo);
    color: #000000;
}

#contenedor_inicio {
    background: #ffffffdc;
    -webkit-box-shadow: 0px 14px 15px 5px rgba(144,141,137,0.91); 
    box-shadow: 0px 14px 15px 5px rgba(144,141,137,0.91);
}

#floatingInput{
    background: var(--fondo);
}

#floatingPassword{
    background: var(--fondo);
}

.Boton{
    text-align: center;
    background-color: #161627;
    color: white;
    width: 300px;
    margin-left: -3%;
    
}

.Moverimg{
    margin-left: 13%
}

</style>