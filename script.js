document.addEventListener('DOMContentLoaded', () => {
    const albums = document.querySelectorAll('.album');
    const gallery = document.getElementById('gallery');
    const galleryContent = document.getElementById('galleryContent');
    const backBtn = document.getElementById('backBtn');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    let currentAlbum = '';
    let currentPage = 1;
    const itemsPerPage = 10;

    albums.forEach(album => {
        album.addEventListener('click', () => {
            currentAlbum = album.getAttribute('data-album');
            currentPage = 1;
            showGallery(currentAlbum, currentPage);
        });
    });

    backBtn.addEventListener('click', () => {
        gallery.style.display = 'none';
        document.querySelector('.albums').style.display = 'flex';
    });

    loadMoreBtn.addEventListener('click', () => {
        currentPage++;
        showGallery(currentAlbum, currentPage, false);
    });

    function showGallery(albumName, page, clear = true) {
        if (clear) galleryContent.innerHTML = '';
        const mediaItems = getMediaItems(albumName, page, itemsPerPage);
        mediaItems.forEach(item => {
            let element;
            if (item.type === 'img') {
                element = document.createElement('img');
                element.src = item.src;
            } else if (item.type === 'video') {
                element = document.createElement('video');
                element.src = item.src;
                element.controls = true;
            }
            
            element.style.maxWidth = '200px';
            element.style.margin = '10px';
            element.style.borderRadius = '10px';
            element.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            galleryContent.appendChild(element);
        });
        document.querySelector('.albums').style.display = 'none';
        gallery.style.display = 'block';

        // Initialize SortableJS on the gallery content
        new Sortable(galleryContent, {
            animation: 150,
            ghostClass: 'sortable-ghost'
        });
    }

    function getMediaItems(albumName, page, itemsPerPage) {
        const mediaItems = {
            album1: [
                { type: 'img', src: 'images/album1/img1.jpg' }, 
                { type: 'img', src: 'images/album1/img2.jpg' }, 
                { type: 'video', src: 'videos/album1/lol.mp4' },
                { type: 'video', src: 'videos/album1/video1.mp4' },
                { type: 'img', src: 'images/album1/img3.jpg' }, 
                { type: 'img', src: 'images/album1/img4.jpg' },
                { type: 'img', src: 'images/album1/img5.jpg' }, 
                { type: 'img', src: 'images/album1/img6.jpg' },
                { type: 'img', src: 'images/album1/img7.jpg' },
                { type: 'img', src: 'images/album1/img8.jpg' },
                { type: 'img', src: 'images/album1/img9.jpg' },
                { type: 'img', src: 'images/album1/img10.jpg' },
                { type: 'img', src: 'images/album1/img11.jpg' },
                { type: 'img', src: 'images/album1/img12.jpg' },
                { type: 'img', src: 'images/album1/img14.jpg' },
                { type: 'img', src: 'images/album1/img13.jpg' },
            
                // Add more image or video URLs here
            ],
            album2: [
                { type: 'img', src: 'images/album2/img1.jpg' }, 
                { type: 'img', src: 'images/album2/img2.jpg' }, 
                { type: 'img', src: 'images/album2/img3.jpg' },                
                { type: 'img', src: 'images/album2/img4.jpg' },
                { type: 'img', src: 'images/album2/img5.jpg' }, 
                { type: 'img', src: 'images/album2/img6.jpg' },              
                { type: 'img', src: 'images/album2/img8.jpg' },
                { type: 'img', src: 'images/album2/img9.jpg' },
                { type: 'img', src: 'images/album2/img10.jpg' },
                { type: 'img', src: 'images/album2/img11.jpg' },
                { type: 'img', src: 'images/album2/img12.jpg' },
                { type: 'img', src: 'images/album2/img13.jpg' },
                { type: 'img', src: 'images/album2/img14.jpg' },
                { type: 'img', src: 'images/album2/img15.jpg' },
                { type: 'img', src: 'images/album2/img16.jpg' },
                { type: 'img', src: 'images/album2/img17.jpg' },
                { type: 'img', src: 'images/album2/img18.jpg' },
                { type: 'img', src: 'images/album2/img19.jpg' },
                { type: 'img', src: 'images/album2/img20.jpg' },
                { type: 'img', src: 'images/album2/img21.jpg' },
                { type: 'img', src: 'images/album2/img22.jpg' },
                { type: 'img', src: 'images/album2/img23.jpg' },
                // Add more image or video URLs here
            ]
        };
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return mediaItems[albumName].slice(start, end);
    }
});
