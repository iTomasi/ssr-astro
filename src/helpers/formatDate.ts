const formatDate = (timestamp: number) => {
  const time = (Date.now() - timestamp) / 1000;

  if (time < 60) return `${Math.floor(time)}s`
  else if (time < 3_600) return `${Math.floor(time / 60)}m`
  else if (time < 86_400) return `${Math.floor(time / 60 / 60)}h`
  else if (time < 2_592_000) return `${Math.floor(time / 60 / 60 / 24)}d`
  else if (time < 31_536_000) return `${Math.floor(time / 60 / 60 / 24 / 30)}mo`

  return `${Math.floor(time / 60 / 60 / 24 / 30 / 12)}`
};

export default formatDate;