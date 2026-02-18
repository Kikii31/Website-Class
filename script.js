// Student Data - CUSTOMIZE THIS WITH YOUR ACTUAL STUDENT INFORMATION
        const studentsData = {
            1: [
                { name: "Agha Alfian Hakim", id: "3", ig: "aghaalfian", role: "" },
                { name: "Muhammad Daaryc Limlyn", id: "21", ig: "daaryc", role: "" }
            ],
            2: [
                { name: "Inayah Anatasyah", id: "15", ig: "charliebrown", role: "" },
                { name: "Ririn Dwi Ariani", id: "30", ig: "dianaprince", role: "" }
            ],
            3: [
                { name: "Fika Zira Pratiwi", id: "13", ig: "fikazirapratiwi", role: "" },
                { name: "Asya Namira Putri", id: "7", ig: "asyanamiraputri", role: "" }
            ],
            4: [
                { name: "Refandy Aidil Akbar", id: "29", ig: "refandyaidilakbar", role: "" },
                { name: "Soni Permana", id: "33", ig: "sonipermana", role: "" }
            ],
            5: [
                { name: "Aqila Sri Rahayu", id: "6", ig: "aqilasrirahayu", role: "" },
                { name: "Farah Nurliza", id: "11", ig: "farahnurliza", role: "" }
            ],
            6: [
                { name: "Muhammad Ikhsan Maulana", id: "23", ig: "ikhsanmaulana", role: "" },
                { name: "Miranda Gali", id: "20", ig: "mirandagali", role: "" }
            ],
            7: [
                { name: "Rakha Atha Farandi Saputra", id: "28", ig: "rakhaatha", role: "" },
                { name: "Muhammad Zinadine Zidan", id: "24", ig: "zinadinezidan", role: "" }
            ],
            8: [
                { name: "Amanda", id: "5", ig: "amanda", role: "" },
                { name: "Syakila Zahara", id: "34", ig: "syakilazahara", role: "" }
            ],
            9: [
                { name: "Zaidan Early Aditya", id: "35", ig: "zaidan", role: "" },
                { name: "Krispinus Duanov Sitinjak", id: "16", ig: "krispinus", role: "" }
            ],
            10: [
                { name: "Farizzia Salwa Amanda", id: "12", ig: "farizziasalwa", role: "" },
                { name: "Luna Amaliyah", id: "17", ig: "lunaamaliyah", role: "" }
            ],
            11: [
                { name: "Seline Kiraz Siburian", id: "32", ig: "selinekiraz", role: "" },
                { name: "Dwi Khairiyyah", id: "10", ig: "dwikhairiyyah", role: "" }
            ],
            12: [
                { name: "Nuraini", id: "27", ig: "nuraini", role: "" },
                { name: "Nazwa Aira", id: "25", ig: "nazwaairas", role: "" }
            ],
            13: [
                { name: "Debi Febiola", id: "9", ig: "debifebiola", role: "" },
                { name: "Melati", id: "19", ig: "melati", role: "" }
            ],
            14: [
                { name: "Bayu Aditya", id: "8", ig: "bayuaditya", role: "" },
                { name: "Adhan Hafiz Raihandzah", id: "1", ig: "adhanhafiz", role: "" }
            ],
            15: [
                { name: "Gandiwa Al Aqsha", id: "14", ig: "gandiwaal", role: "" },
                { name: "Aditya Rizky Azhar", id: "2", ig: "adityarizky", role: "" }
            ],
            16: [
                { name: "Akbar Nasution", id: "4", ig: "akbarnasution", role: "" },
                { name: "Muhammad Ibrahim", id: "22", ig: "muhdibrahim", role: "" }
            ],
            17: [
                { name: "Mario Terry Al Fachri", id: "18", ig: "mario", role: "" },
                { name: "", id: "", ig: "", role: "" }
            ],
            18: [
                { name: "Nicholas Frans Dilo Simalango", id: "26", ig: "nicholasfrans", role: "" },
                { name: "Sahlan Syahputra Lubis", id: "31", ig: "sahlanlubis", role: "" }
            ]
        };

        // ─────────────────────────────────────────────
        // FOTO SISWA   
        // Taruh foto di folder "photos/" dengan nama file = nomor absen + .jpg
        // Contoh: photos/3.jpg  → Agha (absen 3)
        //         photos/21.jpg → Daaryc (absen 21)
        // Format yang didukung: .jpg .jpeg .png .webp
        // Kalau foto tidak ada, otomatis pakai avatar huruf
        // ─────────────────────────────────────────────
        const PHOTO_FOLDER = 'photos/';
        const PHOTO_EXT    = '.png';   // ← ganti ke .png atau .jpeg kalau perlu

        function getPhotoPath(studentId) {
            if (!studentId) return null;
            return `${PHOTO_FOLDER}${studentId}${PHOTO_EXT}`;
        }

        // Build avatar HTML — foto jika ada, huruf jika tidak
        function buildAvatar(student) {
            const photoPath = getPhotoPath(student.id);
            const fallbackLetter = student.name ? student.name.charAt(0).toUpperCase() : '?';

            if (!student.id) {
                // Siswa kosong (Desk 17 slot kedua)
                return `<div class="student-avatar student-avatar-letter">${fallbackLetter}</div>`;
            }

            return `
                <div class="student-avatar student-avatar-photo">
                    <img
                        src="${photoPath}"
                        alt="${student.name}"
                        onerror="this.parentElement.classList.remove('student-avatar-photo');
                                 this.parentElement.classList.add('student-avatar-letter');
                                 this.parentElement.innerHTML='${fallbackLetter}';"
                    />
                </div>
            `;
        }

        // Navigation hide/show on scroll
        let lastScrollTop = 0;
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }, false);

        // Active navigation link
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });

        // Gallery drag scroll
        const galleryContainer = document.getElementById('galleryContainer');
        const galleryScroll = document.getElementById('galleryScroll');
        let isDown = false;
        let startX;
        let scrollLeft;

        galleryContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - galleryContainer.offsetLeft;
            scrollLeft = galleryContainer.scrollLeft;
        });

        galleryContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        galleryContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        galleryContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - galleryContainer.offsetLeft;
            const walk = (x - startX) * 2;
            galleryContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch drag for mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        galleryContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].pageX - galleryContainer.offsetLeft;
            touchScrollLeft = galleryContainer.scrollLeft;
        });

        galleryContainer.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - galleryContainer.offsetLeft;
            const walk = (x - touchStartX) * 2;
            galleryContainer.scrollLeft = touchScrollLeft - walk;
        });

        // Scroll animations
        const observerOptions = {
            threshold: 0.05,
            rootMargin: '0px 0px -10% 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        const sectionObserverOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -5% 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, sectionObserverOptions);

        document.querySelectorAll('.animate-on-scroll, .fade-in').forEach((el) => {
            observer.observe(el);
        });

        document.querySelectorAll('.section-fade').forEach((el) => {
            sectionObserver.observe(el);
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.offsetTop - 80;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800;
                    let start = null;

                    function easeInOutCubic(t) {
                        return t < 0.5 
                            ? 4 * t * t * t 
                            : 1 - Math.pow(-2 * t + 2, 3) / 2;
                    }

                    function animation(currentTime) {
                        if (start === null) start = currentTime;
                        const timeElapsed = currentTime - start;
                        const progress = Math.min(timeElapsed / duration, 1);
                        const easing = easeInOutCubic(progress);
                        
                        window.scrollTo(0, startPosition + distance * easing);
                        
                        if (timeElapsed < duration) {
                            requestAnimationFrame(animation);
                        }
                    }

                    requestAnimationFrame(animation);
                }
            });
        });

        // Desk Modal Functions
        function openDeskModal(deskNumber, isSpecial) {
            const modal = document.getElementById('deskModal');
            const modalContent = document.getElementById('deskModalContent');
            const modalTitle = document.getElementById('modalDeskTitle');
            const modalSubtitle = document.getElementById('modalDeskSubtitle');
            const studentList = document.getElementById('modalStudentList');

            const students = studentsData[deskNumber] || [];

            // Filter out empty students (Desk 17 slot kosong)
            const validStudents = students.filter(s => s.name && s.name.trim() !== '');

            modalTitle.textContent = `Desk ${deskNumber}`;
            modalSubtitle.textContent = `${validStudents.length} Student${validStudents.length !== 1 ? 's' : ''}`;
            modalContent.classList.remove('special-modal');

            studentList.innerHTML = validStudents.map((student, index) => `
                <div class="student-card" style="animation-delay: ${index * 0.1}s;">
                    <div class="student-card-header">
                        ${buildAvatar(student)}
                        <div class="student-info">
                            <h3>${student.name}</h3>
                            <p>${student.role || 'Student'}</p>
                        </div>
                    </div>
                    <div class="student-details">
                        <div class="detail-item">
                            <div class="detail-label">Absent Number</div>
                            <div class="detail-value">${student.id}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Instagram</div>
                            <div class="detail-value">@${student.ig}</div>
                        </div>
                    </div>
                </div>
            `).join('');

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeDeskModal(event) {
            if (!event || event.target.id === 'deskModal' || event.target.classList.contains('desk-modal-close')) {
                const modal = document.getElementById('deskModal');
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDeskModal();
            }
        });

        window.addEventListener('load', () => {
            document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                setTimeout(() => {
                    if (el.getBoundingClientRect().top < window.innerHeight) {
                        el.classList.add('visible');
                    }
                }, index * 50);
            });
        });
