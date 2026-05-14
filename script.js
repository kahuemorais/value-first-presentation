function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    document.querySelectorAll('.accordion-mobile .accordion-header').forEach(h => h.classList.remove('active'));
    document.querySelectorAll('.accordion-mobile .accordion-content').forEach(c => c.classList.remove('active'));

    if (!isActive) {
        header.classList.add('active');
        if (content && content.classList.contains('accordion-content')) {
            content.classList.add('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.accordion-mobile .accordion-header').forEach(header => {
        header.addEventListener('click', () => toggleAccordion(header));
    });
});