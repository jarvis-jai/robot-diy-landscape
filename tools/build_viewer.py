#!/usr/bin/env python3
"""
Build viewer data from landscape, gaps, and framework markdown files.
Outputs items.json and manifest.json for the local dashboard.
"""

import os
import re
import json
import csv
from datetime import datetime
from pathlib import Path

REPO_ROOT = Path(__file__).parent.parent
VIEWER_DATA = REPO_ROOT / "viewer" / "data"

def parse_landscape_entries(filepath):
    """Parse landscape/*.md files and extract entries based on schema."""
    entries = []
    content = filepath.read_text(encoding='utf-8')
    category = filepath.stem  # e.g., 'communities', 'platforms'
    
    # Split by ### headers (each entry starts with ### Name)
    entry_blocks = re.split(r'\n(?=### )', content)
    
    for block in entry_blocks:
        if not block.strip() or not block.startswith('### '):
            continue
        
        # Skip template/example blocks
        if '（待填充）' in block or '範例格式' in block or '條目名稱' in block:
            continue
        
        entry = {
            'id': None,
            'kind': 'entry',
            'category': category,
            'name': None,
            'type': None,
            'language': None,
            'summary': None,
            'strengths': [],
            'weaknesses': [],
            'activity': None,
            'relevance': None,
            'links': [],
            'content_md': block.strip()
        }
        
        # Extract name from ### header
        name_match = re.match(r'### (.+?)(?:\n|$)', block)
        if name_match:
            entry['name'] = name_match.group(1).strip()
            entry['id'] = f"{category}_{entry['name'].lower().replace(' ', '_').replace('/', '_')[:50]}"
        
        # Extract schema fields
        patterns = {
            'name': r'\*\*Name\*\*[：:]\s*(.+?)(?:\n|$)',
            'type': r'\*\*Type\*\*[：:]\s*(.+?)(?:\n|$)',
            'language': r'\*\*Primary language\*\*[：:]\s*(.+?)(?:\n|$)',
            'summary': r'\*\*一句話定位\*\*[：:]\s*(.+?)(?:\n|$)',
            'activity': r'\*\*活躍度訊號\*\*[：:]\s*(.+?)(?:\n|$)',
            'relevance': r'\*\*與我們的關聯[（(]一句話[)）]\*\*[：:]\s*(.+?)(?:\n|$)',
        }
        
        for key, pattern in patterns.items():
            match = re.search(pattern, block, re.IGNORECASE)
            if match:
                entry[key] = match.group(1).strip()
        
        # Extract links
        link_match = re.search(r'\*\*Link\(s\)\*\*[：:]\s*(.+?)(?:\n|$)', block)
        if link_match:
            links_text = link_match.group(1)
            entry['links'] = re.findall(r'https?://[^\s<>\[\]]+', links_text)
        
        # Extract strengths
        strengths_match = re.search(r'\*\*強項[（(]≤3[)）]\*\*[：:]\s*\n((?:\s*-\s*.+\n?)+)', block)
        if strengths_match:
            entry['strengths'] = [s.strip().lstrip('- ') for s in strengths_match.group(1).strip().split('\n') if s.strip()]
        
        # Extract weaknesses
        weaknesses_match = re.search(r'\*\*弱項/缺口[（(]≤3，可觀察[)）]\*\*[：:]\s*\n((?:\s*-\s*.+\n?)+)', block)
        if weaknesses_match:
            entry['weaknesses'] = [w.strip().lstrip('- ') for w in weaknesses_match.group(1).strip().split('\n') if w.strip()]
        
        if entry['name']:
            entries.append(entry)
    
    return entries


def parse_document(filepath, kind, category):
    """Parse a document file (gaps, reports, framework) as a single item."""
    content = filepath.read_text(encoding='utf-8')
    title = filepath.stem.replace('_', ' ').title()
    
    # Try to extract title from first # header
    title_match = re.match(r'#\s+(.+?)(?:\n|$)', content)
    if title_match:
        title = title_match.group(1).strip()
        # Remove emoji if present
        title = re.sub(r'^[^\w\s]+\s*', '', title)
    
    return {
        'id': f"{category}_{filepath.stem}",
        'kind': kind,
        'category': category,
        'name': title,
        'type': 'Document',
        'language': 'zh-TW',
        'summary': f'{category} document',
        'links': [],
        'content_md': content
    }


def simple_md_to_html(md_text):
    """Convert markdown to simple HTML (basic conversion)."""
    html = md_text
    
    # Escape HTML
    html = html.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
    
    # Headers
    html = re.sub(r'^#### (.+)$', r'<h4>\1</h4>', html, flags=re.MULTILINE)
    html = re.sub(r'^### (.+)$', r'<h3>\1</h3>', html, flags=re.MULTILINE)
    html = re.sub(r'^## (.+)$', r'<h2>\1</h2>', html, flags=re.MULTILINE)
    html = re.sub(r'^# (.+)$', r'<h1>\1</h1>', html, flags=re.MULTILINE)
    
    # Bold and italic
    html = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', html)
    html = re.sub(r'\*(.+?)\*', r'<em>\1</em>', html)
    
    # Links (restore < and > for URLs)
    html = re.sub(r'\[([^\]]+)\]\((https?://[^\)]+)\)', r'<a href="\2" target="_blank">\1</a>', html)
    html = re.sub(r'(https?://[^\s&]+)', r'<a href="\1" target="_blank">\1</a>', html)
    
    # Code blocks
    html = re.sub(r'```(\w*)\n(.*?)```', r'<pre><code>\2</code></pre>', html, flags=re.DOTALL)
    html = re.sub(r'`([^`]+)`', r'<code>\1</code>', html)
    
    # Lists
    html = re.sub(r'^- (.+)$', r'<li>\1</li>', html, flags=re.MULTILINE)
    html = re.sub(r'(<li>.*</li>\n?)+', r'<ul>\g<0></ul>', html)
    
    # Paragraphs (simple: double newlines)
    html = re.sub(r'\n\n+', '</p><p>', html)
    html = f'<p>{html}</p>'
    
    # Clean up empty paragraphs
    html = re.sub(r'<p>\s*</p>', '', html)
    html = re.sub(r'<p>(<h[1-4]>)', r'\1', html)
    html = re.sub(r'(</h[1-4]>)</p>', r'\1', html)
    html = re.sub(r'<p>(<ul>)', r'\1', html)
    html = re.sub(r'(</ul>)</p>', r'\1', html)
    html = re.sub(r'<p>(<pre>)', r'\1', html)
    html = re.sub(r'(</pre>)</p>', r'\1', html)
    
    return html


def get_file_mtime(filepath):
    """Get file modification time as ISO string."""
    mtime = os.path.getmtime(filepath)
    return datetime.fromtimestamp(mtime).isoformat()


def build_viewer_data():
    """Main function to build all viewer data."""
    items = []
    manifest = {
        'generated_at': datetime.now().isoformat(),
        'categories': {},
        'total_entries': 0,
        'total_docs': 0
    }
    
    # Parse landscape files
    landscape_dir = REPO_ROOT / "landscape"
    if landscape_dir.exists():
        for md_file in sorted(landscape_dir.glob("*.md")):
            if md_file.stem == 'index':
                # Index is a document, not entries
                items.append(parse_document(md_file, 'doc', 'landscape'))
                continue
            
            entries = parse_landscape_entries(md_file)
            items.extend(entries)
            
            manifest['categories'][f'landscape/{md_file.stem}'] = {
                'count': len(entries),
                'last_updated': get_file_mtime(md_file)
            }
            manifest['total_entries'] += len(entries)
    
    # Parse gaps files
    gaps_dir = REPO_ROOT / "gaps"
    if gaps_dir.exists():
        for md_file in sorted(gaps_dir.glob("*.md")):
            doc = parse_document(md_file, 'doc', 'gaps')
            items.append(doc)
            manifest['categories'][f'gaps/{md_file.stem}'] = {
                'count': 1,
                'last_updated': get_file_mtime(md_file)
            }
            manifest['total_docs'] += 1
    
    # Parse reports files
    reports_dir = REPO_ROOT / "reports"
    if reports_dir.exists():
        for md_file in sorted(reports_dir.glob("*.md")):
            doc = parse_document(md_file, 'doc', 'reports')
            items.append(doc)
            manifest['categories'][f'reports/{md_file.stem}'] = {
                'count': 1,
                'last_updated': get_file_mtime(md_file)
            }
            manifest['total_docs'] += 1
    
    # Parse framework documents
    framework_files = ['README.md', 'CONSTITUTION.md', 'WORK_QUEUE.md', 'COMMIT_POLICY.md', 'SOURCES.md', 'ROADMAP.md']
    for fname in framework_files:
        fpath = REPO_ROOT / fname
        if fpath.exists():
            doc = parse_document(fpath, 'doc', 'framework')
            items.append(doc)
            manifest['categories'][f'framework/{fpath.stem}'] = {
                'count': 1,
                'last_updated': get_file_mtime(fpath)
            }
            manifest['total_docs'] += 1
    
    # Parse raijax-entry documents (IA blueprints)
    raijax_entry_dir = REPO_ROOT / "raijax-entry"
    if raijax_entry_dir.exists():
        for md_file in sorted(raijax_entry_dir.glob("*.md")):
            doc = parse_document(md_file, 'doc', 'raijax-entry')
            doc['id'] = f"doc:raijax-entry:{md_file.stem}"
            doc['tags'] = ['raijax', 'entry', 'ia']
            items.append(doc)
            manifest['categories'][f'raijax-entry/{md_file.stem}'] = {
                'count': 1,
                'last_updated': get_file_mtime(md_file)
            }
            manifest['total_docs'] += 1
    
    # Convert markdown to HTML for all items
    for item in items:
        if 'content_md' in item:
            item['content_html'] = simple_md_to_html(item['content_md'])
    
    # Write output files
    VIEWER_DATA.mkdir(parents=True, exist_ok=True)
    
    with open(VIEWER_DATA / "items.json", 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False, indent=2)
    
    with open(VIEWER_DATA / "manifest.json", 'w', encoding='utf-8') as f:
        json.dump(manifest, f, ensure_ascii=False, indent=2)
    
    print(f"✅ Built viewer data:")
    print(f"   - {len(items)} items total")
    print(f"   - {manifest['total_entries']} landscape entries")
    print(f"   - {manifest['total_docs']} documents")
    print(f"   - Output: {VIEWER_DATA / 'items.json'}")
    print(f"   - Output: {VIEWER_DATA / 'manifest.json'}")


if __name__ == '__main__':
    build_viewer_data()
