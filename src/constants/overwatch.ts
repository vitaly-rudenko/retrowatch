import type { Hero, Map } from '../types/overwatch'

export const maps: Map[] = [
  { slug: 'circuit_royal', name: 'Circuit Royal', type: 'escort' },
  { slug: 'dorado', name: 'Dorado', type: 'escort' },
  { slug: 'route_66', name: 'Route 66', type: 'escort' },
  { slug: 'junkertown', name: 'Junkertown', type: 'escort' },
  { slug: 'rialto', name: 'Rialto', type: 'escort' },
  { slug: 'havana', name: 'Havana', type: 'escort' },
  {
    slug: 'watchpoint_gibraltar',
    name: 'Watchpoint: Gibraltar',
    type: 'escort',
  },
  { slug: 'shambali_monastery', name: 'Shambali Monastery', type: 'escort' },
  { slug: 'blizzard_world', name: 'Blizzard World', type: 'hybrid' },
  { slug: 'numbani', name: 'Numbani', type: 'hybrid' },
  { slug: 'hollywood', name: 'Hollywood', type: 'hybrid' },
  { slug: 'eichenwalde', name: 'Eichenwalde', type: 'hybrid' },
  { slug: 'kings_row', name: "King's Row", type: 'hybrid' },
  { slug: 'midtown', name: 'Midtown', type: 'hybrid' },
  { slug: 'paraiso', name: 'Paraíso', type: 'hybrid' },
  { slug: 'busan', name: 'Busan', type: 'control' },
  { slug: 'nepal', name: 'Nepal', type: 'control' },
  { slug: 'ilios', name: 'Ilios', type: 'control' },
  { slug: 'oasis', name: 'Oasis', type: 'control' },
  { slug: 'lijiang_tower', name: 'Lijiang Tower', type: 'control' },
  { slug: 'antarctic_peninsula', name: 'Antarctic Peninsula', type: 'control' },
  { slug: 'colosseo', name: 'Colosseo', type: 'push' },
  { slug: 'esperanca', name: 'Esperança', type: 'push' },
  { slug: 'new_queen_street', name: 'New Queen Street', type: 'push' },
]

export const heroes: Hero[] = [
  {
    name: 'Genji',
    slug: 'genji',
    role: 'damage',
    types: ['flanker', 'projectile']
  },
  {
    name: 'McCree',
    slug: 'mccree',
    role: 'damage',
    types: ['hitscan', 'burst', 'mid-range']
  },
  {
    name: 'Pharah',
    slug: 'pharah',
    role: 'damage',
    types: ['projectile', 'burst', 'long-range']
  },
  {
    name: 'Reaper',
    slug: 'reaper',
    role: 'damage',
    types: ['hitscan', 'flanker', 'close-range']
  },
  {
    name: 'Soldier: 76',
    slug: 'soldier76',
    role: 'damage',
    types: ['hitscan', 'sustained', 'mid-range']
  },
  {
    name: 'Sombra',
    slug: 'sombra',
    role: 'damage',
    types: ['hitscan', 'flanker', 'utility', 'mid-range']
  },
  {
    name: 'Tracer',
    slug: 'tracer',
    role: 'damage',
    types: ['hitscan', 'flanker', 'close-range']
  },
  {
    name: 'Bastion',
    slug: 'bastion',
    role: 'damage',
    types: ['hitscan', 'projectile', 'sustained']
  },
  {
    name: 'Hanzo',
    slug: 'hanzo',
    role: 'damage',
    types: ['projectile', 'sniper', 'mid-range']
  },
  {
    name: 'Junkrat',
    slug: 'junkrat',
    role: 'damage',
    types: ['projectile', 'area-denial', 'mid-range']
  },
  {
    name: 'Mei',
    slug: 'mei',
    role: 'damage',
    types: ['projectile', 'utility', 'area-denial', 'close-range']
  },
  {
    name: 'Torbjorn',
    slug: 'torbjorn',
    role: 'damage',
    types: ['projectile', 'utility', 'zone-control', 'mid-range']
  },
  {
    name: 'Widowmaker',
    slug: 'widowmaker',
    role: 'damage',
    types: ['hitscan', 'sniper', 'long-range']
  },
  {
    name: 'D.Va',
    slug: 'dva',
    role: 'tank',
    types: ['diver']
  },
  {
    name: 'Orisa',
    slug: 'orisa',
    role: 'tank',
    types: ['anchor']
  },
  {
    name: 'Reinhardt',
    slug: 'reinhardt',
    role: 'tank',
    types: ['anchor']
  },
  {
    name: 'Roadhog',
    slug: 'roadhog',
    role: 'tank',
    types: ['anchor']
  },
  {
    name: 'Winston',
    slug: 'winston',
    role: 'tank',
    types: ['diver']
  },
  {
    name: 'Zarya',
    slug: 'zarya',
    role: 'tank',
    types: ['brawler']
  },
  {
    name: 'Sigma',
    slug: 'sigma',
    role: 'tank',
    types: ['barrier']
  },
  {
    name: 'Wrecking Ball',
    slug: 'wrecking-ball',
    role: 'tank',
    types: ['diver']
  },
  {
    name: 'Ana',
    slug: 'ana',
    role: 'support',
    types: ['utility']
  },
  {
    name: 'Brigitte',
    slug: 'brigitte',
    role: 'support',
    types: ['brawler']
  },
  {
    name: 'Lucio',
    slug: 'lucio',
    role: 'support',
    types: ['utility']
  },
  {
    name: 'Mercy',
    slug: 'mercy',
    role: 'support',
    types: ['utility']
  },
  {
    name: 'Moira',
    slug: 'moira',
    role: 'support',
    types: ['sustained']
  },
  {
    name: 'Zenyatta',
    slug: 'zenyatta',
    role: 'support',
    types: ['utility']
  },
  {
    name: 'Baptiste',
    slug: 'baptiste',
    role: 'support',
    types: ['utility']
  },
  {
    name: 'Echo',
    slug: 'echo',
    role: 'damage',
    types: ['projectile', 'burst', 'mid-range']
  },
  {
    name: 'Ashe',
    slug: 'ashe',
    role: 'damage',
    types: ['hitscan', 'sniper', 'mid-range']
  },
  {
    name: 'Doomfist',
    slug: 'doomfist',
    role: 'damage',
    types: ['burst', 'close-range']
  },
  {
    name: 'Symmetra',
    slug: 'symmetra',
    role: 'damage',
    types: ['projectile', 'utility', 'zone-control', 'close-range']
  }
]
