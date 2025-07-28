document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get(['researchNotes'], function(result) {
       if (result.researchNotes) {
        document.getElementById('notes').textContent = result.researchNotes;
       } 
    });

    document.getElementById('summarizeBtn').addEventListener('click', () => processText('summarize'));
    document.getElementById('suggestBtn').addEventListener('click', () => processText('suggest'));
    document.getElementById('saveNotesBtn').addEventListener('click', saveNotes);

    // Collapsible toggle
    document.querySelectorAll('.collapsible-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            content.classList.toggle('collapsed');
            icon.textContent = content.classList.contains('collapsed') ? '+' : '−';
        });
    });

    // Resizable panel
    const resizeHandle = document.getElementById('resizeHandle');
    const container = document.querySelector('.container');
    let isResizing = false;

    resizeHandle.addEventListener('mousedown', e => {
        isResizing = true;
        document.body.style.cursor = 'ew-resize';
    });

    window.addEventListener('mousemove', e => {
        if (!isResizing) return;
        let newWidth = e.clientX;
        if (newWidth < 300) newWidth = 300;
        if (newWidth > 800) newWidth = 800;
        container.style.maxWidth = newWidth + 'px';
    });

    window.addEventListener('mouseup', () => {
        isResizing = false;
        document.body.style.cursor = '';
    });

    // Copy to Notes
    document.getElementById('copyToNotesBtn').addEventListener('click', () => {
        const resultContent = document.querySelector('#results .result-content');
        if (resultContent) {
            const notesBox = document.getElementById('notes');
            notesBox.textContent += (notesBox.textContent ? "\n\n" : "") + resultContent.innerText;
            notesBox.scrollTop = notesBox.scrollHeight;

            const notesContent = document.getElementById('notesContent');
            if (notesContent.classList.contains('collapsed')) {
                notesContent.classList.remove('collapsed');
                document.querySelector('#notesHeader .toggle-icon').textContent = '−';
            }
            alert('Result copied to notes!');
        }
    });
});

async function processText(operation) {
    try {
        const [tab] = await chrome.tabs.query({ active:true, currentWindow: true});
        const [{ result }] = await chrome.scripting.executeScript({
            target: {tabId: tab.id},
            function: () => window.getSelection().toString()
        });

        if (!result) {
            showResult('Please select some text first');
            return;
        }

        const response = await fetch('http://localhost:8080/api/research/process', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content: result, operation })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const text = await response.text();
        showResult(text.replace(/\n/g,'<br>'));

    } catch (error) {
        showResult('Error: ' + error.message);
    }
}

async function saveNotes() {
    const notes = document.getElementById('notes').textContent;
    chrome.storage.local.set({ 'researchNotes': notes}, function() {
        alert('Notes saved successfully');
    });
}

function showResult(content) {
    document.getElementById('results').innerHTML = `<div class="result-item"><div class="result-content">${content}</div></div>`;
    document.getElementById('copyToNotesBtn').style.display = 'block'; 
}
