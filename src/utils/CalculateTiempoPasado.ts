/* eslint-disable  */
export const CalculateTiempoPasado = (minutes: number) => {
  if (minutes < 60) return `Hace ${minutes} minutos`
  if (minutes >= 60 && minutes < 120) return `Hace 1 hora`
  if (minutes >= 120 && minutes < 1440)
    return `Hace ${Math.floor(minutes / 60)} horas`
  if (minutes >= 1440 && minutes < 2880) return `Hace ${minutes} dia`
  if (minutes >= 2880 && minutes < 10080)
    return `Hace ${Math.floor(minutes / 1440)} dias`
  if (minutes >= 10080 && minutes < 43800) return `Hace ${minutes} mes`
  if (minutes >= 43800 && minutes < 525960)
    return `Hace ${Math.floor(minutes / 10080)} meses`
  if (minutes >= 525960 && minutes < 1051920) return `Hace 1 año`
  if (minutes >= 1051920) return `Hace ${Math.floor(minutes / 525960)} años`
}
