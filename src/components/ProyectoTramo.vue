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


<!-- Libraries Stylesheet -->
<link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
<link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />



    </div>

    
    <!-- Sidebar Start -->
    <div class="sidebar pe-4 borders pb-3">
        <nav class="navbar bg-white navbar-dark">
            <a class="navbar-brand d-flex align-items-center fw-bold fs-3 pb-3 ps-3" href="index.html" id="tramos_sas">
                <img src="../assets/Img/Logofin.png" class="w-75" alt="">
            </a>
            <div class="navbar-nav w-100">
              <router-link to="/Conductores" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-person-vcard-fill -alt me-2"></i>Conductores</router-link>
              <router-link to="/Solicitudes" class="nav-item nav-link   text-dark fw-bold "><i class="fa fa-users me-2"></i>Solicitudes</router-link>
              <router-link to="/DatosConductores" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-clipboard-data me-2"></i>DatosConductores</router-link>
              <router-link to="/DatosCliente" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-file-earmark-bar-graph me-2"></i>DatosClientes</router-link>
              <router-link to="/Historial" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-clock-history me-2"></i>Historial</router-link>
              <router-link to="/Pqrs" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-person-fill-exclamation me-2"></i>PQRS</router-link>
              <router-link to="/CerrarSesion" class="nav-item nav-link   text-dark fw-bold "><i class="bi bi-box-arrow-left me-2"></i>Cerrar Sesion</router-link>
             
           
             
              
              
                
                
                
                
            </div>
        </nav>
    </div>
    <div class="content">
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand bg-navcolor navbar-dark sticky-top px-4 py-0">

        <a
          href="#"
          class="sidebar-toggler flex-shrink-0"
        >
          <i class="fa fa-bars text-white"></i>
          </a>
          <div class="navbar-nav align-items-center ms-auto">
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <i class="fa fa-bell me-lg-2 text-white"></i>
                <span class="d-none d-lg-inline-flex">Notificaciones</span>
                </a>
                <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                  <a
                    href="#"
                    class="dropdown-item"
                  >
                    <h6 class="fw-normal mb-0">Perfil actualizado</h6>
                    <small>15 minutes ago</small>
                    </a>
                    <hr class="dropdown-divider">
                    <a
                      href="#"
                      class="dropdown-item"
                    >
                      <h6 class="fw-normal mb-0">Nuevo usuario agregado</h6>
                      <small>15 minutes ago</small>
                      </a>
                      <hr class="dropdown-divider">
                      <a
                        href="#"
                        class="dropdown-item"
                      >
                        <h6 class="fw-normal mb-0">Contraseña cambiada</h6>
                        <small>15 minutes ago</small>
                        </a>
                        <hr class="dropdown-divider">
                        <a
                          href="#"
                          class="dropdown-item text-center"
                        >Ver todas las notificaciones</a>
                </div>
            </div>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  class="rounded-circle me-lg-2"
                  src="../assets/Img/user.jpg"
                  alt=""
                  style="width: 40px; height: 40px;"
                >
                  <span class="d-none d-lg-inline-flex">Carlos Noguera</span>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                    <a
                      href=""
                      class="dropdown-item"
                    >Mi perfil</a>
                      <a
                        href=""
                        class="dropdown-item"
                      >Cerrar sesion</a>
                  </div>
            </div>
          </div>
      </nav>

    </div>
  </div>

</template>
 
<script>
export default {
  name: "ProyectoTramo"
};

(function ($) {
    "use strict";

    (() => {
        'use strict'
      
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')
      
        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
      
            form.classList.add('was-validated')
          }, false)
        })
      })()

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


    
    
})


</script>
  
  
    
  


<style scoped>
/********** Template CSS **********/
:root {
    --primary: #232837;
    --secondary: #232837;
    --light: #6C7293;
    --dark: #000000;
    --white: rgb(255, 255, 255);
    --navcolor: #161627;




        --navegador-item: #fff;
        --cornflower-blue: #816bfc;
        --white: #ffffff;
        --fondo:rgba(242, 242, 242, 0.953);
        --blue: #2706fc;
        --brink-pink: #bec6dff8;
        --tulip-tree: #000000;
        --slate-gray: #dddfe293;
        --botticelli: #c8d0e2;
        --manhattan: #f2c19f;
        --jordy-blue: #9abef8;

}

.bg-navcolor{
    background-color: var(--navcolor);
    color:white;
}
.back-to-top {
    position: fixed;
    display: none;
    right: 45px;    
    bottom: 45px;
    z-index: 99;
}
/*** Button ***/
.btn {
    transition: .5s;
}

.btn-square {
    width: 38px;
    height: 38px;
}

.btn-sm-square {
    width: 32px;
    height: 32px;
}

.btn-lg-square {
    width: 48px;
    height: 48px;
}

.btn-square,
.btn-sm-square,
.btn-lg-square {
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: normal;
    border-radius: 50px;
}

/*** Layout ***/
.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 100vh;
    overflow-y: auto;
    background: var(--white);
    transition: 0.5s;
    z-index: 9999;
}

.borders{
 
 padding-right: 20px;
 box-shadow:
      inset 0 -3em 3em rgba(0,0,0,0.1),
            0 0  0 2px rgb(255,255,255),
            0.3em 0.3em 1em rgba(0,0,0,0.3);
}

.content {
    margin-left: 300px;
    min-height: 100vh;
    background: var(--fondo);
    transition: 0.5s;
}

@media (min-width: 992px) {
    .sidebar {
        margin-left: 0;
    }

    .sidebar.open {
        margin-left: -300px;  
    }

    .content {
        width: calc(100% - 300px);
    }

    .content.open {
        width: 100%;
        margin-left: 0;
    }
}

@media (max-width: 991.98px) {
    .sidebar {
        margin-left: -300px;
    }

    .sidebar.open {
        margin-left: 0;
        margin-top: 66px;
    }

    .content {
        width: 100%;
        margin-left: 0;
    }
}

/*** Navbar ***/


.navbar{
  background-color:#161627;
}
.sidebar .navbar .navbar-nav .nav-link {
  padding: 7px 20px;
  color: var(--light);
  font-weight: 500;
  border-left: 3px solid var(--white);
  border-radius: 0 30px 30px 0;
  outline: none;
}

.sidebar .navbar .navbar-nav .nav-link:hover,
.sidebar .navbar .navbar-nav .nav-link.active {
  color: var(--dark);
  background: var(--brink-pink);
  border-color: var(--dark);
}

.sidebar .navbar .navbar-nav .nav-link i {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  color: var(--dark);
  border-radius: 40px;
}

.sidebar .navbar .navbar-nav .nav-link:hover i,
.sidebar .navbar .navbar-nav .nav-link.active i {
  background: var(--white);
}

.sidebar .navbar .dropdown-toggle::after {
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transition: 0.5s;
}

.sidebar .navbar .dropdown-toggle[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

.sidebar .navbar .dropdown-item {
  padding-left: 25px;
  border-radius: 0 30px 30px 0;
  color: var(--light);
}

.sidebar .navbar .dropdown-item:hover,
.sidebar .navbar .dropdown-item.active {
  background: var(--dark);
}

.content .navbar .navbar-nav .nav-link {
  margin-left: 25px;
  padding: 12px 0;
  color: var(--navegador-item);
  outline: none;
}

.content .navbar .navbar-nav .nav-link:hover,
.content .navbar .navbar-nav .nav-link.active {
  color: var(--navegador-item);
}

#icono_noti {
  color: var(--tulip-tree);
}

.content .navbar .sidebar-toggler,
.content .navbar .navbar-nav .nav-link i {
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  border-radius: 40px;
}

.content .navbar .dropdown-item {
  color: var(--light);
}

.content .navbar .dropdown-item:hover,
.content .navbar .dropdown-item.active {
  background: var(--dark);
}

.content .navbar .dropdown-toggle::after {
  margin-left: 6px;
  vertical-align: middle;
  border: none;
  content: "\f107";
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  transition: 0.5s;
}

.content .navbar .dropdown-toggle[aria-expanded="true"]::after {
  transform: rotate(-180deg);
}

@media (max-width: 575.98px) {
  .content .navbar .navbar-nav .nav-link {
    margin-left: 15px;
  }
}

/*** Date Picker ***/
.bootstrap-datetimepicker-widget.bottom {
    top: auto !important;
}

.bootstrap-datetimepicker-widget .table * {
    border-bottom-width: 0px;
}

.bootstrap-datetimepicker-widget .table th {
    font-weight: 500;
}

.bootstrap-datetimepicker-widget.dropdown-menu {
    padding: 10px;
    border-radius: 2px;
}

.bootstrap-datetimepicker-widget table td.active,
.bootstrap-datetimepicker-widget table td.active:hover {
    background: var(--primary);
}

.bootstrap-datetimepicker-widget table td.today::before {
    border-bottom-color: var(--primary);
}

</style>