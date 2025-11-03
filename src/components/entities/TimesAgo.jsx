// src/utils/getTimeAgo.js
export const getTimeAgo = (timestamp) => {
  const now = new Date();
  const seconds = Math.floor((now - new Date(timestamp)) / 1000);

  if (seconds < 60) return 'baru saja';

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} menit yang lalu`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} jam yang lalu`;

  const days = Math.floor(hours / 24);
  if (days < 30) return `${days} hari yang lalu`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} bulan yang lalu`;

  const years = Math.floor(months / 12);
  return `${years} tahun yang lalu`;
};
