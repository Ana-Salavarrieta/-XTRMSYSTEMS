const btnMostrar = document.getElementById('mostrar')
const resumen = document.getElementById('resumen')

if (window.innerWidth <= 768) {
    btnMostrar.addEventListener('click', () => {
        resumen.style.display == 'block' ? resumen.style.display = 'none' : resumen.style.display = 'block'

        if (resumen.style.display == 'block') {
            btnMostrar.style.borderBottomLeftRadius = '0'
            btnMostrar.style.borderBottomRightRadius = '0'
        } else {
            btnMostrar.style.borderBottomLeftRadius = '12px'
            btnMostrar.style.borderBottomRightRadius = '12px'
        }
    })
    
}