// GET ALL INPUTS AND ASSIGN TO A VARIIABLE
const inputs = document.querySelectorAll('.controls input');

// HANDLEUPDATE FUNC
function handleUpdate(){
    const suffix = this.dataset || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// CALL CHANGE EVENT ON EACH INPUT
inputs.forEach((input) => input.addEventListener('change', handleUpdate));
