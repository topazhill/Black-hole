
export function setupHole() {
    let size_multiplier = 1.1;
    let size = 20;
    let state = 'sun';

    let black_hole = document.getElementById('blackhole') as HTMLElement;
    black_hole.style.backgroundColor = "orange";
    let sun_text = document.getElementById('sun_text') as HTMLElement;
    let black_hole_text = document.getElementById('black_hole_text') as HTMLElement;
    black_hole_text.style.display = 'none';

    const grow = (element: HTMLElement) => {
        size *= size_multiplier;

        if ((state == 'sun') && (size > 300)) {
            swapText();
        }
        else if (state == 'sun') {
            element.style.backgroundColor = `rgba(${Math.floor(255 - size * 0.5)}, ${Math.floor(165 - size * 0.7)}, 0, 1)`;
        }

        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${336 - (size - 20)/ 2}px`;
        element.style.left = `${845 - (size - 20) / 2}px`;
    }

    const swapText = () => {
        state = 'blackhole';
        sun_text.style.display = 'none';
        black_hole_text.style.display = 'block';
        black_hole.style.backgroundColor = 'black';
        size = 20;
        black_hole.style.width = `${size}px`;
        black_hole.style.height = `${size}px`;
        black_hole.style.top = `${336 - (size - 20)/ 2}px`;
        black_hole.style.left = `${845 - (size - 20) / 2}px`;
    }

    black_hole.addEventListener('click', () => grow(black_hole));
}

setupHole();
