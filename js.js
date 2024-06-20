// script.js

const playlistData = [
    { title: "Song 1", image: "song1.jpg", link: "song1link" },
    { title: "Song 2", image: "song2.jpg", link: "song2link" },
    { title: "Song 3", image: "song3.jpg", link: "song3link" }
  ];
  
  function displayPlaylist() {
    const musicList = document.getElementById('musicList');
    musicList.innerHTML = '';
    playlistData.forEach(item => {
      const playlistItem = document.createElement('div');
      playlistItem.classList.add('playlist-item');
      playlistItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <a href="${item.link}" target="_blank">${item.title}</a>
      `;
      musicList.appendChild(playlistItem);
    });
  }
  
  
  function generateRoutine() {
    const exercise = document.getElementById('exercise').value;
    const sets = parseInt(document.getElementById('sets').value);
    const reps = parseInt(document.getElementById('reps').value);
  
    let routine = '';
    for (let i = 1; i <= sets; i++) {
      routine += `<p>Set ${i}: ${reps} ${exercise}</p>`;
    }
  
    document.getElementById('routine').innerHTML = routine;
  }
  
  function addMusic() {
    const songTitle = document.getElementById('songTitle').value;
    const songLink = document.getElementById('songLink').value;
    const songImage = document.getElementById('songImage').value;
  
    playlistData.push({ title: songTitle, image: songImage, link: songLink });
  
    displayPlaylist();
  
    document.getElementById('songTitle').value = '';
    document.getElementById('songLink').value = '';
    document.getElementById('songImage').value = '';
  }
  
  