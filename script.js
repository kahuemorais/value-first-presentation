document.addEventListener('DOMContentLoaded', () => {
    const scoreButtons = document.querySelectorAll('.score-btn');
    const resetBtn = document.querySelector('.reset-btn');
    const totalValue = document.querySelector('.total-value');
    const scoreMessage = document.querySelector('.score-message');
    const questions = document.querySelectorAll('.question-item');

    const interpretations = [
        { min: 25, max: 30, message: 'Structurally healthy. Maintain cadence and re-diagnose every two quarters to prevent drift.' },
        { min: 18, max: 24, message: 'Drift forming. Two or more failures are taking root. Diagnose now.' },
        { min: 0, max: 17, message: 'Structural failure. Intervention required. The cost of waiting another quarter exceeds the cost of acting.' }
    ];

    function updateAriaStates(selector) {
        const buttons = selector.querySelectorAll('.score-btn');
        const scoreDisplay = selector.querySelector('.selected-score-display');
        let selectedVal = null;

        buttons.forEach(btn => {
            const isSelected = btn.classList.contains('selected');
            btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
            if (isSelected) selectedVal = btn.dataset.val;
        });

        if (scoreDisplay) {
            if (selectedVal !== null) {
                scoreDisplay.textContent = `Score: ${selectedVal}`;
                scoreDisplay.classList.add('visible');
            } else {
                scoreDisplay.textContent = '';
                scoreDisplay.classList.remove('visible');
            }
        }
    }

    scoreButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.question-item');
            const selector = item.querySelector('.question-score-selector');

            if (btn.classList.contains('selected')) {
                btn.classList.remove('selected');
            } else {
                selector.querySelectorAll('.score-btn').forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
            }
            updateAriaStates(selector);
            updateTotal();
        });

        btn.addEventListener('keydown', (e) => {
            const selector = btn.closest('.question-score-selector');
            const buttons = Array.from(selector.querySelectorAll('.score-btn'));
            const currentIndex = buttons.indexOf(btn);

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % buttons.length;
                buttons[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[prevIndex].focus();
            }
        });
    });

    resetBtn.addEventListener('click', () => {
        questions.forEach(q => {
            const selector = q.querySelector('.question-score-selector');
            selector.querySelectorAll('.score-btn').forEach(b => b.classList.remove('selected'));
            updateAriaStates(selector);
        });

        totalValue.style.color = 'var(--purple-vivid)';
        setTimeout(() => {
            totalValue.style.color = '';
        }, 300);

        updateTotal();
    });

    function updateTotal() {
        let total = 0;
        let answered = 0;
        questions.forEach(q => {
            const selected = q.querySelector('.score-btn.selected');
            if (selected) {
                total += parseInt(selected.dataset.val);
                answered++;
            }
        });
        totalValue.textContent = total;

        const interp = interpretations.find(i => total >= i.min && total <= i.max);
        scoreMessage.textContent = interp ? interp.message : '';
    }
});