import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
  
  

  {
    path: '/Tramo',
    name: 'ProyectoTramo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProyectoTramoView.vue')
  },

  {
    path: '/Solicitudes',
    name: 'ProyectoTramo',
    component:() => import ('../views/SolicitudesTramoView.vue')
  },

  {
    path: '/Conductores',
    name: 'Conductores',
    component:() => import ('../views/ConductoresView.vue')
  },
  {
    path: '/DatosConductores',
    name: 'DatosConductores',
    component:() => import ('../views/ProyectoTramoView.vue')
  },

  {
    path: '/DatosCliente',
    name: 'DatosCliente',
    component:() => import ('../views/DatosClienteView.vue')
  },

  {
    path: '/Historial',
    name: 'Historial',
    component:() => import ('../views/HistorialView.vue')
  },

  {
    path: '/Pqrs',
    name: 'Pqrs',
    component:() => import ('../views/PqrsView.vue')
  },

  {
    path: '/CerrarSesion',
    name: 'CerrarSesion',
    component:() => import ('../views/CerrarSesionView.vue')
  },

  {
    path: '/Manifiesto',
    name: 'Manifiesto',
    component:() => import ('../views/ManifiestoView.vue')
  },

  {
    path: '/MasDatos',
    name: 'MasDatos',
    component:() => import ('../views/MasDatosConductoresView.vue')
  },

  {
    path: '/MasDatosSolicitu',
    name: 'MasDatosSolicitu',
    component:() => import ('../views/MasDatosSolicitudConductoresView.vue')
  }


  




]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
