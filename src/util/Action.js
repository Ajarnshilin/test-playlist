export const addSong = (song,name) => ({
    type: 'ADDPLAYLIST',
    song : song,
    name : name
  })
  export const editSong = (song,name) => ({
    type: 'EDITSONG',
    song : song,
    name : name
  })