const cells = document.querySelectorAll('.cell');
let selectedCell = null;

cells.forEach(cell => {
    cell.addEventListener('dragstart', () => {
        selectedCell = cell;
        this.classList.add('dragging');
    });

    cell.addEventListener('dragend', () => {
        selectedCell.classList.remove('dragging');
        selectedCell = null;
    });

    cell.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    cell.addEventListener('drop', () => {
        if (selectedCell) {
            if (cell !== selectedCell) {
                cell.innerHTML = selectedCell.innerHTML;
                selectedCell.innerHTML = '';
            }
        }
    });
});