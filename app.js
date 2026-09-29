const sosBtn = document.getElementById('sos-btn');
      const overlay = document.getElementById('overlay');
      const cancelBtn = document.getElementById('cancel-btn');
      
      sosBtn.onclick = () => overlay.classList.add('active');
      cancelBtn.onclick = () => overlay.classList.remove('active');