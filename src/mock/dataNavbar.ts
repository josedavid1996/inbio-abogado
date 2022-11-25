/* eslint-disable comma-dangle */
interface IDataNavbar {
  tittle: string
  id: string
}
export const IdDataNavbar = {
  Home: 'Home',
  About: 'About',
  Services: 'MisServicios',
  Team: 'Team',
  Resumen: 'Resumen',
  Blog: 'Blog',
  Contact: 'Contact',
}
export const DataNavbar: IDataNavbar[] = [
  { id: '#' + IdDataNavbar.Home, tittle: 'Inicio' },
  { id: '#' + IdDataNavbar.About, tittle: 'Quien Soy' },
  { id: '#' + IdDataNavbar.Services, tittle: 'Mis Servicios' },
  { id: '#' + IdDataNavbar.Team, tittle: 'Equipo' },
  { id: '#' + IdDataNavbar.Resumen, tittle: 'Resumen' },
  { id: '#' + IdDataNavbar.Blog, tittle: 'Blog' },
  { id: '#' + IdDataNavbar.Contact, tittle: 'Contactame' },
]
