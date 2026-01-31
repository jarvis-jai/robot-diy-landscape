/**
 * Raijax Demo - 3-step wizard for finding your robot learning path
 */

// State
let currentStep = 1;
let selections = {
    who: null,
    what: null,
    level: null
};
let demoMap = null;

// DOM Elements
const progressDots = document.querySelectorAll('.progress-dot');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const wizardNav = document.getElementById('wizardNav');
const wizardSteps = document.getElementById('wizardSteps');
const resultContainer = document.getElementById('resultContainer');
const hero = document.getElementById('hero');

// Initialize
async function init() {
    // Load demo map
    try {
        const res = await fetch('data/raijax_demo_map.json');
        demoMap = await res.json();
    } catch (e) {
        console.error('Failed to load demo map:', e);
    }
    
    // Setup option click handlers
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', handleOptionClick);
    });
    
    // Setup navigation
    prevBtn.addEventListener('click', goBack);
    nextBtn.addEventListener('click', goNext);
    document.getElementById('restartBtn').addEventListener('click', restart);
    
    // Initial state
    updateUI();
}

function handleOptionClick(e) {
    const btn = e.currentTarget;
    const value = btn.dataset.value;
    const step = currentStep;
    
    // Clear previous selection in this step
    const options = btn.parentElement.querySelectorAll('.option-btn');
    options.forEach(o => o.classList.remove('selected'));
    
    // Select this option
    btn.classList.add('selected');
    
    // Store selection
    if (step === 1) selections.who = value;
    if (step === 2) selections.what = value;
    if (step === 3) selections.level = value;
    
    // Enable next button
    nextBtn.disabled = false;
}

function goBack() {
    if (currentStep > 1) {
        currentStep--;
        updateUI();
    }
}

function goNext() {
    if (currentStep < 3) {
        currentStep++;
        updateUI();
    } else {
        // Show result
        showResult();
    }
}

function updateUI() {
    // Update progress dots
    progressDots.forEach(dot => {
        const dotStep = parseInt(dot.dataset.step);
        dot.classList.remove('active', 'done');
        if (dotStep === currentStep) {
            dot.classList.add('active');
        } else if (dotStep < currentStep) {
            dot.classList.add('done');
        }
    });
    
    // Show/hide steps
    step1.classList.toggle('hidden', currentStep !== 1);
    step2.classList.toggle('hidden', currentStep !== 2);
    step3.classList.toggle('hidden', currentStep !== 3);
    
    // Update nav buttons
    prevBtn.disabled = currentStep === 1;
    
    // Check if current step has selection
    const currentSelection = currentStep === 1 ? selections.who : 
                            currentStep === 2 ? selections.what : 
                            selections.level;
    nextBtn.disabled = !currentSelection;
    
    // Update next button text
    nextBtn.textContent = currentStep === 3 ? '查看結果 →' : '下一步 →';
    
    // Hero visibility
    hero.style.opacity = currentStep === 1 ? '1' : '0.5';
    hero.style.transform = currentStep === 1 ? 'scale(1)' : 'scale(0.9)';
}

function showResult() {
    // Hide wizard, show result
    wizardSteps.classList.add('hidden');
    wizardNav.classList.add('hidden');
    hero.classList.add('hidden');
    document.getElementById('progressBar').classList.add('hidden');
    resultContainer.classList.remove('hidden');
    
    // Determine path
    const pathKey = determinePathKey();
    const path = demoMap.paths[pathKey];
    const resources = demoMap.resources[pathKey] || [];
    const warning = demoMap.warnings[pathKey] || '';
    
    // Update result content
    document.getElementById('pathName').textContent = path.name;
    document.getElementById('pathDesc').textContent = path.description;
    
    // Populate resources
    const resourceList = document.getElementById('resourceList');
    resourceList.innerHTML = resources.map(r => `
        <div class="resource-item">
            <span class="emoji">${r.emoji}</span>
            <div class="info">
                <div class="name">${r.name}</div>
                <div class="type">${r.type}</div>
            </div>
            <a href="${r.link}" target="_blank">前往 →</a>
        </div>
    `).join('');
    
    // Set warning
    document.getElementById('warningText').textContent = warning;
    
    // Update result header
    document.getElementById('resultSummary').textContent = 
        `你是 ${getWhoLabel(selections.who)}，想做 ${getWhatLabel(selections.what)}，目前 ${getLevelLabel(selections.level)}`;
}

function determinePathKey() {
    const { who, what, level } = selections;
    const routing = demoMap.routing;
    
    // Try exact match first
    const exactKey = `${who}|${what}|${level}`;
    if (routing[exactKey]) return routing[exactKey];
    
    // Try wildcard matches
    const patterns = [
        `${who}|${what}|*`,
        `${who}|*|${level}`,
        `*|${what}|${level}`,
        `${who}|*|*`,
        `*|${what}|*`,
        `*|*|${level}`,
        `*|*|*`
    ];
    
    for (const pattern of patterns) {
        if (routing[pattern]) return routing[pattern];
    }
    
    // Default
    return 'explore';
}

function getWhoLabel(value) {
    const labels = {
        'beginner': '完全新手',
        'maker': 'Maker/DIY 愛好者',
        'dev': '軟體開發者',
        'academic': '學生/研究者',
        'engineer': '機器人工程師'
    };
    return labels[value] || value;
}

function getWhatLabel(value) {
    const labels = {
        'arm': '機械手臂',
        'mobile': '移動機器人',
        'legged': '四足/多足',
        'humanoid': '人形機器人',
        'home': '家用/服務',
        'creative': '藝術/創意',
        'explore': '還不確定'
    };
    return labels[value] || value;
}

function getLevelLabel(value) {
    const labels = {
        'level-0': '零基礎',
        'level-1': '有 Arduino 經驗',
        'level-2': '會 Python + ML',
        'level-3': '接觸過 ROS',
        'level-4': '進階/專業'
    };
    return labels[value] || value;
}

function restart() {
    // Reset state
    currentStep = 1;
    selections = { who: null, what: null, level: null };
    
    // Clear selections
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Show wizard, hide result
    wizardSteps.classList.remove('hidden');
    wizardNav.classList.remove('hidden');
    hero.classList.remove('hidden');
    document.getElementById('progressBar').classList.remove('hidden');
    resultContainer.classList.add('hidden');
    
    // Update UI
    updateUI();
}

// Start
document.addEventListener('DOMContentLoaded', init);
