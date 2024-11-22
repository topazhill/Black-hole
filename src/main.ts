
export function setupHole(element: HTMLElement) {
    let size_multiplier = 1.1;
    let size = 20;
    let swap = false;

    const grow = () => {
        if ((size > 2000) && (!swap)) {
            swap = true;
            element.style.backgroundColor = 'white';
        }
        else if ((size < 20) && (swap)) {
            swap = false;
            element.style.backgroundColor = 'black';
        }
        if (swap) {
            size /= size_multiplier;
        } else {
            size *= size_multiplier;
        }
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        element.style.top = `${336 - (size - 20)/ 2}px`;
        element.style.left = `${845 - (size - 20) / 2}px`;
    }

    element.addEventListener('click', () => grow());
}

//TIP There's much more in WebStorm to help you be more productive. Press <shortcut actionId="Shift"/> <shortcut actionId="Shift"/> and search for <b>Learn WebStorm</b> to open our learning hub with more things for you to try.

setupHole(document.getElementById('blackhole') as HTMLElement);