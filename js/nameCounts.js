const jugadores = [
    "Ramos",
    "García",
    "Martínez",
    "Rodríguez",
    "Fernández",
    "López",
    "Pérez",
    "Gómez",
    "Sánchez",
    "Díaz",
    "Torres",
    "Hernández",
    "Vargas",
    "Cruz",
    "Rojas",
    "Ramírez",
    "Mendoza",
    "Flores",
    "Morales",
    "Castro",
    "Núñez",
    "Alvarez",
    "Ruiz",
    "Chávez",
    "Gutiérrez",
    "Silva",
    "Ortega",
    "Vega",
    "Padilla",
    "Navarro",
    "Mejía",
    "Molina",
    "Zamora",
    "Acosta",
    "Soto",
    "Agüero",
    "Aguilar",
    "Barrera",
    "Beltrán",
    "Campos",
    "Cabrera",
    "Calderón",
    "Camacho",
    "Cáceres",
    "Cortés",
    "Corona",
    "Cisneros",
    "Domínguez",
    "Delgado",
    "Espinoza",
    "Estrada",
    "Espinosa",
    "Fajardo",
    "Franco",
    "Guerrero",
    "Gallardo",
    "Herrera",
    "Hernando",
    "Ibarra",
    "Jiménez",
    "Juárez",
    "Lara",
    "León",
    "Luna",
    "Montes",
    "Méndez",
    "Nava",
    "Ochoa",
    "Olivera",
    "Orozco",
    "Olivares",
    "Pacheco",
    "Palacios",
    "Quintero",
    "Quiroz",
    "Ríos",
    "Reyes",
    "Salazar",
    "Santos",
    "Téllez",
    "Trujillo",
    "Ugalde",
    "Uribe",
    "Valdez",
    "Villarreal",
    "Zúñiga",
    "Zavala",
];

jugadores.forEach((name) => {
    if (name[name.length] <= 3) {
        console.log(name);
    }
});

for (let i = 0; i < jugadores.length; i++) {
    if (jugadores[i].length <= 4) {
        console.log(jugadores[i]);
    }
}

for (let name of jugadores) {
    if (name.length <= 5) {
        console.log(name);
    }
}
