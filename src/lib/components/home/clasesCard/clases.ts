export class Clase {
  constructor(
    public id: string,
    public icono: string,
    public nombre: string,
    public breveDescripcion: string,
    public duracion: string,
    public horarios: string[],
    public beneficios: string[],
    public ubicacion: string,
    public descripcion: string
  ){}
}

export const clases = [
  new Clase('presencial', 
    'src/lib/assets/users-three.svg', 
    'Clases Presenciales', 
    'Entrená en equipo al aire libre.',
    '1hs',
    [
      "Lunes 18:30 a 21:00",
      "Miércoles 19:00 a 21:00",
      "Viernes 18:30 a 21:00"
    ],
    [],
    'Plaza Irlanda - Caballito',
    'Entrenamientos grupales al aire libre en un ambiente motivador y en contacto con la naturaleza. Las progresiones están adaptadas a todos los niveles, desde principiantes hasta avanzados. Cada sesión combina movimiento, fuerza y energía compartida.'
  ),
  new Clase('online', 
    'src/lib/assets/laptop.svg', 
    'Clases Online', 
    'Accedé a entrenamientos guiados desde tu casa.',
    'Plan de 4 semanas',
    [],
    [
      "Plan de entrenamiento personalizado",
      "Llamadas de acompañamiento semanales",
      "Videos explicativos",
      "Seguimiento constante"
    ],
    'Virtual',
    'Entrená desde tu casa con rutinas claras, apoyo constante y resultados reales. Ideal si buscás flexibilidad horaria y mantener la motivación con un acompañamiento cercano.'
  ),
  new Clase('personalizado', 
    'src/lib/assets/handshake.svg', 
    'Clases Personalizadas', 
    'Sesiones 1 a 1 para progresar a tu ritmo.',
    'Sesiones 1 a 1 (consultar disponibilidad)',
    [], [],
    'En CABA',
    'Entrenamiento individual adaptado 100% a tus objetivos: calistenia o fitness integral. Sesiones diseñadas para mejorar fuerza, técnica y resultados, con acompañamiento cercano y feedback directo.'
  )
]