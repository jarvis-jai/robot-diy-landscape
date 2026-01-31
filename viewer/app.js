/**
 * Robot DIY Landscape Dashboard
 * Lightweight local viewer for browsing landscape data
 */

// Global state
let allItems = [];
let filteredItems = [];
let manifest = {};
let currentCategory = null;
let currentTypeFilter = '';
let searchQuery = '';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const typeFilter = document.getElementById('typeFilter');
const listView = document.getElementById('listView');
const detailView = document.getElementById('detailView');
const itemList = document.getElementById('itemList');
const listTitle = document.getElementById('listTitle');
const listCount = document.getElementById('listCount');
const detailContent = document.getElementById('detailContent');
const backBtn = document.getElementById('backBtn');
const statsEl = document.getElementById('stats');

// Category display names
const categoryNames = {
    'landscape/communities': '👥 Communities',
    'landscape/platforms': '🌐 Platforms',
    'landscape/toolchains': '🔧 Toolchains',
    'landscape/hardware': '🔩 Hardware',
    'landscape/kits': '📦 Kits',
    'landscape/learning': '📚 Learning',
    'landscape/commerce': '🛒 Commerce',
    'landscape/creators': '🎬 Creators',
    'landscape/chinese_ecosystem': '🇹🇼 中文生態',
    'landscape/index': '📑 Index',
    'gaps/gaps_hypotheses': '🔍 Gap Hypotheses',
    'gaps/opportunity_wedges': '🔺 Opportunity Wedges',
    'framework/README': '📖 README',
    'framework/CONSTITUTION': '📜 CONSTITUTION',
    'framework/WORK_QUEUE': '📋 WORK_QUEUE',
    'framework/COMMIT_POLICY': '📝 COMMIT_POLICY',
    'framework/SOURCES': '📚 SOURCES',
    'framework/ROADMAP': '🗺️ ROADMAP',
    'raijax-entry/home_decision_flow': '🏠 首頁決策流程',
    'raijax-entry/sitemap': '🗺️ Sitemap',
    'raijax-entry/learning_paths': '🛤️ 學習路線',
    'raijax-entry/non_goals': '🚫 不做什麼'
};

// Initialize app
async function init() {
    try {
        // Load data
        const [itemsRes, manifestRes] = await Promise.all([
            fetch('data/items.json'),
            fetch('data/manifest.json')
        ]);
        
        if (!itemsRes.ok || !manifestRes.ok) {
            throw new Error('Failed to load data files');
        }
        
        allItems = await itemsRes.json();
        manifest = await manifestRes.json();
        
        // Build navigation
        buildNavigation();
        
        // Show stats
        updateStats();
        
        // Show all items initially
        filterAndDisplayItems();
        
        // Setup event listeners
        setupEventListeners();
        
    } catch (error) {
        console.error('Error initializing app:', error);
        itemList.innerHTML = `
            <div class="empty-state">
                <div class="icon">⚠️</div>
                <p>無法載入資料。請確認已執行 <code>python tools/build_viewer.py</code></p>
                <p style="margin-top: 1rem; font-size: 0.8rem; color: #666;">
                    如果使用 file:// 開啟遇到 CORS 問題，請使用：<br>
                    <code>cd viewer && python -m http.server 8000</code>
                </p>
            </div>
        `;
    }
}

// Build sidebar navigation
function buildNavigation() {
    const landscapeNav = document.getElementById('landscapeNav');
    const gapsNav = document.getElementById('gapsNav');
    const reportsNav = document.getElementById('reportsNav');
    const frameworkNav = document.getElementById('frameworkNav');
    const raijaxEntryNav = document.getElementById('raijaxEntryNav');
    
    // Clear existing
    landscapeNav.innerHTML = '';
    gapsNav.innerHTML = '';
    reportsNav.innerHTML = '';
    frameworkNav.innerHTML = '';
    if (raijaxEntryNav) raijaxEntryNav.innerHTML = '';
    
    // Group items by category
    const categories = {};
    for (const key in manifest.categories) {
        const [group] = key.split('/');
        if (!categories[group]) categories[group] = [];
        categories[group].push(key);
    }
    
    // Build landscape nav
    if (categories.landscape) {
        // Put index first, then sort others
        const sorted = categories.landscape.sort((a, b) => {
            if (a.includes('index')) return -1;
            if (b.includes('index')) return 1;
            return a.localeCompare(b);
        });
        
        for (const cat of sorted) {
            if (cat === 'landscape/index') continue; // Skip index in nav
            const count = manifest.categories[cat]?.count || 0;
            landscapeNav.innerHTML += createNavItem(cat, count);
        }
    }
    
    // Build gaps nav
    if (categories.gaps) {
        for (const cat of categories.gaps) {
            gapsNav.innerHTML += createNavItem(cat, 1, true);
        }
    }
    
    // Build reports nav
    if (categories.reports) {
        for (const cat of categories.reports) {
            reportsNav.innerHTML += createNavItem(cat, 1, true);
        }
    }
    
    // Build framework nav
    if (categories.framework) {
        for (const cat of categories.framework) {
            frameworkNav.innerHTML += createNavItem(cat, 1, true);
        }
    }
    
    // Build raijax-entry nav
    if (categories['raijax-entry'] && raijaxEntryNav) {
        for (const cat of categories['raijax-entry']) {
            raijaxEntryNav.innerHTML += createNavItem(cat, 1, true);
        }
    }
}

function createNavItem(category, count, isDoc = false) {
    const name = categoryNames[category] || category.split('/')[1];
    return `
        <li>
            <a href="#" data-category="${category}" data-is-doc="${isDoc}">
                ${name}
                <span class="count">${count}</span>
            </a>
        </li>
    `;
}

// Update stats display
function updateStats() {
    const entryCount = allItems.filter(i => i.kind === 'entry').length;
    const docCount = allItems.filter(i => i.kind === 'doc').length;
    
    statsEl.innerHTML = `
        <div>📊 條目總數: <strong>${entryCount}</strong></div>
        <div>📄 文件總數: <strong>${docCount}</strong></div>
        <div>🕐 更新時間: <strong>${new Date(manifest.generated_at).toLocaleString('zh-TW')}</strong></div>
    `;
}

// Setup event listeners
function setupEventListeners() {
    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterAndDisplayItems();
    });
    
    // Type filter
    typeFilter.addEventListener('change', (e) => {
        currentTypeFilter = e.target.value;
        filterAndDisplayItems();
    });
    
    // Navigation clicks
    document.querySelectorAll('.nav-list').forEach(nav => {
        nav.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (!link) return;
            
            e.preventDefault();
            
            // Update active state
            document.querySelectorAll('.nav-list a').forEach(a => a.classList.remove('active'));
            link.classList.add('active');
            
            const category = link.dataset.category;
            const isDoc = link.dataset.isDoc === 'true';
            
            if (isDoc) {
                // Show document directly
                const doc = allItems.find(i => `${i.category}/${i.id.split('_').slice(1).join('_')}` === category || 
                                               i.id === `${category.split('/')[0]}_${category.split('/')[1]}`);
                if (doc) {
                    showDetail(doc);
                }
            } else {
                // Filter by category
                currentCategory = category.split('/')[1];
                filterAndDisplayItems();
                showList();
            }
        });
    });
    
    // Back button
    backBtn.addEventListener('click', () => {
        showList();
    });
    
    // Item click
    itemList.addEventListener('click', (e) => {
        const card = e.target.closest('.item-card');
        if (!card) return;
        
        const itemId = card.dataset.id;
        const item = allItems.find(i => i.id === itemId);
        if (item) {
            showDetail(item);
        }
    });
}

// Filter and display items
function filterAndDisplayItems() {
    filteredItems = allItems.filter(item => {
        // Only show entries in list (not docs)
        if (item.kind !== 'entry') return false;
        
        // Category filter
        if (currentCategory && item.category !== currentCategory) return false;
        
        // Type filter
        if (currentTypeFilter && item.type !== currentTypeFilter) return false;
        
        // Search filter
        if (searchQuery) {
            const searchableText = [
                item.name,
                item.type,
                item.language,
                item.summary,
                item.content_md
            ].filter(Boolean).join(' ').toLowerCase();
            
            if (!searchableText.includes(searchQuery)) return false;
        }
        
        return true;
    });
    
    renderList();
}

// Render item list
function renderList() {
    // Update title
    if (currentCategory) {
        listTitle.textContent = categoryNames[`landscape/${currentCategory}`] || currentCategory;
    } else if (searchQuery) {
        listTitle.textContent = `搜尋: "${searchQuery}"`;
    } else {
        listTitle.textContent = '所有條目';
    }
    
    listCount.textContent = filteredItems.length;
    
    if (filteredItems.length === 0) {
        itemList.innerHTML = `
            <div class="empty-state">
                <div class="icon">🔍</div>
                <p>沒有符合條件的條目</p>
            </div>
        `;
        return;
    }
    
    itemList.innerHTML = filteredItems.map(item => `
        <div class="item-card" data-id="${item.id}">
            <div class="item-card-header">
                <h3>${escapeHtml(item.name || 'Untitled')}</h3>
                <span class="item-type ${getTypeClass(item.type)}">${item.type || 'Unknown'}</span>
            </div>
            ${item.summary ? `<div class="item-summary">${escapeHtml(item.summary)}</div>` : ''}
            <div class="item-meta">
                ${item.language ? `<span>🌐 ${item.language}</span>` : ''}
                ${item.links?.length ? `<span>🔗 ${item.links.length} link(s)</span>` : ''}
            </div>
        </div>
    `).join('');
}

// Get CSS class for item type
function getTypeClass(type) {
    if (!type) return '';
    const t = type.toLowerCase();
    if (t.includes('forum')) return 'forum';
    if (t.includes('discord')) return 'discord';
    if (t.includes('reddit')) return 'reddit';
    if (t.includes('wiki')) return 'wiki';
    if (t.includes('blog')) return 'blog';
    if (t.includes('marketplace')) return 'marketplace';
    if (t.includes('docs')) return 'docs';
    if (t.includes('tool')) return 'tool';
    if (t.includes('course')) return 'course';
    if (t.includes('repo')) return 'repo';
    return '';
}

// Show detail view
function showDetail(item) {
    listView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    detailContent.innerHTML = item.content_html || `<pre>${escapeHtml(item.content_md || '')}</pre>`;
}

// Show list view
function showList() {
    detailView.classList.add('hidden');
    listView.classList.remove('hidden');
}

// Escape HTML
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Start app
document.addEventListener('DOMContentLoaded', init);
