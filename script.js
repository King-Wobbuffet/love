 const modal = document.getElementById('modal');
        document.getElementById('openLetter').addEventListener('click', ()=> modal.classList.add('open'));
        document.getElementById('closeModal').addEventListener('click', ()=> modal.classList.remove('open'));
        modal.addEventListener('click', e => { if(e.target === modal) modal.classList.remove('open') });

        // playful toggle for a local/embedded song: user can drop an mp3 into the page by setting song.src or link to a hosted file
        const song = document.getElementById('song');
        const toggle = document.getElementById('toggleSong');
        let playing = false;
        toggle.addEventListener('click', ()=>{
            if(!song.src){
                // helpful hint area: replace with a path to an audio file, e.g. "music/song.mp3"
                alert('To play a song, edit home.html and set the audio src in the <audio id="song"> element.');
                return;
            }
            if(!playing){ song.play(); playing = true; toggle.textContent = 'Pause Song'; }
            else { song.pause(); playing = false; toggle.textContent = 'Play a Song'; }
        });