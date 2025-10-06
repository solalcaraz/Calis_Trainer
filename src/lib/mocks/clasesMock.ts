import { Clase } from "$lib/DTO/clases"

export const clases = [
  new Clase('presencial', 
    '/users-three.svg', 
    'Clases Presenciales', 
    'Entrená en equipo al aire libre.',
    '1hs',
    [
      {item: 1, texto: "Lunes 18:30 a 21:00"},
      {item: 2, texto: "Miércoles 19:00 a 21:00"},
      {item: 3, texto: "Viernes 18:30 a 21:00"}
    ],
    [],
    'Plaza Irlanda - Caballito',
    'Entrenamientos grupales al aire libre en un ambiente motivador y en contacto con la naturaleza. Las progresiones están adaptadas a todos los niveles, desde principiantes hasta avanzados. Cada sesión combina movimiento, fuerza y energía compartida.'
  ),
  new Clase('online', 
    '/laptop.svg', 
    'Clases Online', 
    'Accedé a entrenamientos guiados desde tu casa.',
    'Plan de 4 semanas',
    [],
    [
      {item: 1, texto: "Plan de entrenamiento personalizado"},
      {item: 2, texto: "Llamadas de acompañamiento semanales"},
      {item: 3, texto: "Videos explicativos"},
      {item: 4, texto: "Seguimiento constante"}
    ],
    'Virtual',
    'Entrená desde tu casa con rutinas claras, apoyo constante y resultados reales. Ideal si buscás flexibilidad horaria y mantener la motivación con un acompañamiento cercano.'
  ),
  new Clase('personalizado', 
    '/handshake.svg', 
    'Clases Personalizadas', 
    'Sesiones 1 a 1 para progresar a tu ritmo.',
    '1hs (consultar disponibilidad)',
    [], [],
    'En CABA',
    'Entrenamiento individual adaptado 100% a tus objetivos: calistenia o fitness integral. Sesiones diseñadas para mejorar fuerza, técnica y resultados, con acompañamiento cercano y feedback directo.'
  ),
  new Clase('flex',
    '/GrommetIconsYoga.svg',
    'Flex Consciente',
    'Un cuerpo fuerte y flexible',
    '1hs', 
    [
      {item: 1, texto: 'Viernes 21hs'}
    ],
    [],
    'Plaza Irlanda - Caballito',
    'Entrenamientos enfocados en mejorar la movilidad, la postura y liberar tensiones, a través de movimientos suaves y controlados que complementan la calistenia. Estas clases se realizan en conjunto con otra profe especializada en movilidad y bienestar corporal. '
  )
]