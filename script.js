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
            updateTotal();
        });
    });

    resetBtn.addEventListener('click', () => {
        questions.forEach(q => {
            const selector = q.querySelector('.question-score-selector');
            selector.querySelectorAll('.score-btn').forEach(b => b.classList.remove('selected'));
        });
        updateTotal();
    });

    function updateTotal() {
        let total = 0;
        questions.forEach(q => {
            const selected = q.querySelector('.score-btn.selected');
            if (selected) {
                total += parseInt(selected.dataset.val);
            }
        });
        totalValue.textContent = total;

        const interp = interpretations.find(i => total >= i.min && total <= i.max);
        scoreMessage.textContent = interp ? interp.message : '';
    }
});