const jobData = [
    {
        id: '1',
        company: 'Mobile First Corp',
        position: 'React Native Developer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$130,000 - $175,000',
        description: 'Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.',
        status: null
    },
    {
        id: '2',
        company: 'WebFlow Agency',
        position: 'Web Designer & Developer',
        location: 'Los Angeles, CA',
        type: 'Part-time',
        salary: '$80,000 - $120,000',
        description: 'Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.',
        status: null
    },
    {
        id: '3',
        company: 'DataViz Solutions',
        position: 'Data Visualization Specialist',
        location: 'Boston, MA',
        type: 'Full-time',
        salary: '$125,000 - $165,000',
        description: 'Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.',
        status: null
    },
    {
        id: '4',
        company: 'CloudFirst Inc',
        position: 'Backend Developer',
        location: 'Seattle, WA',
        type: 'Full-time',
        salary: '$140,000 - $190,000',
        description: 'Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.',
        status: null
    },
    {
        id: '5',
        company: 'Innovation Labs',
        position: 'UI/UX Engineer',
        location: 'Austin, TX',
        type: 'Full-time',
        salary: '$110,000 - $150,000',
        description: 'Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.',
        status: null
    },
    {
        id: '6',
        company: 'MegaCorp Solutions',
        position: 'JavaScript Developer',
        location: 'New York, NY',
        type: 'Full-time',
        salary: '$130,000 - $170,000',
        description: 'Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.',
        status: null
    },
    {
        id: '7',
        company: 'StartupXYZ',
        position: 'Full Stack Engineer',
        location: 'Remote',
        type: 'Full-time',
        salary: '$120,000 - $160,000',
        description: 'Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.',
        status: null
    },
    {
        id: '8',
        company: 'TechCorp Industries',
        position: 'Senior Frontend Developer',
        location: 'San Francisco, CA',
        type: 'Full-time',
        salary: '$130,000 - $175,000',
        description: 'We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.',
        status: null
    }
];

let jobs = [];
for (let i = 0; i < jobData.length; i++) {
    jobs.push({
        id: jobData[i].id,
        company: jobData[i].company,
        position: jobData[i].position,
        location: jobData[i].location,
        type: jobData[i].type,
        salary: jobData[i].salary,
        description: jobData[i].description,
        status: jobData[i].status
    });
}

const TOTAL_JOBS = 8;
let currentTab = 'all';

const jobsContainer = document.getElementById('jobsContainer');
const totalStats = document.getElementById('totalStats');
const interviewStats = document.getElementById('interviewStats');
const rejectedStats = document.getElementById('rejectedStats');
const availableJobsCount = document.getElementById('availableJobsCount');

const tabAll = document.getElementById('tabAll');
const tabInterview = document.getElementById('tabInterview');
const tabRejected = document.getElementById('tabRejected');

function updateStats() {
    let interviewCount = 0;
    let rejectedCount = 0;
    
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === 'interview') {
            interviewCount++;
        } else if (jobs[i].status === 'rejected') {
            rejectedCount++;
        }
    }
    
    const totalCount = jobs.length;

    totalStats.textContent = totalCount;
    interviewStats.textContent = interviewCount;
    rejectedStats.textContent = rejectedCount;
    
    if (currentTab === 'all') {
        availableJobsCount.textContent = totalCount;
    } else if (currentTab === 'interview') {
        availableJobsCount.textContent = interviewCount + ' out of ' + TOTAL_JOBS + ' jobs';
    } else if (currentTab === 'rejected') {
        availableJobsCount.textContent = rejectedCount + ' out of ' + TOTAL_JOBS + ' jobs';
    }
}

function updateActiveTab(tabId) {
    currentTab = tabId;
    
    tabAll.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all text-white/90 hover:bg-white/20 flex-1 sm:flex-none';
    tabInterview.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all text-white/90 hover:bg-white/20 flex-1 sm:flex-none';
    tabRejected.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all text-white/90 hover:bg-white/20 flex-1 sm:flex-none';
    
    if (tabId === 'all') {
        tabAll.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all tab-active flex-1 sm:flex-none';
    } else if (tabId === 'interview') {
        tabInterview.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all tab-active flex-1 sm:flex-none';
    } else {
        tabRejected.className = 'tab px-6 py-2.5 rounded-full text-sm font-medium transition-all tab-active flex-1 sm:flex-none';
    }
    updateStats();
}
function createJobCard(job) {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card bg-gradient-to-br from-white to-slate-50 shadow-xl rounded-box p-6 mb-4 relative group border border-slate-200';
    cardDiv.setAttribute('data-id', job.id);
    
    let statusText = 'NOT APPLIED';
    let statusClass = 'text-slate-500';
    let isInterviewDisabled = false;
    let isRejectedDisabled = false;
    
    if (job.status === 'interview') {
        statusText = 'INTERVIEW';
        statusClass = 'text-emerald-600 font-semibold';
        isInterviewDisabled = true;
    } else if (job.status === 'rejected') {
        statusText = 'REJECTED';
        statusClass = 'text-rose-600 font-semibold';
        isRejectedDisabled = true;
    }
    
    cardDiv.innerHTML = `
        <button class="delete-btn btn btn-circle btn-sm absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all bg-white hover:bg-rose-100 border-none shadow-md" data-id="${job.id}">
            <i class="fas fa-trash-alt text-rose-500"></i>
        </button>

        <div class="flex items-start gap-3 mb-3">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                ${job.company.charAt(0)}
            </div>
            <div class="flex-1">
                <h3 class="text-xl font-bold text-slate-800 pr-8">${job.company}</h3>
                <p class="text-slate-600 font-medium">${job.position}</p>
            </div>
        </div>
        
        <div class="flex flex-wrap gap-2 mb-3">
            <span class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1">
                <i class="fas fa-map-marker-alt text-blue-600 text-xs"></i> ${job.location}
            </span>
            <span class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium flex items-center gap-1">
                <i class="fas fa-clock text-purple-600 text-xs"></i> ${job.type}
            </span>
            <span class="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium flex items-center gap-1">
                <i class="fas fa-dollar-sign text-emerald-500 text-xs"></i> ${job.salary}
            </span>
        </div>
        
        <div class="mb-3">
            <span class="px-3 py-1 ${job.status === 'interview' ? 'bg-emerald-100' : job.status === 'rejected' ? 'bg-rose-100' : 'bg-slate-100'} rounded-full text-xs font-medium inline-block">
                <p class="job-status ${statusClass} text-sm">${statusText}</p>
            </span>
        </div>
        
        <p class="text-slate-600 mb-4 text-sm leading-relaxed">${job.description}</p>
        
        <div class="flex gap-2 mt-4">
            <button class="interview-btn btn btn-sm action-btn ${isInterviewDisabled ? 'btn-disabled bg-slate-200 text-slate-500' : 'bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-none shadow-md'}" data-id="${job.id}" ${isInterviewDisabled ? 'disabled' : ''}>
                <i class="fas fa-thumbs-up mr-1"></i>INTERVIEW
            </button>
            <button class="rejected-btn btn btn-sm action-btn ${isRejectedDisabled ? 'btn-disabled bg-slate-200 text-slate-500' : 'bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-none shadow-md'}" data-id="${job.id}" ${isRejectedDisabled ? 'disabled' : ''}>
                <i class="fas fa-thumbs-down mr-1"></i>REJECTED
            </button>
        </div>
    `;
    
    return cardDiv;
}

function updateJobCard(job) {
    const card = document.querySelector(`[data-id="${job.id}"]`);
    if (!card) return;
    
    const statusEl = card.querySelector('.job-status');
    const interviewBtn = card.querySelector('.interview-btn');
    const rejectedBtn = card.querySelector('.rejected-btn');
    const statusBg = card.querySelector('.job-status').parentElement;
    
    if (job.status === 'interview') {
        statusEl.textContent = 'INTERVIEW';
        statusEl.className = 'job-status text-emerald-600 font-semibold text-sm';
        statusBg.className = 'px-3 py-1 bg-emerald-100 rounded-full text-xs font-medium inline-block';
        interviewBtn.className = 'interview-btn btn btn-sm action-btn btn-disabled bg-slate-200 text-slate-500';
        interviewBtn.disabled = true;
        rejectedBtn.className = 'rejected-btn btn btn-sm action-btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-none shadow-md';
        rejectedBtn.disabled = false;
    } else if (job.status === 'rejected') {
        statusEl.textContent = 'REJECTED';
        statusEl.className = 'job-status text-rose-600 font-semibold text-sm';
        statusBg.className = 'px-3 py-1 bg-rose-100 rounded-full text-xs font-medium inline-block';
        rejectedBtn.className = 'rejected-btn btn btn-sm action-btn btn-disabled bg-slate-200 text-slate-500';
        rejectedBtn.disabled = true;
        interviewBtn.className = 'interview-btn btn btn-sm action-btn bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-none shadow-md';
        interviewBtn.disabled = false;
    } else {
        statusEl.textContent = 'NOT APPLIED';
        statusEl.className = 'job-status text-slate-500 text-sm';
        statusBg.className = 'px-3 py-1 bg-slate-100 rounded-full text-xs font-medium inline-block';
        interviewBtn.className = 'interview-btn btn btn-sm action-btn bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white border-none shadow-md';
        interviewBtn.disabled = false;
        rejectedBtn.className = 'rejected-btn btn btn-sm action-btn bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white border-none shadow-md';
        rejectedBtn.disabled = false;
    }
}

function filterAndDisplayJobs() {
    const scrollPos = window.scrollY;
    
    let visibleJobs = [];
    
    if (currentTab === 'all') {
        visibleJobs = jobs;
    } else if (currentTab === 'interview') {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].status === 'interview') {
                visibleJobs.push(jobs[i]);
            }
        }
    } else {
        for (let i = 0; i < jobs.length; i++) {
            if (jobs[i].status === 'rejected') {
                visibleJobs.push(jobs[i]);
            }
        }
    }

    jobsContainer.style.opacity = '0';
    
    setTimeout(() => {
        jobsContainer.innerHTML = '';
        
        if (visibleJobs.length === 0) {
            const emptyDiv = document.createElement('div');
            emptyDiv.className = 'text-center py-16 bg-white/90 backdrop-blur-sm rounded-box shadow-xl';
            emptyDiv.innerHTML = `
                <i class="fas fa-briefcase text-6xl text-slate-300 mb-4"></i>
                <h3 class="text-2xl font-semibold text-slate-700 mb-2">No jobs available</h3>
                <p class="text-slate-500">Check back soon for new job opportunities</p>
            `;
            jobsContainer.appendChild(emptyDiv);
        } else {
            for (let i = 0; i < visibleJobs.length; i++) {
                const card = createJobCard(visibleJobs[i]);
                jobsContainer.appendChild(card);
            }
        }
        
        jobsContainer.style.opacity = '1';
        attachEventListeners();
        
        window.scrollTo(0, scrollPos);
    }, 50);
}

function attachEventListeners() {
    const interviewButtons = document.querySelectorAll('.interview-btn:not(.btn-disabled)');
    for (let i = 0; i < interviewButtons.length; i++) {
        const btn = interviewButtons[i];
        btn.removeEventListener('click', handleInterviewClick);
        btn.addEventListener('click', handleInterviewClick);
    }

    const rejectedButtons = document.querySelectorAll('.rejected-btn:not(.btn-disabled)');
    for (let i = 0; i < rejectedButtons.length; i++) {
        const btn = rejectedButtons[i];
        btn.removeEventListener('click', handleRejectedClick);
        btn.addEventListener('click', handleRejectedClick);
    }

    const deleteButtons = document.querySelectorAll('.delete-btn');
    for (let i = 0; i < deleteButtons.length; i++) {
        const btn = deleteButtons[i];
        btn.removeEventListener('click', handleDeleteClick);
        btn.addEventListener('click', handleDeleteClick);
    }
}

function handleInterviewClick(e) {
    e.stopPropagation();
    const jobId = e.currentTarget.dataset.id;
    changeJobStatus(jobId, 'interview');
}

function handleRejectedClick(e) {
    e.stopPropagation();
    const jobId = e.currentTarget.dataset.id;
    changeJobStatus(jobId, 'rejected');
}

function handleDeleteClick(e) {
    e.stopPropagation();
    const jobId = e.currentTarget.dataset.id;
    deleteJob(jobId);
}

function changeJobStatus(jobId, newStatus) {
    let jobIndex = -1;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === jobId) {
            jobIndex = i;
            break;
        }
    }
    
    if (jobIndex === -1) return;

    if (jobs[jobIndex].status === newStatus) {
        jobs[jobIndex].status = null;
    } else {
        jobs[jobIndex].status = newStatus;
    }

    updateJobCard(jobs[jobIndex]);
    updateStats();
}

function deleteJob(jobId) {
    let jobIndex = -1;
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].id === jobId) {
            jobIndex = i;
            break;
        }
    }
    
    if (jobIndex === -1) return;
    
    let newJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (i !== jobIndex) {
            newJobs.push(jobs[i]);
        }
    }
    jobs = newJobs;
    
    const card = document.querySelector(`[data-id="${jobId}"]`);
    if (card) {
        card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.remove();
            if (currentTab !== 'all') {
                filterAndDisplayJobs();
            }
            updateStats();
        }, 200);
    } else {
        updateStats();
    }
}

tabAll.addEventListener('click', function() {
    updateActiveTab('all');
    filterAndDisplayJobs();
});

tabInterview.addEventListener('click', function() {
    updateActiveTab('interview');
    filterAndDisplayJobs();
});

tabRejected.addEventListener('click', function() {
    updateActiveTab('rejected');
    filterAndDisplayJobs();
});

filterAndDisplayJobs();
updateStats();