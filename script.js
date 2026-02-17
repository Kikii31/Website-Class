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
                { name: "Amanda ", id: "5", ig: "amanda", role: "" },
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

        // Scroll animations - Enhanced smooth pop-up effect with better timing
        const observerOptions = {
            threshold: 0.05, // Trigger earlier for smoother transitions
            rootMargin: '0px 0px -10% 0px' // Start animating when element is 10% from bottom
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Section fade observer - for full sections
        const sectionObserverOptions = {
            threshold: 0.15, // Trigger when 15% of section is visible
            rootMargin: '0px 0px -5% 0px'
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Optional: fade out when scrolling away (comment out if you don't want this)
                    // entry.target.classList.remove('visible');
                }
            });
        }, sectionObserverOptions);

        // Observe all animated elements
        document.querySelectorAll('.animate-on-scroll, .fade-in').forEach((el) => {
            observer.observe(el);
        });

        // Observe all section fades
        document.querySelectorAll('.section-fade').forEach((el) => {
            sectionObserver.observe(el);
        });

        // Smooth scroll for navigation links with custom easing
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const targetPosition = target.offsetTop - 80; // Account for navbar
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800; // Reduced for snappier feel (was 1200)
                    let start = null;

                    // Custom easing function for smooth acceleration and deceleration
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

            // Get student data
            const students = studentsData[deskNumber] || [];

            // Set modal title and subtitle
            modalTitle.textContent = `Desk ${deskNumber}`;
            modalSubtitle.textContent = `${students.length} Students`;
            modalContent.classList.remove('special-modal');

            // Generate student cards
            studentList.innerHTML = students.map((student, index) => `
                <div class="student-card" style="animation-delay: ${index * 0.1}s;">
                    <div class="student-card-header">
                        <div class="student-avatar">${student.name.charAt(0)}</div>
                        <div class="student-info">
                            <h3>${student.name}</h3>
                            <p>${student.role}</p>
                        </div>
                    </div>
                    <div class="student-details">
                        <div class="detail-item">
                            <div class="detail-label">Absent Number</div>
                            <div class="detail-value">${student.id}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Instagram</div>
                            <div class="detail-value">${student.ig}</div>
                        </div>
                    </div>
                </div>
            `).join('');

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scroll
        }

        function closeDeskModal(event) {
            // Only close if clicking the backdrop or close button
            if (!event || event.target.id === 'deskModal' || event.target.classList.contains('desk-modal-close')) {
                const modal = document.getElementById('deskModal');
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scroll
            }
        }

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDeskModal();
            }
        });

        // Add smooth reveal animation on page load
        window.addEventListener('load', () => {
            document.querySelectorAll('.animate-on-scroll').forEach((el, index) => {
                setTimeout(() => {
                    if (el.getBoundingClientRect().top < window.innerHeight) {
                        el.classList.add('visible');
                    }
                }, index * 50);
            });
        });
