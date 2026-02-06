// Student Data - CUSTOMIZE THIS WITH YOUR ACTUAL STUDENT INFORMATION
        const studentsData = {
            1: [
                { name: "Alice Johnson", id: "S001", email: "alice@school.com", role: "Team Leader" },
                { name: "Bob Smith", id: "S002", email: "bob@school.com", role: "Note Taker" }
            ],
            2: [
                { name: "Charlie Brown", id: "S003", email: "charlie@school.com", role: "Team Leader" },
                { name: "Diana Prince", id: "S004", email: "diana@school.com", role: "Presenter" }
            ],
            3: [
                { name: "Edward Norton", id: "S005", email: "edward@school.com", role: "Researcher" },
                { name: "Fiona Apple", id: "S006", email: "fiona@school.com", role: "Designer" }
            ],
            4: [
                { name: "George Martin", id: "S007", email: "george@school.com", role: "Coordinator" },
                { name: "Hannah Lee", id: "S008", email: "hannah@school.com", role: "Writer" }
            ],
            5: [
                { name: "Ian Malcolm", id: "S009", email: "ian@school.com", role: "Analyst" },
                { name: "Julia Roberts", id: "S010", email: "julia@school.com", role: "Team Leader" }
            ],
            6: [
                { name: "Kevin Hart", id: "S011", email: "kevin@school.com", role: "Organizer" },
                { name: "Laura Palmer", id: "S012", email: "laura@school.com", role: "Researcher" }
            ],
            7: [
                { name: "Michael Scott", id: "S013", email: "michael@school.com", role: "Team Leader" },
                { name: "Nina Williams", id: "S014", email: "nina@school.com", role: "Developer" }
            ],
            8: [
                { name: "Oliver Queen", id: "S015", email: "oliver@school.com", role: "Strategist" },
                { name: "Patricia Chen", id: "S016", email: "patricia@school.com", role: "Coordinator" }
            ],
            9: [
                { name: "Quentin Blake", id: "S017", email: "quentin@school.com", role: "Artist" },
                { name: "Rachel Green", id: "S018", email: "rachel@school.com", role: "Team Leader" }
            ],
            10: [
                { name: "Samuel Jackson", id: "S019", email: "samuel@school.com", role: "Presenter" },
                { name: "Tina Turner", id: "S020", email: "tina@school.com", role: "Performer" }
            ],
            11: [
                { name: "Uma Thurman", id: "S021", email: "uma@school.com", role: "Leader" },
                { name: "Victor Hugo", id: "S022", email: "victor@school.com", role: "Writer" }
            ],
            12: [
                { name: "Wendy Davis", id: "S023", email: "wendy@school.com", role: "Organizer" },
                { name: "Xavier Lopez", id: "S024", email: "xavier@school.com", role: "Tech Lead" }
            ],
            13: [
                { name: "Yara Martinez", id: "S025", email: "yara@school.com", role: "Designer" },
                { name: "Zachary Lee", id: "S026", email: "zachary@school.com", role: "Developer" }
            ],
            14: [
                { name: "Amy Adams", id: "S027", email: "amy@school.com", role: "Team Leader" },
                { name: "Bruce Wayne", id: "S028", email: "bruce@school.com", role: "Strategist" }
            ],
            15: [
                { name: "Clara Oswald", id: "S029", email: "clara@school.com", role: "Analyst" },
                { name: "Derek Morgan", id: "S030", email: "derek@school.com", role: "Coordinator" }
            ],
            16: [
                { name: "Elena Gilbert", id: "S031", email: "elena@school.com", role: "Writer" },
                { name: "Frank Castle", id: "S032", email: "frank@school.com", role: "Security" }
            ],
            17: [
                { name: "Grace Hopper", id: "S033", email: "grace@school.com", role: "Programmer" },
                { name: "Henry Cavill", id: "S034", email: "henry@school.com", role: "Actor" }
            ],
            18: [
                { name: "Iris West", id: "S035", email: "iris@school.com", role: "Journalist" },
                { name: "Jack Sparrow", id: "S036", email: "jack@school.com", role: "Navigator" }
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
                            <div class="detail-label">Student ID</div>
                            <div class="detail-value">${student.id}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Email</div>
                            <div class="detail-value">${student.email}</div>
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