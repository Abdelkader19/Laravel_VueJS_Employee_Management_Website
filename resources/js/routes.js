import Accueil from './components/Accueil.vue';
import FormConge from './components/Employe/FormConge.vue';
import AccueilEmploye from './components/Employe/AccueilEmploye.vue';
import AccueilRH from './components/RH/AccueilRH.vue';
import DemandeConge from './components/RH/DemandeConge.vue';
import ListeEmploye from './components/RH/ListeEmploye.vue'; 
import Recrutement from './components/RH/Recrutement.vue';
import HistoriqueCongeEmploye from './components/Employe/HistoriqueCongeEmploye.vue';
import EditEmploye from './components/RH/EditEmploye.vue'; 
import Login from './components/authentification/login.vue';
import Register from './components/authentification/register.vue';
import Evolution from './components/Employe/evolution.vue';
import Idee from './components/Employe/Idee.vue';
import Historique from './components/RH/HistoriqueConge.vue'; 


export const routes = [
{
name: 'Accueil',
path: '/',
component: Accueil
},

{ name: 'FormConge',
  path: '/formconge',
  component: FormConge 
  },

  {
    name: 'AccueilEmploye',
    path: '/accueilemploye',
    component: AccueilEmploye
    },

    {
      name: 'AccueilRH',
      path: '/accueilrh',
      component: AccueilRH
      },

      {
        name: 'DemandeConge',
        path: '/demandeconge',
        component: DemandeConge
        },

        {
          name: 'ListeEmploye',
          path: '/listeemploye',
          component: ListeEmploye
          },
          
          {
            name: 'Recrutement',
            path: '/recrutement', 
            component: Recrutement
            }, 

            {
              name: 'HistoriqueCongeEmploye',
              path: '/historiquecongeemploye', 
              component: HistoriqueCongeEmploye
              }, 

              {
                name: 'EditEmploye',
                path: '/editemploye/:id', 
                component: EditEmploye 
                }, 
                
                {
                  name: "login",
                  path: "/login",
                  component: Login,
                  },
                  {
                  name: "register",
                  path: "/register",
                  component: Register,
                  },
                  {
                    name: "evolution",
                    path: "/evolution",
                    component: Evolution,
                    },
                    {
                      name: "Idee",
                      path: "/idee",
                      component: Idee,
                      },
                      {
                        name: "Historique",
                        path: "/historique",
                        component: Historique,
                        },
                    
                   
    ]; 


