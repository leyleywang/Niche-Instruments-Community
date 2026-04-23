document.addEventListener('DOMContentLoaded', function() {
    // 数据定义
    const teachers = [
        {
            id: 1,
            name: '张老师',
            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20music%20teacher%20portrait%20asian%20man%20friendly&image_size=square',
            instruments: ['陶笛', '口琴'],
            bio: '从事小众乐器教学10年，擅长陶笛演奏与教学，曾获全国陶笛大赛金奖。教学风格温和耐心，深受学员喜爱。',
            videos: [
                { title: '陶笛入门基础', duration: '15:30', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ocarina%20music%20lesson%20video%20thumbnail&image_size=landscape_4_3' },
                { title: '天空之城陶笛版', duration: '10:20', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=music%20performance%20video%20thumbnail%20instrument&image_size=landscape_4_3' },
                { title: '陶笛吹奏技巧', duration: '20:15', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=musical%20instrument%20tutorial%20video%20thumbnail&image_size=landscape_4_3' }
            ]
        },
        {
            id: 2,
            name: '李老师',
            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20music%20teacher%20portrait%20asian%20woman%20smiling&image_size=square',
            instruments: ['尤克里里', '拇指琴'],
            bio: '5年尤克里里教学经验，擅长流行曲目改编。教学风格活泼有趣，让学员在轻松愉快的氛围中学习。',
            videos: [
                { title: '尤克里里入门教程', duration: '12:45', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=ukulele%20music%20lesson%20video%20thumbnail&image_size=landscape_4_3' },
                { title: '小星星尤克里里', duration: '8:30', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%20music%20song%20video%20thumbnail&image_size=landscape_4_3' }
            ]
        },
        {
            id: 3,
            name: '王老师',
            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20musician%20portrait%20asian%20man%20playing%20instrument&image_size=square',
            instruments: ['葫芦丝', '巴乌'],
            bio: '国家二级演奏员，从事民族乐器教学20年。教学经验丰富，曾培养多名学员获得全国比赛奖项。',
            videos: [
                { title: '葫芦丝基础教学', duration: '25:00', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hulusi%20chinese%20instrument%20lesson%20thumbnail&image_size=landscape_4_3' },
                { title: '月光下的凤尾竹', duration: '18:20', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=classical%20chinese%20music%20performance%20thumbnail&image_size=landscape_4_3' },
                { title: '葫芦丝演奏技巧', duration: '22:10', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20music%20tutorial%20advanced%20thumbnail&image_size=landscape_4_3' }
            ]
        },
        {
            id: 4,
            name: '陈老师',
            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=young%20music%20teacher%20portrait%20asian%20woman%20creative&image_size=square',
            instruments: ['手碟', '拇指琴'],
            bio: '专注于新兴小众乐器的探索与教学，曾赴海外学习手碟演奏。教学理念创新，注重培养学员的创造力。',
            videos: [
                { title: '手碟入门基础', duration: '30:00', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=handpan%20instrument%20lesson%20video%20thumbnail&image_size=landscape_4_3' },
                { title: '手碟即兴演奏', duration: '15:45', thumbnail: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=music%20improvisation%20performance%20thumbnail&image_size=landscape_4_3' }
            ]
        }
    ];

    const courses = [
        {
            id: 1,
            name: '陶笛入门第一课',
            instrument: '陶笛',
            teacher: '张老师',
            day: '今天',
            date: '2026-04-23',
            time: '19:00-20:00',
            price: 99,
            maxParticipants: 5,
            currentParticipants: 2,
            enrolled: false
        },
        {
            id: 2,
            name: '尤克里里基础和弦',
            instrument: '尤克里里',
            teacher: '李老师',
            day: '今天',
            date: '2026-04-23',
            time: '20:00-21:00',
            price: 89,
            maxParticipants: 5,
            currentParticipants: 4,
            enrolled: true
        },
        {
            id: 3,
            name: '葫芦丝气息控制',
            instrument: '葫芦丝',
            teacher: '王老师',
            day: '明天',
            date: '2026-04-24',
            time: '19:30-20:30',
            price: 109,
            maxParticipants: 5,
            currentParticipants: 1,
            enrolled: false
        },
        {
            id: 4,
            name: '手碟节奏基础',
            instrument: '手碟',
            teacher: '陈老师',
            day: '明天',
            date: '2026-04-24',
            time: '20:00-21:00',
            price: 129,
            maxParticipants: 5,
            currentParticipants: 3,
            enrolled: false
        },
        {
            id: 5,
            name: '拇指琴简单旋律',
            instrument: '拇指琴',
            teacher: '李老师',
            day: '后天',
            date: '2026-04-25',
            time: '18:00-19:00',
            price: 69,
            maxParticipants: 5,
            currentParticipants: 0,
            enrolled: false
        },
        {
            id: 6,
            name: '陶笛进阶技巧',
            instrument: '陶笛',
            teacher: '张老师',
            day: '后天',
            date: '2026-04-25',
            time: '19:00-20:00',
            price: 119,
            maxParticipants: 5,
            currentParticipants: 2,
            enrolled: false
        }
    ];

    const checkinPlans = [
        {
            id: 1,
            instrument: '陶笛',
            icon: '🎵',
            name: '30天陶笛入门打卡',
            totalDays: 30,
            completedDays: 12,
            remindTime: '20:00',
            todayCompleted: false
        },
        {
            id: 2,
            instrument: '尤克里里',
            icon: '🎸',
            name: '21天尤克里里练习',
            totalDays: 21,
            completedDays: 21,
            remindTime: '19:30',
            todayCompleted: true
        },
        {
            id: 3,
            instrument: '葫芦丝',
            icon: '🎶',
            name: '14天葫芦丝基础',
            totalDays: 14,
            completedDays: 5,
            remindTime: '21:00',
            todayCompleted: false
        },
        {
            id: 4,
            instrument: '拇指琴',
            icon: '🎹',
            name: '7天拇指琴入门',
            totalDays: 7,
            completedDays: 3,
            remindTime: '18:00',
            todayCompleted: false
        }
    ];

    const sheetMusic = [
        {
            id: 1,
            name: '天空之城 - 陶笛版',
            instrument: '陶笛',
            format: 'PDF',
            size: '2.5 MB'
        },
        {
            id: 2,
            name: '小星星 - 尤克里里',
            instrument: '尤克里里',
            format: 'PDF',
            size: '1.2 MB'
        },
        {
            id: 3,
            name: '月光下的凤尾竹 - 葫芦丝',
            instrument: '葫芦丝',
            format: 'PDF',
            size: '3.1 MB'
        },
        {
            id: 4,
            name: '卡农 - 拇指琴',
            instrument: '拇指琴',
            format: 'PDF',
            size: '1.8 MB'
        },
        {
            id: 5,
            name: '欢乐颂 - 陶笛',
            instrument: '陶笛',
            format: 'PDF',
            size: '1.5 MB'
        },
        {
            id: 6,
            name: '雪绒花 - 尤克里里',
            instrument: '尤克里里',
            format: 'PDF',
            size: '1.3 MB'
        }
    ];

    const days = ['今天', '明天', '后天'];
    const instruments = ['全部', '陶笛', '尤克里里', '葫芦丝', '拇指琴', '手碟'];

    // 状态管理
    let currentPage = 'home';
    let currentDay = '今天';
    let currentInstrument = '全部';
    let userInfo = {
        username: '音乐爱好者',
        avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=user%20avatar%20musician%20profile%20picture&image_size=square'
    };

    // DOM元素
    const pages = {
        home: document.getElementById('home-page'),
        courses: document.getElementById('courses-page'),
        checkin: document.getElementById('checkin-page'),
        profile: document.getElementById('profile-page')
    };

    const navItems = document.querySelectorAll('.nav-item');
    const teachersList = document.getElementById('teachers-list');
    const coursesList = document.getElementById('courses-list');
    const daySelector = document.getElementById('day-selector');
    const instrumentTabs = document.getElementById('instrument-tabs');
    const checkinPlansContainer = document.getElementById('checkin-plans');

    // 页面切换函数
    function switchPage(pageName) {
        currentPage = pageName;
        
        // 隐藏所有页面
        Object.keys(pages).forEach(key => {
            pages[key].classList.remove('active');
        });
        
        // 显示目标页面
        pages[pageName].classList.add('active');
        
        // 更新导航栏状态
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === pageName) {
                item.classList.add('active');
            }
        });

        // 渲染对应页面内容
        if (pageName === 'home') {
            renderTeachersList();
        } else if (pageName === 'courses') {
            renderDaySelector();
            renderCoursesList();
        } else if (pageName === 'checkin') {
            renderInstrumentTabs();
            renderCheckinPlans();
        } else if (pageName === 'profile') {
            updateUserInfo();
        }
    }

    // 渲染老师列表
    function renderTeachersList(filterText = '') {
        let filteredTeachers = teachers;
        
        if (filterText) {
            filteredTeachers = teachers.filter(teacher => {
                const nameMatch = teacher.name.includes(filterText);
                const instrumentMatch = teacher.instruments.some(inst => inst.includes(filterText));
                return nameMatch || instrumentMatch;
            });
        }

        teachersList.innerHTML = filteredTeachers.map(teacher => `
            <div class="teacher-card" data-teacher-id="${teacher.id}">
                <div class="teacher-header">
                    <img src="${teacher.avatar}" alt="${teacher.name}" class="teacher-avatar">
                    <div class="teacher-info">
                        <h3>${teacher.name}</h3>
                        <div class="teacher-instruments">${teacher.instruments.join(' / ')}</div>
                    </div>
                </div>
                <div class="teacher-bio">${teacher.bio}</div>
                <div class="teacher-videos">
                    ${teacher.videos.map(video => `
                        <div style="position: relative;">
                            <img src="${video.thumbnail}" alt="${video.title}" class="video-thumbnail">
                            <span class="play-icon">▶</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.teacher-card').forEach(card => {
            card.addEventListener('click', () => {
                const teacherId = parseInt(card.dataset.teacherId);
                openTeacherModal(teacherId);
            });
        });
    }

    // 打开老师详情弹窗
    function openTeacherModal(teacherId) {
        const teacher = teachers.find(t => t.id === teacherId);
        if (!teacher) return;

        const modal = document.getElementById('teacher-modal');
        const modalTeacherName = document.getElementById('modal-teacher-name');
        const modalBody = document.getElementById('teacher-modal-body');

        modalTeacherName.textContent = teacher.name;
        modalBody.innerHTML = `
            <div class="modal-teacher-info">
                <img src="${teacher.avatar}" alt="${teacher.name}" class="modal-teacher-avatar">
                <div class="modal-teacher-details">
                    <h3>${teacher.name}</h3>
                    <div class="modal-teacher-instruments">${teacher.instruments.join(' / ')}</div>
                </div>
            </div>
            
            <div class="modal-section">
                <div class="modal-section-title">老师介绍</div>
                <div class="modal-bio">${teacher.bio}</div>
            </div>
            
            <div class="modal-section">
                <div class="modal-section-title">教学视频</div>
                <div class="modal-videos">
                    ${teacher.videos.map(video => `
                        <div class="modal-video-item">
                            <div style="position: relative;">
                                <img src="${video.thumbnail}" alt="${video.title}" class="modal-video-thumbnail">
                                <span class="play-icon">▶</span>
                            </div>
                            <div class="modal-video-info">
                                <div class="modal-video-title">${video.title}</div>
                                <div class="modal-video-duration">时长: ${video.duration}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        modal.classList.add('active');
    }

    // 渲染日期选择器
    function renderDaySelector() {
        daySelector.innerHTML = days.map(day => `
            <button class="day-btn ${day === currentDay ? 'active' : ''}" data-day="${day}">
                ${day}
            </button>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.day-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentDay = btn.dataset.day;
                renderDaySelector();
                renderCoursesList();
            });
        });
    }

    // 渲染课程列表
    function renderCoursesList() {
        const filteredCourses = courses.filter(course => course.day === currentDay);

        if (filteredCourses.length === 0) {
            coursesList.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #999;">
                    暂无课程安排
                </div>
            `;
            return;
        }

        coursesList.innerHTML = filteredCourses.map(course => {
            const progressPercent = (course.currentParticipants / course.maxParticipants) * 100;
            const isFull = course.currentParticipants >= course.maxParticipants;
            
            return `
                <div class="course-card" data-course-id="${course.id}">
                    <div class="course-header">
                        <div>
                            <div class="course-name">${course.name}</div>
                            <div style="font-size: 13px; color: #999;">${course.teacher}</div>
                        </div>
                        <span class="course-instrument">${course.instrument}</span>
                    </div>
                    <div class="course-details">
                        <span class="course-time">⏰ ${course.time}</span>
                        <span class="course-price">¥${course.price}</span>
                    </div>
                    <div class="course-participants">
                        <span class="participants-count">
                            已报名 ${course.currentParticipants}/${course.maxParticipants} 人
                        </span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${progressPercent}%"></div>
                        </div>
                    </div>
                    <div class="course-actions">
                        ${course.enrolled ? `
                            <button class="primary-btn cancel-btn" data-action="cancel">取消报名</button>
                        ` : `
                            <button class="primary-btn enroll-btn" data-action="enroll" ${isFull ? 'disabled' : ''}>
                                ${isFull ? '已满' : '立即报名'}
                            </button>
                        `}
                    </div>
                </div>
            `;
        }).join('');

        // 添加报名/取消事件
        document.querySelectorAll('.course-card').forEach(card => {
            const courseId = parseInt(card.dataset.courseId);
            const enrollBtn = card.querySelector('[data-action="enroll"]');
            const cancelBtn = card.querySelector('[data-action="cancel"]');

            if (enrollBtn) {
                enrollBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    enrollCourse(courseId);
                });
            }

            if (cancelBtn) {
                cancelBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    cancelEnrollment(courseId);
                });
            }
        });
    }

    // 报名课程
    function enrollCourse(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (course && !course.enrolled && course.currentParticipants < course.maxParticipants) {
            course.enrolled = true;
            course.currentParticipants++;
            renderCoursesList();
            alert('报名成功！');
        }
    }

    // 取消报名
    function cancelEnrollment(courseId) {
        const course = courses.find(c => c.id === courseId);
        if (course && course.enrolled) {
            if (confirm('确定要取消报名吗？')) {
                course.enrolled = false;
                course.currentParticipants--;
                renderCoursesList();
                alert('已取消报名');
            }
        }
    }

    // 渲染乐器分类标签
    function renderInstrumentTabs() {
        instrumentTabs.innerHTML = instruments.map(inst => `
            <button class="tab-btn ${inst === currentInstrument ? 'active' : ''}" data-instrument="${inst}">
                ${inst}
            </button>
        `).join('');

        // 添加点击事件
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                currentInstrument = btn.dataset.instrument;
                renderInstrumentTabs();
                renderCheckinPlans();
            });
        });
    }

    // 渲染打卡计划列表
    function renderCheckinPlans() {
        let filteredPlans = checkinPlans;
        
        if (currentInstrument !== '全部') {
            filteredPlans = checkinPlans.filter(plan => plan.instrument === currentInstrument);
        }

        if (filteredPlans.length === 0) {
            checkinPlansContainer.innerHTML = `
                <div style="text-align: center; padding: 40px; color: #999;">
                    暂无打卡计划
                </div>
            `;
            return;
        }

        checkinPlansContainer.innerHTML = filteredPlans.map(plan => {
            const progressPercent = (plan.completedDays / plan.totalDays) * 100;
            const statusClass = plan.todayCompleted ? 'status-completed' : 'status-pending';
            const statusText = plan.todayCompleted ? '已完成' : '待打卡';
            
            return `
                <div class="checkin-card" data-plan-id="${plan.id}">
                    <div class="checkin-header">
                        <div class="checkin-instrument">
                            <span class="instrument-icon">${plan.icon}</span>
                            <span class="instrument-name">${plan.name}</span>
                        </div>
                        <span class="checkin-status ${statusClass}">${statusText}</span>
                    </div>
                    <div class="checkin-details">
                        <div class="detail-item">
                            <div class="detail-label">总天数</div>
                            <div class="detail-value">${plan.totalDays}天</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">已完成</div>
                            <div class="detail-value">${plan.completedDays}天</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">提醒时间</div>
                            <div class="detail-value">${plan.remindTime}</div>
                        </div>
                    </div>
                    <div class="checkin-progress">
                        <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                </div>
            `;
        }).join('');

        // 添加点击事件
        document.querySelectorAll('.checkin-card').forEach(card => {
            card.addEventListener('click', () => {
                const planId = parseInt(card.dataset.planId);
                openCheckinModal(planId);
            });
        });
    }

    // 打开打卡详情弹窗
    function openCheckinModal(planId) {
        const plan = checkinPlans.find(p => p.id === planId);
        if (!plan) return;

        const modal = document.getElementById('checkin-modal');
        const modalCheckinName = document.getElementById('modal-checkin-name');
        const modalBody = document.getElementById('checkin-modal-body');

        modalCheckinName.textContent = plan.name;

        // 生成每日打卡列表
        const dailyList = [];
        for (let i = 1; i <= plan.totalDays; i++) {
            const isCompleted = i <= plan.completedDays;
            dailyList.push({
                day: i,
                completed: isCompleted,
                isToday: i === plan.completedDays + 1 && !plan.todayCompleted
            });
        }

        modalBody.innerHTML = `
            <div class="checkin-detail-header">
                <span class="checkin-detail-icon">${plan.icon}</span>
                <span class="checkin-detail-name">${plan.name}</span>
            </div>
            
            <div class="checkin-detail-info">
                <div class="checkin-info-item">
                    <div class="checkin-info-label">总天数</div>
                    <div class="checkin-info-value">${plan.totalDays}天</div>
                </div>
                <div class="checkin-info-item">
                    <div class="checkin-info-label">已完成</div>
                    <div class="checkin-info-value">${plan.completedDays}天</div>
                </div>
                <div class="checkin-info-item">
                    <div class="checkin-info-label">完成率</div>
                    <div class="checkin-info-value">${Math.round((plan.completedDays / plan.totalDays) * 100)}%</div>
                </div>
                <div class="checkin-info-item">
                    <div class="checkin-info-label">提醒时间</div>
                    <div class="checkin-info-value">${plan.remindTime}</div>
                </div>
            </div>
            
            <div class="modal-section">
                <div class="modal-section-title">每日打卡</div>
                <div class="checkin-daily-list">
                    ${dailyList.map(item => `
                        <div class="checkin-daily-item">
                            <span class="checkin-day-label">
                                第${item.day}天${item.isToday ? ' (今天)' : ''}
                            </span>
                            <span class="checkin-day-status ${item.completed ? 'completed' : 'pending'}">
                                ${item.completed ? '已完成' : '待完成'}
                            </span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${!plan.todayCompleted ? `
                <button class="checkin-action-btn do-checkin" data-plan-id="${plan.id}">
                    今日打卡
                </button>
            ` : `
                <button class="checkin-action-btn do-checkin" disabled>
                    今日已打卡
                </button>
            `}
        `;

        // 添加打卡按钮事件
        const checkinBtn = modalBody.querySelector('.do-checkin');
        if (checkinBtn && !plan.todayCompleted) {
            checkinBtn.addEventListener('click', () => {
                doCheckin(planId);
            });
        }

        modal.classList.add('active');
    }

    // 执行打卡
    function doCheckin(planId) {
        const plan = checkinPlans.find(p => p.id === planId);
        if (plan && !plan.todayCompleted) {
            plan.todayCompleted = true;
            plan.completedDays++;
            alert('打卡成功！继续加油！');
            renderCheckinPlans();
            document.getElementById('checkin-modal').classList.remove('active');
        }
    }

    // 更新用户信息显示
    function updateUserInfo() {
        const userAvatar = document.getElementById('user-avatar');
        const userUsername = document.getElementById('user-username');
        
        userAvatar.src = userInfo.avatar;
        userUsername.textContent = userInfo.username;
    }

    // 打开乐谱弹窗
    function openSheetModal() {
        const modal = document.getElementById('sheet-modal');
        const modalBody = document.getElementById('sheet-modal-body');

        modalBody.innerHTML = `
            <div class="sheet-list">
                ${sheetMusic.map(sheet => `
                    <div class="sheet-item">
                        <div class="sheet-info">
                            <div class="sheet-name">${sheet.name}</div>
                            <div class="sheet-instrument">
                                ${sheet.instrument} · ${sheet.format} · ${sheet.size}
                            </div>
                        </div>
                        <button class="sheet-download-btn" data-sheet-id="${sheet.id}">
                            下载
                        </button>
                    </div>
                `).join('')}
            </div>
        `;

        // 添加下载事件
        document.querySelectorAll('.sheet-download-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sheetId = parseInt(btn.dataset.sheetId);
                downloadSheet(sheetId);
            });
        });

        modal.classList.add('active');
    }

    // 下载乐谱
    function downloadSheet(sheetId) {
        const sheet = sheetMusic.find(s => s.id === sheetId);
        if (sheet) {
            alert(`正在下载: ${sheet.name}\n\n（这是演示，实际项目中会下载真实的PDF文件）`);
        }
    }

    // 打开编辑用户名弹窗
    function openEditUsernameModal() {
        const modal = document.getElementById('edit-username-modal');
        const input = document.getElementById('new-username-input');
        input.value = userInfo.username;
        modal.classList.add('active');
    }

    // 保存用户名
    function saveUsername() {
        const input = document.getElementById('new-username-input');
        const newUsername = input.value.trim();
        
        if (newUsername) {
            userInfo.username = newUsername;
            updateUserInfo();
            document.getElementById('edit-username-modal').classList.remove('active');
        } else {
            alert('用户名不能为空');
        }
    }

    // 事件绑定
    function initEvents() {
        // 导航栏切换
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                const pageName = item.dataset.page;
                switchPage(pageName);
            });
        });

        // 老师搜索
        const searchInput = document.getElementById('teacher-search');
        let searchTimeout;
        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                renderTeachersList(searchInput.value);
            }, 300);
        });

        // 关闭弹窗按钮
        document.getElementById('close-teacher-modal').addEventListener('click', () => {
            document.getElementById('teacher-modal').classList.remove('active');
        });

        document.getElementById('close-course-modal').addEventListener('click', () => {
            document.getElementById('course-modal').classList.remove('active');
        });

        document.getElementById('close-checkin-modal').addEventListener('click', () => {
            document.getElementById('checkin-modal').classList.remove('active');
        });

        document.getElementById('close-sheet-modal').addEventListener('click', () => {
            document.getElementById('sheet-modal').classList.remove('active');
        });

        document.getElementById('close-username-modal').addEventListener('click', () => {
            document.getElementById('edit-username-modal').classList.remove('active');
        });

        // 点击弹窗外部关闭
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                }
            });
        });

        // 我的页面菜单
        document.getElementById('menu-sheet').addEventListener('click', openSheetModal);
        document.getElementById('menu-settings').addEventListener('click', () => {
            alert('设置功能开发中...');
        });

        // 编辑头像和用户名
        document.getElementById('edit-avatar-btn').addEventListener('click', () => {
            alert('头像编辑功能：在实际项目中会打开文件选择器上传新头像');
        });

        document.getElementById('edit-username-btn').addEventListener('click', openEditUsernameModal);
        document.getElementById('save-username-btn').addEventListener('click', saveUsername);

        // 回车键保存用户名
        document.getElementById('new-username-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                saveUsername();
            }
        });
    }

    // 初始化应用
    function init() {
        initEvents();
        switchPage('home');
    }

    // 启动应用
    init();
});
