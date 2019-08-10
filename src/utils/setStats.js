export default function setStats(stats){
  return stats.map( statsItem => ({name: statsItem.stat.name, baseStat: statsItem.base_stat}))
}