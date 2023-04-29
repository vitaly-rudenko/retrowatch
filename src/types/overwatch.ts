export type MapType = 'hybrid' | 'escort' | 'control' | 'push'

export type Map = {
  name: string
  slug: string
  type: MapType
}

export type HeroRole = 'tank' | 'damage' | 'support'
export type HeroType = 'hitscan' | 'projectile' | 'hybrid' | 'utility' | 'sniper' | 'flanker' | 'burst' | 'sustained' | 'close-range' | 'long-range' | 'mid-range' | 'anchor' | 'diver' | 'zone-control' | 'area-denial' | 'brawler' | 'barrier'

export type Hero = {
  name: string
  slug: string
  role: HeroRole
  types: HeroType[]
}

export type Improvement = 'positioning' | 'aim' | 'game-sense' | 'ult-management' | 'cooldown-management'

export type Record = {
  id: string
  createdAt: number
  outcome: 'win' | 'loss'
  map: string
  heroes: string[]
  evaluation: 'easy' | 'medium' | 'hard'
  performance: 'poor' | 'acceptable' | 'great' | 'perfect'
  improvements: Improvement[]
  note: string
}

export const TIMESTAMP_TYPES: Timestamp['type'][] = [
  'start', 'death', 'mistake', 'ultimate', 'lost-fight'
]

export type Timestamp = {
  id: string
  recordId: string | undefined
  createdAt: number
  type: 'start' | 'death' | 'mistake' | 'ultimate' | 'lost-fight'
}
